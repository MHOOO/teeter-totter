(ns de.karolski.teeter-totter.core
  (:require
   [goog.dom :as dom]
   [goog.object :as goog-object]
   [goog.events.EventType :as goog-event-type]
   [goog.ui.ColorButton :as color-button]
   [goog.ui.Button :as button]
   [goog.ui.Tab :as gtab]
   [goog.ui.Dialog :as gdiag]
   [goog.ui.LabelInput :as ginput]
   [goog.ui.TabBar :as gtabb]
   [goog.net.BrowserChannel :as bc]
   [goog.debug.Logger :as glogger]
   [goog.debug.Console :as gconsole]
   [goog.json :as gjson]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; HELPER FNs

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



(let [log (glogger/getLogger "DEBUG")]
 (defn debug [& args]
   (.info log (reduce str "" args))))
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Connection
(defn ^:export setup-environment
  [& {:keys [debug?]}]
  ;; enable logging into firebug
  (let [console (goog.debug.Console.)]
    ;; remove stuff from browserchannel
    ;; (.addFilter console "goog.net.BrowserChannel")

    (when debug?
      (.setCapturing console true))))


(defn ^:export setup-connection
  "Establish a permanent connection with the server which allows the
  server to execute js code inside this clients browser."
  []
  (let [bc (goog.net.BrowserChannel. 8)
        handler (new goog.net.BrowserChannel.Handler) 
        log (glogger/getLogger "setup-connection")]
    ;; setup events
    (set! handler.channelOpened (fn [bc] (.info log "Channel Opened")))
    (set! handler.channelClosed (fn [bc pending-maps undelivered-maps] (.info log "Channel Closed")))
    (set! handler.channelError (fn [bc error] (.info log (+ "Channel Error:" error))))

    ;; handle code by evaluating it and sending the result back to the client
    (set! handler.channelHandleArray
          (fn [bc array]
            (.info log (+ "Channel Handle Array:" array))
            (.sendMap bc (jsObj {:result (gjson/serialize (js/eval array))}))))
    (.info log "Connecting to server through BrowserChannel")
    (.setHandler bc handler)
    (.connect bc "channel/test" "channel/channel" (jsObj {}))))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Config API
(defprotocol AConfigurable
  (-config [c key] "return the configuration value")
  (-config! [c kay val] "set the configuration value"))

(defprotocol AConfigurableMap
  (-config-map [c] "return the configuration map"))

(defn config [c key]
  (-config c key))

(defn config! [c key val]
  (-config! c key val))

(defn config-map [c] 
  (-config-map c))

(defn config!-when
  ;; TODO: this should be a macro
  [val c key]
  (when val
    (config! c key val)))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; UI Functions & Protocol implementations


(def +component-opt-map+
     {:visible? [#(.getVisible %1) #(.setVisible %1 %2)]})

(def +button-opt-map+
     (merge +component-opt-map+
      {:text [#(.getContent %1) #(.setContent %1 %2)]
       :tooltip [#(.getTooltip %1) #(.setTooltip %1 %2)]
       :color [#(.getValue %1) #(.setValue %1 %2)]
       :button-set [#(.getButtonSet %1) #(.setButtonSet %1 %2)]}))

(def +dialog-opt-map+
     (merge +component-opt-map+
      {:title [#(.getTitle %1) #(.setTitle %1 %2)]}
      {:modal? [#(.getModal %1) #(.setModal %1 %2)]}
      {:content [#(.getContent %1) #(.setContent %1 %2)]}))


(extend-type goog.ui.Component
  AConfigurable
  (-config [c key] ((get-in (config-map c) [key 0]) c))
  (-config! [c key val] ((get-in (config-map c) [key 1]) c val)))

(extend-protocol AConfigurableMap
  goog.ui.Component
  (-config-map [c] +component-opt-map+)
  
  goog.ui.Dialog
  (-config-map [c] +dialog-opt-map+)
  goog.ui.Button
  (-config-map [c] +button-opt-map+)) 



(defn dialog
  "Make dialog visible using (.setVisible).
 Use
   (.addChild dlg child true) to add components to the dialog & render
 them (note the last param of true, set it to false or omit it if you
 don't want the component to be rendered automatically).

 Keyword args:
   :title   - string title
   :content - string html content
   :modal?  - true or false to set modality
   :button-set  - one of the constants from goog.ui.Dialog.ButtonSet
   :on-select   - fn of one argument (the event). Event will have a key member with the users choice.
   :color   - string color value. Example: \"red\".

   :items           - components to be inserted as children.
   :items-visible?  - Whether items should be inserted with their visibility set to true. Default: true."
  [& {:keys [content title
             button-set
             on-select
             items
             items-visible?]
      :or {;button-set goog.ui.Dialog.ButtonSet.CONTINUE_SAVE_CANCEL
           items-visible? true
           }}]
  (let [dlg (goog.ui.Dialog.)]
    (config!-when content dlg :content)
    (config!-when modal? dlg :modal?)
    (config!-when title dlg :title)
    (config!-when button-set dlg :button-set)
    ;; (goog.events.listen window "unload" (fn [] (goog.events.removeAll)))
    (when on-select
      (goog.events.listen dlg goog.ui.Dialog.EventType.SELECT on-select))
    (doseq [item items]
      (.addChild dlg item items-visible?)) 
    ;; e.key would contain the key
    dlg))

(defn button
  ;; TODO: maybe this should be color-button instead?
  [& {:keys [text tooltip color]
      :or {text ""}}]
  (let [btn (if color
              (goog.ui.ColorButton. text)
              (goog.ui.Button. text))]
    (config!-when tooltip btn :tooltip)
    (config!-when color btn :color)
    btn))

(defn input
  [& {:keys [text]
      :or {text ""}}]
  (let [lbl (goog.ui.LabelInput. text)]
    lbl))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Main program

(defn ^:export main []
  (setup-environment :debug? true)
  (setup-connection)

  (let [dlg (dialog :title "Hello There!"
                    :items
                    [(button :text "Push me!" :tooltip "Not implemented" :color "green")
                     (input :text "")])] 
    (.setVisible dlg true))


  
  (let [log (glogger/getLogger "Local")]
    (.info log "Hallo Welt! Ich war hier!")
    (.render
     (button :text "Database" :tooltip "Database Connection Status" :color "red")
     (.getElement goog.dom "buttons")
     )))