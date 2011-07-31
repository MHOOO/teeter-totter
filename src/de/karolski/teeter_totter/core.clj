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
                 (eval array)))
         (.info log "test")
         (.setHandler bc handler)
         (.connect bc "channel/test" "channel/channel" {})
         (.sendMap bc {:some-entry 55})))
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
    (cons "11111"
          (do (Thread/sleep 2000)
              (list "2")))) )

;; 51\n
;; [[0,["c","5432123456789012","b",8]\n
;; ]\n
;; ,[1,["b"]\n
;; ]\n
;; ]\n
(defn gen-xhr-response [data]
  (let [encoded-data (json/encode (map-indexed (fn [i d] [i d]) data))]
    (str (count encoded-data) "\n" encoded-data)))

(defn gen-session-id []
  (reduce str "" (repeatedly 16 (partial rand-int 10))))

(def +sessions+ (ref {}))

(defn gen-session-create-response [& {:keys [version host-prefix] :or {version 8 host-prefix ""}}]
  (dosync
   (alter +sessions+ #(assoc % (gen-session-id)
                             {:last-active (System/nanoTime)
                              :last-response-array-id 0
                              :outstanding-backchannel-bytes 0}))
   (gen-xhr-response [["c" (gen-session-id) host-prefix version]])))

(defonce +channel+ (channel))

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
            ;; (java.io.StringBufferInputStream. "111113")
            )))
  ;; forward channel
  (POST "/channel/channel" [& args]
        ;; TODO: Process the input map from the client
        (if (not (args "SID"))
          ;; create session for user
          (gen-session-create-response)
          
          ;; Send client backchannel information
          (let [user-map (@+sessions+ (args "SID"))
                data (json/encode [1 ;; 1=backchannel present, 0=no backchannel
                                   (user-map :last-response-array-id)
                                   (user-map :outstanding-backchannel-bytes)])]
            (str (count data) "\n" data))))
  ;; backward channel, this should ideally be a long-lived channel
  (GET "/channel/channel" [& args]
       (lazy-channel-seq +channel+))
  (route/files "/static" {:root "./static"})
  (route/not-found "Page not found"))

(defonce jetty* (future (run-jetty (var main-routes) {:port 8080})))