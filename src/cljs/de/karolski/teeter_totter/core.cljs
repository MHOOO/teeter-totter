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

(defn ^:export jsArr
  "Recursively converts a sequential object into a JavaScript array"
  [seq]
  (.array (vec (map #(if (sequential? %) (jsArr %) %)
                    seq))))


(defn ^:export jsObj
  "Convert a clojure map into a JavaScript object"
  [obj]
  (apply js-obj (apply concat obj)))

(let [log (glogger/getLogger "DEBUG")]
 (defn ^:export debug [& args]
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

;; (defn channel-data-handler )

(defn ^:export setup-connection
  "Establish a permanent connection with the server which allows the
  server to execute js code inside this clients browser."
  []
  (let [log (glogger/getLogger "Local")
        bc (goog.net.BrowserChannel. 8)
        handler (goog.net.BrowserChannel.Handler.)
]
    (.info log "Setting up connection")
    ;; setup events
    (set! (.-channelOpened handler) (fn [bc] (.info log "Channel Opened")))
    (set! (.-channelClosed handler) (fn [bc pending-maps undelivered-maps] (.info log "Channel Closed")))
    (set! (.-channelError handler) (fn [bc error] (.info log (+ "Channel Error:" error))))

    ;; handle code by evaluating it and sending the result back to the client
    (set! (.-channelHandleArray handler)
          (fn [bc array]
            (let [log (glogger/getLogger "Local")]
              (.info log (+ "Channel Handle Array:" array))
              (let [[result error]
                    (try 
                      [(js/eval array) nil]
                      (catch js/Error e
                        (.info log (+ "EVAL ERROR: " e))
                        [nil e]))
                    data (if error
                           {"error" error}
                           {"result" (gjson/serialize result)})
                    ]
                (.sendMap
                 bc
                 (jsObj data))))))
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

(defn ^:export config [c key]
  (-config c key))

(defn ^:export config! [c key val]
  (-config! c key val))

(defn ^:export config-map [c] 
  (-config-map c))

(defn ^:export config!-when
  ;; TODO: this should be a macro
  [val c key]
  (when val
    (config! c key val)))

(defn ^:export generic-configure!
  [c argmap]
  (doseq [[k v] argmap]
    (when (k (config-map c))
      (debug "Setting " k " to " v " on " c)
      (config! c k v))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Listen API
(defn event-kw->google-event
  [event-kw]
  (event-kw
   ;; TODO: sync with seesaw event names
   {:leave goog.ui.Component.EventType.LEAVE
    :open goog.ui.Component.EventType.OPEN
    :uncheck goog.ui.Component.EventType.UNCHECK
    :focus goog.ui.Component.EventType.FOCUS
    :hide goog.ui.Component.EventType.HIDE
    :deactivate goog.ui.Component.EventType.DEACTIVATE
    :close goog.ui.Component.EventType.CLOSE
    :unhighlight goog.ui.Component.EventType.UNHIGHLIGHT
    :highlight goog.ui.Component.EventType.HIGHLIGHT
    :activate goog.ui.Component.EventType.ACTIVATE
    :unselect goog.ui.Component.EventType.UNSELECT
    :enter goog.ui.Component.EventType.ENTER
    :before-show goog.ui.Component.EventType.BEFORE_SHOW
    :enable goog.ui.Component.EventType.ENABLE
    :check goog.ui.Component.EventType.CHECK
    :show goog.ui.Component.EventType.SHOW
    :select goog.ui.Component.EventType.SELECT
    :action goog.ui.Component.EventType.ACTION
    :change goog.ui.Component.EventType.CHANGE
    :blur goog.ui.Component.EventType.BLUR
    :disable goog.ui.Component.EventType.DISABLE}))

(defn listen
  ([c] c)
  ([c event-kw handler]
     (doto c
       (goog.events.listen (event-kw->google-event event-kw) handler)))
  ([c & more]
     (doseq [[event-kw handler] (partition 2 more)]
       (listen c event-kw handler))))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; UI Functions & Protocol implementations


(def +component-opt-map+
     ;; TODO: instead of calling (debug), call (error) or (throw)?
     {:listen [(fn [e] (debug "NOT IMPLEMENTED!") nil) #(apply listen %1 %2)]
      :visible? [#(.getVisible %1) #(.setVisible %1 %2)]
      :items [(fn [e] (debug "NOT IMPLEMENTED!") nil) #(doseq [item %2]
                                                         (.addChild %1 item true))]})

(def +control-opt-map+
     (merge +component-opt-map+
      {:text [#(.getCaption %1) #(.setCaption %1 %2)]}))

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
      ;; {:content [#(.getContent %1) #(.setContent %1 %2)]}
      ;; This is more like in seesaw
      {:content [#(.getChildAt %1 0) #(.addChildAt %1 %2 0 true)]}
      ))


(extend-type goog.ui.Component
  AConfigurable
  (-config [c key] ((get-in (config-map c) [key 0]) c))
  (-config! [c key val] ((get-in (config-map c) [key 1]) c val)))

(extend-protocol AConfigurableMap
  goog.ui.Component
  (-config-map [c] +component-opt-map+)
  goog.ui.Control
  (-config-map [c] +control-opt-map+)
  
  goog.ui.Dialog
  (-config-map [c] +dialog-opt-map+)
  goog.ui.Button
  (-config-map [c] +button-opt-map+)) 



(defn ^:export dialog
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
   :color   - string color value. Example: \"red\". "
  [& {:keys [content title
             button-set
             on-select]
      :or {;button-set goog.ui.Dialog.ButtonSet.CONTINUE_SAVE_CANCEL
           items-visible? true
           }
      :as argmap}]
  (let [dlg (goog.ui.Dialog.)]
    (generic-configure! dlg argmap)
    ;; (goog.events.listen window "unload" (fn [] (goog.events.removeAll)))
    (when on-select
      (goog.events.listen dlg goog.ui.Dialog.EventType.SELECT on-select)) 
    ;; e.key would contain the key
    dlg))

(defn ^:export button
  ;; TODO: maybe this should be color-button instead?
  [& {:keys [text tooltip color]
      :or {text ""}
      :as argmap}]
  (let [btn (if color
              (goog.ui.ColorButton. text)
              (goog.ui.Button. text))]
    (generic-configure! btn argmap) 
    btn))

(defn ^:export text
  [& {:keys [text]
      :or {text ""}
      :as argmap}]
  (let [lbl (goog.ui.LabelInput. text)]
    (generic-configure! lbl argmap)
    lbl))

(defn ^:export label
  [& {:keys [text]
      :as argmap}]
  (let [lbl (goog.ui.Control.)]
    (generic-configure! lbl argmap)
    lbl))

(defn orientation-kw->google-orientation
  [orientation-kw]
  (orientation-kw
   {:horizontal goog.ui.Container.Orientation.HORIZONTAL
    :vertical goog.ui.Container.Orientation.VERTICAL}))

(defn ^:export panel
  [& {:keys [orientation items] :or {orientation :horizontal} :as argmap}]
  (let [c (goog.ui.Component.)]
    (generic-configure! c argmap)
    ;; update each child to be have inlineStyle
    (if (and items (= orientation :horizontal))
      (doseq [item items]
        (goog.style.setInlineBlock (. item (getElement)))) ;; display: inline-block
      (doseq [item items]
        (goog.style.setStyle (. item (getElement)) "display" "block")))
    c))

(defn ^:export horizontal-panel
  [& args]
  (apply panel :orientation :horizontal args))

(defn ^:export vertical-panel
  [& args]
  (apply panel :orientation :vertical args))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Main program

(defn ^:export main []
  (setup-environment :debug? true)
  (setup-connection)

  (let [dlg (dialog :title "Hello There2!"
                    :content
                    (vertical-panel
                     :items
                     [(horizontal-panel
                       :items [(label :text "Name")
                               (text :text "Joe Smith")])
                      (horizontal-panel
                       :items [(label :text "E-Mail")
                               (text :text "Joe.Smith@template.com")])
                      (horizontal-panel
                       :items [(button :text "Push me!"
                                       :tooltip "Not implemented"
                                       :color "green"
                                       :listen [:action (fn [e] (debug "Button clicked!"))])])])
                    
                    )] 
    (.setVisible dlg true))


  
  (let [log (glogger/getLogger "Local")]
    (.info log "Hallo Welt! Ich war hier!")
    (.render
     (button :text "Database" :tooltip "Database Connection Status" :color "red")
     (.getElement goog.dom "buttons"))))