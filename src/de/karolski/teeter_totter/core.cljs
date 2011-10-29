(ns de.karolski.teeter-totter.core
  (:require
   [goog.dom :as dom]
   [goog.object :as goog-object]
   [goog.events.EventType :as goog-event-type]
   [goog.ui.ColorButton :as color-button]
   [goog.ui.Tab :as gtab]
   [goog.ui.Dialog :as gdiag]
   [goog.ui.TabBar :as gtabb]
   [goog.net.BrowserChannel :as bc]
   [goog.debug.Logger :as glogger]
   [goog.debug.Console :as gconsole]
   [goog.json :as gjson]))

(defn jsArr
  "Recursively converts a sequential object into a JavaScript array"
  [seq]
  (.array (vec (map #(if (sequential? %) (jsArr %) %)
                    seq))))


(defn jsObj
  "Convert a clojure map into a JavaScript object"
  [obj]
  (.strobj (into {} (map (fn [[k v]]
                           (let [k (if (keyword? k) (name k) k)
                                 v (if (keyword? v) (name v) v)]
                             (if (map? v)
                               [k (jsObj v)]
                               [k v])))
                         obj))))



(defn dialog []
  (doto (goog.ui.Dialog.)))

(def database-btn
     (doto (goog.ui.ColorButton. "Database")
       (.setTooltip "Database Connection Status")
       (.setValue "red")))

(def dlg (dialog))

(defn ^:export setup-connection []
  (let [bc (goog.net.BrowserChannel. 8)
        handler (new goog.net.BrowserChannel.Handler)
        log (glogger/getLogger "Connection setup") 
        console (goog.debug.Console.)]
    ;; enable logging into firebug
    (.setCapturing console true)
    ;; remove stuff from browserchannel
    ;; (.addFilter console "goog.net.BrowserChannel")

    (.info log bc)
    ;; setup events
    (set! handler.channelOpened (fn [bc] (.info log "Channel Opened")))
    (set! handler.channelClosed (fn [bc pending-maps undelivered-maps] (.info log "Channel Closed")))
    (set! handler.channelError (fn [bc error] (.info log (+ "Channel Error:" error))))

    ;; handle code by evaluating it and sending the result back to the client
    (set! handler.channelHandleArray
          (fn [bc array]
            (.info log (+ "Channel Handle Array:" array))
            (.sendMap bc {:result (gjson/serialize (eval array))})))
    (.info log "Connecting to server through BrowserChannel")
    (.setHandler bc handler)
    (.connect bc "channel/test" "channel/channel" (jsObj {}))))

(defn ^:export main []
  ;; (.render dlg (.getElement goog.dom "dialog"))

  (setup-connection)
  
  (let [;log (new (.getLogger goog.debug.Logger "Local"))
        log (glogger/getLogger "Local")]
    (.info log "Hallo Welt! Ich war hier!")
    (.render database-btn (.getElement goog.dom "buttons")))
  )