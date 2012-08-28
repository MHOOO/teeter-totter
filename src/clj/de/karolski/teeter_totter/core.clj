(ns de.karolski.teeter-totter.core
  (:use (clojure.tools [logging :only (debug warn info with-logs)])
        compojure.core 
        hiccup.core
        hiccup.page
        [hiccup.middleware :only (wrap-base-url)]
        ring.adapter.jetty
        [ring.middleware.params :only [wrap-params]]
        [clojurejs.js :only (js script with-pretty-print)]
        lamina.core
        (clojure [stacktrace :only (print-stack-trace)])
        [watchtower.core :only (watcher file-filter extensions on-change rate)])
  (:require [compojure.route :as route]
            [compojure.handler :as handler]
            [cheshire.custom :as json]))

(defn render-main []
  [:html
   [:head
    [:script {:type "text/javascript" :src "/static/closure-library/closure/goog/base.js"}]

    ;; jslinb files
    [:script {:type "text/javascript" :src "/static/linb/runtime/jsLinb/js/linb-all.js"}]
    [:script {:type "text/javascript" :src "/static/linb/runtime/jsLinb/js/adv-all.js"}]

    ;; google closure css files (TODO: these should be added automatically
    ;; depending on what is being used)
    [:link {:rel "stylesheet" :href "/static/css/common.css"}]
    [:link {:rel "stylesheet" :href "/static/css/dialog.css"}]
    [:link {:rel "stylesheet" :href "/static/css/button.css"}]
    [:link {:rel "stylesheet" :href "/static/css/menubutton.css"}]
    [:link {:rel "stylesheet" :href "/static/css/colormenubutton.css"}]

    ;; teeter-totter library (TODO: rename)
    [:script {:type "text/javascript" :src "/static/js-out/hello/hello.js"}]

    ]
   [:body {:onload
           ;; setup teeter-totter
           (js
            (goog.require "de.karolski.teeter_totter.example")
            (de.karolski.teeter-totter.example.main))}
    [:div#logdiv]]])

(defn xmlhttp-chunk-seq [& {:keys [wait] :or {wait 2000}}]
  (lazy-seq
     (cons
      "11111"
      (lazy-seq
       (do (Thread/sleep 2000)
           (list "2"))))))

;; 51\n
;; [[0,["c","5432123456789012","b",8]\n
;; ]\n
;; ,[1,["b"]\n
;; ]\n
;; ]\n
(defn gen-xhr-response
  "Generate and return an XHR Response with the specified DATA which
  the Google Closure BrowserChannel can understand. "
  [data & {:keys [start-index] :or {start-index 0}}]
  (let [encoded-data (json/encode (map-indexed (fn [i d] [(+ start-index i) d]) data))]
    (str (count encoded-data) "\n" encoded-data)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; BROADCAST CHANNEL
;;
;; the global channel. Anything sent to it will go to any client
(defonce +broadcast-channel+
  (doto (permanent-channel)
    (receive-all #(debug "Message put into +broadcast-channel+: " %))))

(defn broadcast-eval*
  "Evaluate the javascript code given as a string on *all* connected clients
  browsers."
  [js-str]
  (enqueue +broadcast-channel+ [js-str]))

(defmacro broadcast-eval
  "Like BROADCAST-EVAL*, but wraps BODY inside a (js ...) form."
  [& body]
  `(broadcast-eval* (js ~@body)))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; SESSION
;;
(defn gen-session-id
  "Generate a random session id."
  []
  (reduce str "" (repeatedly 16 (partial rand-int 10))))

(defonce ^{:doc "Ref containing a map of all sessions. Where keys are
session ids and keys are client maps."} +sessions+ (ref {}))

(defn sessions
  "Returns a map of all sessions. Where each key is the session-id and
  the value the session/client map."
  [] @+sessions+)

(defn remove-old-sessions
  []
  (dosync
   (alter +sessions+
          (fn [sessions]
            (let [keys (map :sid (filter #(< (+ (:last-active %) 60e9)
                                             (System/nanoTime))
                                         (vals sessions)))]
              (if (not (empty? keys))
                (println "Removing sessions:" keys))
              (apply dissoc sessions
                     keys))))))

(defonce +ping-thread-active+ (atom false))
(def +ping-interval+ 15000)
(defonce +session-recv-channel+
  (let [chan (permanent-channel)]
    (doall
     (map
      receive-all
      (repeat chan)
      [ ;; add the session to the session map
       (fn [session] (dosync (alter +sessions+ (fn [sessions] (assoc sessions (:sid session) session)))))
       ;; remove any old sessions from the session map
       (fn [_] (remove-old-sessions))
       ;; in case the ping thread is not active, activate it
       (fn [_] (when (not @+ping-thread-active+)
                 (reset! +ping-thread-active+ true)
                 (future
                   (while @+ping-thread-active+
                     (Thread/sleep +ping-interval+)
                     (remove-old-sessions)
                     (if (empty? (sessions))
                       (reset! +ping-thread-active+ false)
                       (broadcast-eval "noop"))))))]))
    chan))

(defn add-session
  "Add a session to the session map. It must have a :sid key."
  [sess]
  (debug "Adding session: " sess)
  (enqueue +session-recv-channel+ sess)
  sess)

(defn update-client
  "Update the client with the specified session id using the function f."
  [sid f]
  (dosync
   (alter +sessions+ (fn [session] (update-in session [sid] f)))))

(defn gen-client
  "Generate and return a new client map."
  [& {:keys [sid version host-prefix] :or {version 8 host-prefix ""}}]
  (let [sid (or sid (gen-session-id))
        fc (doto (channel)
             ;; this line serves two purposes: First, it'll update the
             ;; time of the client and second it will ensure forward
             ;; messages do not queue up!
             (receive-all (fn [_] (update-client sid (fn [client] (assoc client :last-active (System/nanoTime))))))
             )]
    {:last-active (System/nanoTime)
     :sid sid
     :version version
     :host-prefix host-prefix
     :last-response-array-id 0
     :forward-channel fc ;; the channel from client -> server
     :backward-channel (let [backward-channel (channel)]
                         ;; also enqueue messages into the broadcast channel
                         (siphon +broadcast-channel+ backward-channel)
                         ;; make sure to purge messages out of the
                         ;; backward-channel. We use a
                         ;; lazy-channel-seq on a forked
                         ;; backward-channel, which would result in
                         ;; messages not being removed unless we purge them
                         (receive-all backward-channel identity)
                         backward-channel) ;; the channel from server -> client
     :outstanding-backchannel-bytes 0}))

(defn get-client
  "Get the client with the specified session id. If no such client
  given, create one."
  ([] (get-client (gen-session-id)))
  ([sid]
     (or (get (sessions) sid)
         (add-session (gen-client :sid sid)))))

(defn gen-session-create-response
  "Generate a response for session creation which the Google Closure
  BrowserChannel can understand."
  [client]
  (gen-xhr-response [["c" (:sid client) (:host-prefix client) (:version client)]]))

(defn eval-on-client*
  "Evaluate the javascript code given as a string on the clients
  browser."
  [client js-str]
  (enqueue (:backward-channel client) [js-str])
  ;; (receive (:forward-channel client) identity)
  )

(defmacro eval-on-client
  "Like EVAL-ON-CLIENT, but wraps BODY inside a (js ...) form."
  [client & body]
  `(eval-on-client* ~client (js ~@body)))

(defn reval-on-client*
  "Like EVAL-ON-CLIENT*, but also return the evaluated value."
  [client js-str & {:keys [timeout] :or {timeout 3000}}]
  (eval-on-client* client js-str)
  (let [r (wait-for-message (:forward-channel client) timeout)]
    (json/decode
     (if-let [error (get r "error")]
       (throw (Exception. error))
       (get r "result")))))

(defmacro reval-on-client
  "Like EVAL-ON-CLIENT, but for REVAL-ON-CLIENT*."
  [client & body]
  `(reval-on-client* ~client (js ~@body)))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; HTML Widgets
(defprotocol Configurable
  (config!* [target args] "Configure one or more options on target. Args is a list of key/value pairs. See (seesaw.core/config!)")
  (config* [target name] "Retrieve the current value for the given named option. See (seesaw.core/config)"))

(defn config! [widget & args]
  (config!* widget args))

(defn config [widget name]
  (config* widget name))

(defprotocol AWidget
  (to-html* [_] "Return HTML code for the widget."))

(defn to-html [widget] (to-html* widget))

(defrecord Button [caption-ref]
  AWidget
  (to-html* [_] (js (goog.ui.ColorButton. caption)))
  Configurable
  (config!* [_ args] ;; (eval-on-client )
            ))

(defn button [& args]
  (Button. nil))

(defroutes channel-routes
;;; testing the connection
  (GET "/test" [& args]
       (cond
        (= (args :MODE) "init") (json/encode [nil nil])
        (= (args :TYPE) "xmlhttp")

        ;; we have to send 2 chunks of data with a wait time of 2
        ;; seconds, so the browser can figure out whether it is
        ;; behind a buffering proxy or not
        (xmlhttp-chunk-seq :wait 2000))) 
;;; forward channel
  (POST "/channel" [& args]
        (debug "browser->server:" args)
        (let [client (if (args :SID) (get-client (args :SID)) (get-client))
              data (reduce merge {} 
                           (filter (complement nil?)
                                   (map #(if-let [[_ name] (re-matches #"req\d+_(.*)" (name %1))]
                                           [name %2])
                                        (keys args)
                                        (vals args))))]
          (when (not= data {})
            (debug "enqueing into forward-channel:" data)
            (enqueue (:forward-channel client)
                     data))
          (update-client (:sid client) (fn [client] (assoc client :last-active (System/nanoTime))))
          (if (not (args :SID))
            ;; return information on newly created session
            (let [r (gen-session-create-response client)]
              (debug "Sending initial setup data:" r)
              r) 
          
            ;; Send client backchannel information
            (let [client (get-client (args :SID))
                  data (json/encode [1 ;; 1=backchannel present, 0=no backchannel
                                     (:last-response-array-id client)
                                     ;; TODO: This is not yet updated inside the backward channel!
                                     (:outstanding-backchannel-bytes client)])]
              (str (count data) "\n" data)))))
;;; backward channel, this should ideally be a long-lived channel
  (GET "/channel" [& args]
       (let [client (get-client (args :SID))]
         (debug "Client" (:sid client) "asked for channel data")
         (map #(dosync
                (let [id (:last-response-array-id client)]
                  (update-client (:sid client) (fn [client] (update-in client [:last-response-array-id] inc)))
                  (gen-xhr-response % :start-index id)))
              (lazy-channel-seq (fork (:backward-channel client)))))))

(defroutes main-routes
  (GET "/" [] (html (render-main)))
  ;; (GET "demo/:sid" [sid]
  ;;      ;; this will either create the below UI, or restore an
  ;;      ;; already created UI
  ;;      (restore-or-create
  ;;        (get-client sid)
  ;;        ;; create a UI
  ;;        (let [d (dialog :content (button :action (fn (alert "Blub"))))]
  ;;          (config! :title "Login"))))

;;;;; BrowserChannel API
  (context "/channel" [] channel-routes)
  (route/files "/static" {:root "./static"})
  (route/not-found "Page not found"))


(defn web-error-handler [handler]
  (fn [request]
    (try
      (handler request)
      (catch Exception e
        (print-stack-trace e)
        (throw e)))))


;; (def wrapped-main-routes (wrap-params main-routes))
(def wrapped-main-routes (-> (handler/site main-routes)
                             (wrap-base-url)
                             (web-error-handler)))

(defonce jetty* (future (run-jetty (var wrapped-main-routes) {:port 8080})))


;; send message to all client when js file changed
(defn file-watcher-handler []
  (debug "broadcasting updates")
  (broadcast-eval
   (do
     (linb.message "Reloading file")
     (goog.Timer.callOnce (fn [] (window.location.reload)) 150))))

(watcher ["static/js-out/hello/"]
         (rate 150)
         (file-filter (extensions :js))
         (on-change
          (fn [_] (file-watcher-handler))))
