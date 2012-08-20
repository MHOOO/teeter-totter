(ns de.karolski.teeter-totter.frameworks.linb
  (:use [de.karolski.teeter-totter.core :only [AConfigurable AConfigurableMap AWidgetFactory APanelFactory AEventBinder debug listen config config!]]
        [de.karolski.teeter-totter.util :only [keywordize-map-keys stringify-map-keys]]) 
  (:require
   [de.karolski.teeter-totter.core :as c]
   [goog.debug.Logger :as glogger]))

(deftype Framework [])

(extend-type Framework 
  AWidgetFactory 
  (-dialog [_ argmap] (linb.UI.Dialog.))
  (-button [_ argmap] (linb.UI.Button.))
  (-label [_ argmap] (linb.UI.Label.))
  (-text [_ argmap] (linb.UI.Input.)) 

  AEventBinder
  (-bind-event [_ obj event-kw cb]
    (c/-bind-event obj event-kw cb))

  APanelFactory
  (-panel [_ argmap]
    (doto (linb.UI.Pane.)
      (.setDock "fill"))))


(extend-protocol AEventBinder
  linb.UI.Button
  (-bind-event [btn event-kw cb]
    (cond (= event-kw :action) (set! (.-onClick btn) cb))))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; LINB GUI CONFIG
(def +linb-ui-opt-map+
  {:visible? [#(.hide %) #(.show %1)]
   :margin [#(keywordize-map-keys (js->clj (.getDockMargin %)))
            #(.setDockMargin
              %1
              (c/jsObj (stringify-map-keys (merge (config %1 :margin) %2))))]
   :height [#(.getHeight %) #(.setHeight %1 %2)]
   :orientation [(fn [_] (throw (js/Error. "Not implemented")))
                 #(if (= %2 :horizontal)
                    (doseq [item (config %1 :items)]
                      (.setDock item "left")) 
                    (doseq [item (config %1 :items)]
                      (.setDock item "top")))]
   :items [#(map (fn [i] (.-_cacheInstance i)) (.get (.getChildren %)))
           #(doseq [item %2]
              (doto item
                (.setDock "left"))
              (.append %1 item))]})

(def +linb-button-opt-map+
  (merge +linb-ui-opt-map+ {:text [#(.getCaption %) #(.setCaption %1 %2)]}))

(def +linb-label-opt-map+
  +linb-button-opt-map+)

(extend-protocol AConfigurableMap
  linb.UI (-config-map [c] +linb-ui-opt-map+)
  linb.UI.Button (-config-map [c]
                   +linb-button-opt-map+)
  linb.UI.Label (-config-map [c]
                   +linb-label-opt-map+)
  linb.UI.Dialog (-config-map [c]
                   (merge +linb-ui-opt-map+
                          {:title [#(.getCaption %1) #(.setCaption %1 %2)]}
                          {:modal? [#(throw (js/Error. "Not implemented")) #(throw (js/Error. "Not implemented"))]}
                          {:content [#(first (.getChildren %))
                                     #(.append %1 %2)]}))) 

(extend-type linb.UI
  AConfigurable 
  (-config [c key] ((get-in (c/config-map c) [key 0]) c))
  (-config! [c key val] ((get-in (c/config-map c) [key 1]) c val)))

(defn inherit-protocols
  "Helper function that copies over the protocol fns of namespace
  de$karolski$teeter_totter from B.prototype to SUB.prototype, since
  linb does not do that itself!"
  [sub b]
  (let [log (glogger/getLogger "DEBUG")]
   (doseq [key (reverse (js-keys (.-prototype b)))]
     (.info log (+ key " = "(_.str.startWith key "de$karolski$teeter_totter")))
     (when (and (_.str.startWith key "de$karolski$teeter_totter")
                (not (aget (.-prototype sub) key)))
       (aset (.-prototype sub) key (aget (.-prototype b) key))
       ;; (js* "sub[key] = b.prototype[key]")
       ))))


(inherit-protocols linb.UI.Widget linb.UI)
(inherit-protocols linb.UI.Button linb.UI.Widget)
(inherit-protocols linb.UI.Dialog linb.UI.Widget)
(inherit-protocols linb.UI.Input linb.UI.Widget)
(inherit-protocols linb.UI.Label linb.UI.Widget)
(inherit-protocols linb.UI.Block linb.UI.Widget)
(inherit-protocols linb.UI.Panel linb.UI)
(inherit-protocols linb.UI.Pane linb.UI)

