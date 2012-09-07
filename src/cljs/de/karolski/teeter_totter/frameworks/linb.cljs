(ns de.karolski.teeter-totter.frameworks.linb
  (:use [de.karolski.teeter-totter.core :only [PropertyChangeManager AConfigurable AConfigurableMap AWidgetFactory APanelFactory AEventBinder debug listen config config!]]
        [de.karolski.teeter-totter.bind :only [ToBindable]]
        [de.karolski.teeter-totter.util :only [keywordize-map-keys stringify-map-keys clj->js Children ASimpleNameable AInstance class-for-name class-of]]
        [de.karolski.teeter-totter.selector :only [ASelectable]])
  (:require-macros [de.karolski.teeter-totter.util :as m])
  (:require
   [de.karolski.teeter-totter.core :as c]
   [de.karolski.teeter-totter.bind :as b]
   [de.karolski.teeter-totter.util :as u]))

(deftype Framework [])

(def property-kw->property-name
  {:text "value"
   :title "caption"
   :value "value"})

(extend-type Framework 
  AWidgetFactory 
  (-dialog [_ argmap] (linb.UI.Dialog.))
  (-button [_ argmap] (doto (linb.UI.Button.)
                        (config! :selectable? false)))
  (-label [_ argmap] (doto (linb.UI.Label.)
                       (config! :selectable? false)))
  (-text [_ argmap] (linb.UI.Input.)) 

  AEventBinder
  (-bind-event [_ obj event-kw cb]
    (c/-bind-event obj event-kw cb))

  APanelFactory
  (-panel [_ argmap]
    (doto (linb.UI.Block.)
      (config! :border-type "none")
      (config! :selectable? false)
      (config! :dock :fill)))


  PropertyChangeManager
  (-add-listener [framework widget option-kw handler]
    (when (not (.-de$karolski$teeter_totter$frameworks$linb$-add-listener--listener-map widget))
      ;; (linb.message "Setting up property change listener")
      ;; a potential outside user of the LINB Framework will no longer
      ;; be able to add a property change listener himself, so we have
      ;; to restore that functionality we do so by
      ;; 1. replace .afterPropertyChanged with our own function A
      (m/wrap widget.afterPropertyChanged [& args]
              ;; (linb.message (+ "afterPropertyChanged wrapper called: " args))
              (let [oldf (last args)
                    args (butlast args)]
                (this-as this
                         (if (fn? (first args))
                           (let [f (first args)]
                             (oldf this (fn [profile opt-name value old-value]
                                          ;; (linb.message (+ "property change listener called for property: " opt-name))
                                          ;; 2. ... call the user specified handler
                                          (f profile opt-name value old-value)
                                          
                                          ;; 3. then call any registered handlers
                                          (if-let [handlers (get-in @(.-de$karolski$teeter_totter$frameworks$linb$-add-listener--listener-map
                                                                      ;; (. profile (boxing)) returns the actual UI element
                                                                      (. profile (boxing)))
                                                                    [opt-name])]
                                            (doseq [handler handlers]
                                              (handler value))))))
                           (apply oldf this args)))))
      ;; initialize the listener-map
      (set! (.-de$karolski$teeter_totter$frameworks$linb$-add-listener--listener-map widget) (atom {})))
    (swap! (.-de$karolski$teeter_totter$frameworks$linb$-add-listener--listener-map widget)
           (fn [m] (update-in m [(property-kw->property-name option-kw)] #(concat % [handler])))))
  (-remove-listener [framework widget option-kw handler]
    (swap! (.-de$karolski$teeter_totter$frameworks$linb$-add-listener--listener-map widget)
           (fn [v] (update-in v [(property-kw->property-name option-kw)] #(remove #{handler} %))))))


(extend-protocol AEventBinder
  linb.UI.Button
  (-bind-event [btn event-kw cb]
    (cond (= event-kw :action) (.onClick btn cb))))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; LINB GUI CONFIG
(def +linb-ui-opt-map+
  {:id [#(.getAlias %) #(.setAlias %1 %2)]
   :visible? [#(.hide %) #(.show %1)]
   :margin [#(keywordize-map-keys (js->clj (.getDockMargin %)))
            #(.setDockMargin
              %1
              (c/jsObj (stringify-map-keys (merge (config %1 :margin) %2))))]
   :listen [(fn [_] (throw (js/Error. "Not implemented")))
            #(apply listen %1 %2)]
   :selectable? [#(.getSelectable %) #(.setSelectable %1 %2)]
   :height [#(.getHeight %) #(.setHeight %1 %2)]
   :dock [#(.getDock %) #(.setDock %1 (name %2))]
   :orientation [(fn [_] (throw (js/Error. "Not implemented")))
                 #(if (= %2 :horizontal)
                    (doseq [item (config %1 :items)]
                      (.setDock item "left")) 
                    (doseq [item (config %1 :items)]
                      (.setDock item "top")))]
   :items [#(u/children %)
           #(doseq [item %2]
              (doto item
                (.setDock "left"))
              (.append %1 item))]})

(def +linb-button-opt-map+
  (merge +linb-ui-opt-map+ {:text [#(.getCaption %) #(.setCaption %1 %2)]
                            :value [#(.getValue %) #(.setValue %1 %2)]}))

(def +linb-label-opt-map+
  +linb-button-opt-map+)

(extend-protocol AConfigurableMap
  linb.UI (-config-map [c] +linb-ui-opt-map+)
  linb.UI.Button (-config-map [c]
                   +linb-button-opt-map+)
  linb.UI.Label (-config-map [c]
                   +linb-label-opt-map+)
  linb.UI.CheckBox (-config-map [c]
                     +linb-button-opt-map+)
  linb.UI.Block (-config-map [c]
                   (merge +linb-label-opt-map+
                          {:border-type [#(.getBorderType %) #(.setBorderType %1 (name %2))]}))
  linb.UI.Dialog (-config-map [c]
                   (merge +linb-ui-opt-map+
                          {:title [#(.getCaption %1) #(.setCaption %1 %2)]}
                          {:modal? [#(throw (js/Error. "Not implemented")) #(throw (js/Error. "Not implemented"))]}
                          {:content [#(first (.getChildren %))
                                     #(.append %1 %2)]}))
  linb.UI.Input (-config-map [c]
                   (merge +linb-ui-opt-map+
                          {:text [#(.getValue %) #(.setValue %1 %2)]}))) 

(extend-type linb.UI
  AConfigurable 
  (-config [c key] ((get-in (c/config-map c) [key 0]) c))
  (-config! [c key val] ((get-in (c/config-map c) [key 1]) c val))

  AInstance
  (class-of* [this] (class-for-name (.-KEY this)))

  ASelectable
  (id-of* [this] (. this (getAlias)))
  (id-of!* [this id] (. this (setAlias id)))
  (class-of* [this] (class-of this))
  (class-of!* [this classes] (throw (js/Error "Unsupported operation!"))))

(extend-protocol ToBindable
  linb.UI.Button
    (to-bindable* [this] (b/selection this))
  linb.UI.Label
    (to-bindable* [this] (b/property this :text)))


(extend-protocol Children
  linb.UI
  (children [this] (map (fn [i] (.-_cacheInstance i)) (.get (.getChildren this)))))

(extend-protocol ASimpleNameable
  linb.UI
  (get-simple-name [this] (second (clojure.string/split (.-key this) #"\." 2))))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; WORKAROUNDs
(defn inherit-protocols
  "Helper function that copies over the protocol fns of namespace
  de$karolski$teeter_totter from B.prototype to SUB.prototype, since
  linb does not do that itself!"
  [sub b]
  (doseq [key (reverse (js-keys (.-prototype b)))]
    (c/debug (+ key " = "(_.str.startWith key "de$karolski$teeter_totter")))
    (when (and (_.str.startWith key "de$karolski$teeter_totter")
               (not (aget (.-prototype sub) key)))
      (aset (.-prototype sub) key (aget (.-prototype b) key)))))


(inherit-protocols linb.UI.Widget linb.UI)
(inherit-protocols linb.UI.Button linb.UI.Widget)
(inherit-protocols linb.UI.Dialog linb.UI.Widget)
(inherit-protocols linb.UI.Input linb.UI.Widget)
(inherit-protocols linb.UI.Label linb.UI.Widget)
(inherit-protocols linb.UI.Block linb.UI.Widget)
(inherit-protocols linb.UI.Panel linb.UI)
(inherit-protocols linb.UI.Pane linb.UI)