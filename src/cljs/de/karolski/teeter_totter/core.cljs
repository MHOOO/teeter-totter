(ns de.karolski.teeter-totter.core 
  (:require
   [de.karolski.teeter-totter.selector :as sel]
   [goog.dom :as dom]
   [goog.object :as goog-object]
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
;; UIFramework API
(defprotocol ^:extern AWidgetFactory
  (-dialog [_ argmap] "Create a dialog.")
  (-button [_ argmap] "Create a button.")
  (-label [_ argmap] "Create a label.")
  (-text [_ argmap] "Create an editable text field."))

(defprotocol ^:extern APanelFactory
  (-panel [_ argmap] "Create a horizontal/vertical panel."))

(defprotocol ^:extern PropertyChangeManager
  (-add-listener [framework widget option-kw handler] "Call handler with new
  value when the option changes on widget.")
  (-remove-listener [framework widget option-kw handler] "Remove the
  handler to be called upon the changed property."))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Config API
(defprotocol ^:extern AConfigurable
  (-config [c key] "return the configuration value")
  (-config! [c kay val] "set the configuration value"))

(defprotocol ^:extern AConfigurableMap
  (-config-map [c] "return the configuration map"))

(defn ^:export config
  "Return the configuration value for the specified key."
  [c key]
  (-config c key))

(defn ^:export config!
  "Set the configuration value for the specified key."
  [c key val]
  (-config! c key val))

(defn ^:export config-map
  "Return a map of 
    KEY -> [GETTER SETTER]
  where KEY is a keyword naming the configuration value, GETTER is a
  function of one argument that returns the configuration value from
  the passed in object and SETTER is a function of two arguments that
  sets the configuration value for the passed in object." [c]
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
;; UI Functions & Protocol implementations
(def ^:dynamic +ui-framework+ (atom nil))

(defn ^:extern set-framework! [f]
  (reset! +ui-framework+ f))

(defn ^:extern framework []
  @+ui-framework+)


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Listen API
(defprotocol ^:export AEventBinder
  (-bind-event [_ obj evnt cb] [_ evnt cb] "Listen on an event & call the callback."))

(defn ^:export listen
  ([c] c)
  ([c event-kw handler]
     (-bind-event (framework) c event-kw handler))
  ([c & more]
     (doseq [[event-kw handler] (partition 2 more)]
       (listen c event-kw handler))))


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
   :button-set  - :yes-no
   :on-select   - fn of one argument (the event). Event will have a key member with the users choice.
   :color   - string color value. Example: \"red\". "
  [& {:keys [content title
             button-set
             on-select]
      :or {;button-set goog.ui.Dialog.ButtonSet.CONTINUE_SAVE_CANCEL
           items-visible? true
           }
      :as argmap}]
  (let [dlg (-dialog (framework) {})]
    (generic-configure! dlg argmap)
    ;; (goog.events.listen window "unload" (fn [] (goog.events.removeAll)))
    (when on-select
      (listen dlg :select on-select)) 
    ;; e.key would contain the key
    dlg))

(defn ^:export button
  ;; TODO: maybe this should be color-button instead?
  [& {:keys [text tooltip color]
      :or {text ""}
      :as argmap}]
  (let [btn (-button (framework) {})]
    (generic-configure! btn argmap) 
    btn))

(defn ^:export text
  [& {:keys [text]
      :or {text ""}
      :as argmap}]
  (let [lbl (-text (framework) {})]
    (generic-configure! lbl argmap)
    lbl))

(defn ^:export label
  [& {:keys [text]
      :as argmap}]
  (let [lbl (-label (framework) {})]
    (generic-configure! lbl argmap)
    lbl))

(defn ^:export panel
  [& {:keys [orientation items] :or {orientation :horizontal} :as argmap}]
  (let [c (-panel (framework) {})]
    (generic-configure! c argmap) 
    c))

(defn ^:export horizontal-panel
  [& args]
  (apply panel :orientation :horizontal args))

(defn ^:export vertical-panel
  [& args]
  (apply panel :orientation :vertical args))


(defn select
  "Select a widget using the given selector expression. Selectors are *always*
   expressed as a vector. root is the root of the widget hierarchy to select
   from, usually either a (frame) or other container.

    (select root [:#id])          Look up widget by id. A single widget is
                                  always returned.

    (select root [:tag])          Look up widgets by \"tag\". In Seesaw tag is
                                  treated as the exact simple class name of a
                                  widget, so :JLabel would match both
                                  javax.swing.JLabel *and* com.me.JLabel.
                                  Be careful!

    (select root [:<class-name>]) Look up widgets by *fully-qualified* class name.
                                  Matches sub-classes as well. Always returns a
                                  sequence of widgets.

    (select root [:<class-name!>]) Same as above, but class must match exactly.

    (select root [:*])             Root and all the widgets under it

  Notes:
    This function will return a single widget *only* in the case where the selector
    is a single identifier, e.g. [:#my-id]. In *all* other cases, a sequence of
    widgets is returned. This is for convenience. Select-by-id is the common case
    where a single widget is almost always desired.

  Examples:

    To find a widget by id from an event handler, use (to-root) on the event to get
    the root and then select on the id:

      (fn [e]
        (let [my-widget (select (to-root e) [:#my-widget])]
          ...))

    Disable all JButtons (excluding subclasses) in a hierarchy:

      (config! (select root [:<javax.swing.JButton>]) :enabled? false)

    More:

      ; All JLabels, no sub-classes allowed
      (select root [:<javax.swing.JLabel!>])

      ; All JSliders that are descendants of a JPanel with id foo
      (select root [:JPanel#foo :JSlider])

      ; All JSliders (and sub-classes) that are immediate children of a JPanel with id foo
      (select root [:JPanel#foo :> :<javax.swing.JSlider>])

      ; All widgets with class foo. Set the class of a widget with the :class option
      (flow-panel :class :my-class) or (flow-panel :class #{:class1 :class2})
      (select root [:.my-class])
      (select root [:.class1.class2])

      ; Select all text components with class input
      (select root [:<javax.swing.text.JTextComponent>.input])

      ; Select all descendants of all panels with class container
      (select root [:JPanel.container :*])

  See:
    (seesaw.selector/select)
    https://github.com/cgrand/enlive
  "
  ([root selector]
    ;; (check-args (vector? selector) "selector must be vector")
    (let [root root ;; (to-widget root)
          result (sel/select root selector)
          id? (and (nil? (second selector)) (sel/id-selector? (first selector)))]
      (if id? (first result) result))))