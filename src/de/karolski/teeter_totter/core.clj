(ns de.karolski.teeter-totter.core
  (:use (clojure.contrib [logging :only (error warn info with-logs)])
        compojure.core
        hiccup.core
        hiccup.page-helpers
        ring.adapter.jetty
        [clojurejs.js :only (js script with-pretty-print)]
        [cljs.closure :only (build)]
        lamina.core)
  (:require [compojure.route :as route]
            [org.danlarkin [json :as json]]))


(defn render-main []
  [:html
   [:head
    [:script {:type "text/javascript" :src "/static/closure-library/closure/goog/base.js"}]
    (script
     (goog.require "goog.net.BrowserChannel")
     (goog.require "goog.debug.Logger")
     (goog.require "goog.debug.Console")
     (goog.require "goog.json")
     (goog.require "goog.dom")
     (defn say-hi []
       (let [bc (new goog.net.BrowserChannel 8)
             handler (new goog.net.BrowserChannel.Handler)
             log (new goog.debug.Logger.getLogger "Local") 
             console (new goog.debug.Console)]
         ;; enable logging into firebug
         (.setCapturing console true)
         ;; remove stuff from browserchannel
         (.addFilter console "goog.net.BrowserChannel")
         (set! handler.channelOpened (fn [bc] (.info log "Channel Opened")))
         (set! handler.channelClosed (fn [bc pending-maps undelivered-maps] (.info log "Channel Closed")))
         (set! handler.channelError (fn [bc error] (.info log (+ "Channel Error:" error))))
         (set! handler.channelHandleArray
               (fn [bc array]
                 (.info log (+ "Channel Handle Array:" array))
                 (.sendMap bc {:result (goog.json.serialize (eval array))})))
         (.info log "test")
         (.setHandler bc handler)
         (.connect bc "channel/test" "channel/channel" {})))
     )]
   [:body {:onload (js (say-hi))}
    [:div#logdiv]]])

;; (defn xmlhttp-chunk-seq [& {:keys [wait] :or {wait 2000}}]
;;   (let [c (ref "111112")]
;;     (proxy [java.io.InputStream] []
;;       (available [] (count @c))
;;       (read ([]
;;                (when (== (count @c) 1)
;;                  (Thread/sleep wait))
;;                (dosync
;;                 (let [ret (first @c)]
;;                   (alter c rest)
;;                   (int ret))))
;;             ([b-arr]
;;                (let [m (min (count b-arr) (.available this))]
;;                  (println "Reading out" m "bytes")
;;                  (dotimes [x m]
;;                    (let [b (.read this)]
;;                      (aset b-arr x (byte b))))
;;                  m))))))

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

(defn gen-session-id
  "Generate a random session id."
  []
  (reduce str "" (repeatedly 16 (partial rand-int 10))))

(defonce ^{:doc "Ref containing a map of all sessions. Where keys are
session ids and keys are client maps."} +sessions+ (ref {}))

(defonce +session-recv-channel+ (permanent-channel))

(defn add-session
  "Add a session to the session map. It must have a :sid key."
  [sess]
  (enqueue +session-recv-channel+ sess)
  sess)

(defn sessions
  "Returns a map of all sessions. Where each key is the session-id and
  the value the session/client map."
  [] @+sessions+)

(defonce +ping-thread-active+ (atom false))

(defn remove-old-sessions
  []
  (dosync
   (alter +sessions+
          (fn [sessions]
            (let [keys (map :sid (filter #(< (+ (:last-active %) 60e9)
                                             (System/nanoTime))
                                         (vals sessions)))]
              (println "Removing sessions:" keys)
              (apply dissoc sessions
                     keys))))))

(receive-all
 +session-recv-channel+
 ;; add the session to the session map
 (fn [session] (dosync (alter +sessions+ (fn [sessions] (assoc sessions (:sid session) session)))))
 ;; remove any old sessions from the session map
 (fn [_] (remove-old-sessions))
 ;; in case the ping thread is not active, activate it
 (fn [_] (when (not @+ping-thread-active+)
           (reset! +ping-thread-active+ true)
           (future
            (while @+ping-thread-active+
              (Thread/sleep 30000)
              (remove-old-sessions)
              (if (empty? (sessions))
                (reset! +ping-thread-active+ false)
                (broadcast-eval "noop")))))))

;; the global channel. Anything sent to it will go to any client
(def +broadcast-channel+ (permanent-channel))

(defn gen-client
  "Generate and return a new client map."
  [& {:keys [sid version host-prefix] :or {version 8 host-prefix ""}}]
  {:last-active (System/nanoTime)
   :sid (or sid (gen-session-id))
   :version version
   :host-prefix host-prefix
   :last-response-array-id 0
   :forward-channel (channel) ;; the channel from client -> server
   :backward-channel (doto (channel)
                       (->> #_ch
                        (siphon +broadcast-channel+))) ;; the channel from server -> client
   :outstanding-backchannel-bytes 0})

(defn gen-session-create-response
  "Generate a response for session creation which the Google Closure
  BrowserChannel can understand."
  [client]
  (gen-xhr-response [["c" (:sid client) (:host-prefix client) (:version client)]]))

(defn get-client
  "Get the client with the specified session id. If no such client
  given, create one."
  ([] (get-client (gen-session-id)))
  ([sid]
     (or (get (sessions) sid)
         (add-session (gen-client :sid sid)))))

(defn update-client
  "Update the client with the specified session id using the function f."
  [sid f]
  (dosync
   (alter +sessions+ (fn [session] (update-in session [sid] f)))))

(defn eval-on-client*
  "Evaluate the javascript code given as a string on the clients
  browser."
  [client js-str]
  (enqueue (:backward-channel client) [js-str])
  (receive (:forward-channel client) identity))

(defmacro eval-on-client
  "Like EVAL-ON-CLIENT, but wraps BODY inside a (js ...) form."
  [client & body]
  `(eval-on-client* ~client (js ~@body)))

(defn reval-on-client*
  "Like EVAL-ON-CLIENT*, but also return the evaluated value."
  [client js-str & {:keys [timeout] :or {timeout 3000}}]
  (eval-on-client* client js-str)
  (json/decode
   (get (wait-for-message (:forward-channel client) timeout) "result")))

(defmacro reval-on-client
  "Like EVAL-ON-CLIENT, but for REVAL-ON-CLIENT*."
  [client & body]
  `(reval-on-client* ~client (js ~@body)))

(defn broadcast-eval*
  "Evaluate the javascript code given as a string on *all* connected clients
  browsers."
  [js-str]
  (enqueue +broadcast-channel+ [js-str])
  ;; ensure the result is popped from the forward channel
  (doseq [ch (map :forward-channel (vals (sessions)))]
    (receive ch identity)))

(defmacro broadcast-eval
  "Like BROADCAST-EVAL*, but wraps BODY inside a (js ...) form."
  [& body]
  `(broadcast-eval* (js ~@body)))

(defroutes main-routes
  (GET "/" [] (html (render-main)))
  ;; testing the connection
  (GET "/channel/test" [& args]
       (do (println args) 
           (cond
            (= (args "MODE") "init") (json/encode ["",""])
            (= (args "TYPE") "xmlhttp")

            ;; we have to send 2 chunks of data with a wait time of 2
            ;; seconds, so the browser can figure out whether it is
            ;; behind a buffering proxy or not
            (xmlhttp-chunk-seq :wait 200)
            )))
  ;; forward channel
  (POST "/channel/channel" [& args]
        (let [client (if (args "SID") (get-client (args "SID")) (get-client))
              data (reduce merge {} 
                           (filter (complement nil?)
                                   (map #(if-let [[_ name] (re-matches #"req\d+_(.*)" %1)]
                                           [name %2])
                                        (keys args)
                                        (vals args))))]
          (when (not= data {})
            (enqueue (:forward-channel client)
                     data))
          (update-client (:sid client) (fn [client] (assoc client :last-active (System/nanoTime))))
          (if (not (args "SID"))
            ;; return information on newly created session
            (gen-session-create-response client) 
          
            ;; Send client backchannel information
            (let [client (get-client (args "SID"))
                  data (json/encode [1 ;; 1=backchannel present, 0=no backchannel
                                     (:last-response-array-id client)
                                     ;; TODO: This is not yet updated inside the backward channel!
                                     (:outstanding-backchannel-bytes client)])]
              (str (count data) "\n" data)))))
  ;; backward channel, this should ideally be a long-lived channel
  (GET "/channel/channel" [& args]
       (let [client (get-client (args "SID"))]
         (map #(dosync
                (let [id (:last-response-array-id client)]
                 (update-client (:sid client) (fn [client] (update-in client [:last-response-array-id] inc)))
                 (gen-xhr-response % :start-index id)))
              (lazy-channel-seq (:backward-channel client)))))
  (route/files "/static" {:root "./static"})
  (route/not-found "Page not found"))

(defonce jetty* (future (run-jetty (var main-routes) {:port 8080})))