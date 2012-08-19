(ns de.karolski.teeter-totter.frameworks.google
  (:use [de.karolski.teeter-totter.core :only [AConfigurable AConfigurableMap AWidgetFactory APanelFactory AEventBinder debug listen config config!]])
  (:require
   [de.karolski.teeter-totter.core :as c]
   [goog.debug.Logger :as glogger]
   goog.ui.Dialog
   goog.ui.Button
   goog.ui.ColorButton
   goog.ui.LabelInput
   goog.events))

(deftype ^:extend Framework [])

(defn orientation-kw->google-orientation
  [orientation-kw]
  (orientation-kw
   {:horizontal goog.ui.Container.Orientation.HORIZONTAL
    :vertical goog.ui.Container.Orientation.VERTICAL}))

(defn event-kw->google-event
  [event-kw]
  (
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
    :disable goog.ui.Component.EventType.DISABLE}
   event-kw))

(extend-type Framework 
  AWidgetFactory 
  (-dialog [_ argmap] (goog.ui.Dialog.))
  (-button [_ argmap] (goog.ui.Button.))
  (-label [_ argmap] (goog.ui.Control.))
  (-text [_ argmap] (goog.ui.LabelInput.)) 

  AEventBinder
  (-bind-event [_ obj event-kw cb]
    (goog.events.listen obj (or (event-kw->google-event event-kw) event-kw) cb))

  APanelFactory
  (-panel [_ argmap] (goog.ui.Component.))) 


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; GOOGLE CLOSURE GUI CONFIG
(defn set-orientation-on! [obj orientation]
  ;; update each child to be have inlineStyle
  (let [items (config obj :items)]
    (if (and items (= orientation :horizontal))
      (doseq [item items]
        (goog.style.setInlineBlock (. item (getElement)))) ;; display: inline-block
      (doseq [item items]
        (goog.style.setStyle (. item (getElement)) "display" "block")))))

(def +component-opt-map+
     ;; TODO: instead of calling (debug), call (error) or (throw)?
     {:listen [(fn [e] (debug "NOT IMPLEMENTED!") nil) #(apply listen %1 %2)]
      :visible? [#(.getVisible %1) #(.setVisible %1 %2)]
      :items [(fn [c] (map #(.getChild c %) (.getChildIds c)))
              #(doseq [item %2]
                 (.addChild %1 item true))]
      :orientation [(fn [obj] (throw (js/Error. "Not implemented")))
                    (fn [obj val] (set-orientation-on! obj val))]})

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
  (-config [c key] ((get-in (c/config-map c) [key 0]) c))
  (-config! [c key val] ((get-in (c/config-map c) [key 1]) c val)))

(extend-protocol AConfigurableMap
  goog.ui.Component
  (-config-map [c] +component-opt-map+)
  goog.ui.Control
  (-config-map [c] +control-opt-map+)
  
  goog.ui.Dialog
  (-config-map [c] +dialog-opt-map+)
  goog.ui.Button
  (-config-map [c] +button-opt-map+)) 

