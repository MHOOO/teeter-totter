(ns de.karolski.teeter-totter.example
  (:use [de.karolski.teeter-totter.util :only [debug]])
  (:require
   [goog.debug :as gdebug]
   [de.karolski.teeter-totter.core :as c]
   [de.karolski.teeter-totter.bind :as b]
   [de.karolski.teeter-totter.frameworks.google :as g]
   [de.karolski.teeter-totter.frameworks.linb :as l]))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Main program

(def +dialog+ (atom nil))

(defn example1 []
  (let [dlg (c/dialog
             :id :dialog
             :title "Hello There2!"
             :content
             (c/vertical-panel
              :id :vpanel
              :items
              [(c/horizontal-panel
                :height 30
                :margin {:top 5}
                :items [(c/checkbox :id :cb :text "Enable?")])
               (c/horizontal-panel
                :height 30
                :margin {:top 5}
                :items [(c/label :text "Name")
                        (c/text :id :name :text "Joe Smith")])
               (c/horizontal-panel
                :height 30
                :margin {:top 5}
                :items [(c/label :text "E-Mail")
                        (c/text :text "Joe.Smith@template.com")])
               (c/horizontal-panel
                :height 30
                :margin {:top 5}
                :items [(c/button
                         :id :confirm-btn
                         :text "Push me!"
                                  :tooltip "Not implemented"
                                  :color "green"
                                  :listen [:action (fn [e] (debug "Button clicked!"))])])])
                    
             )]
    (b/bind (b/property (c/select dlg [:#cb]) :value) (b/property (c/select dlg [:#confirm-btn]) :enabled?))
    (c/config! dlg :visible? true)
    (reset! +dialog+ dlg)

    (c/config! (c/select dlg [:#cb]) :value true)
    (debug (gdebug/expose (c/select dlg [:#cb])))
    ))

;; (defn example2 []
;;   (let [log (glogger/getLogger "Local")]
;;     (.info log "Hallo Welt! Ich war hier!")
;;     (.render
;;      (c/button :text "Database" :tooltip "Database Connection Status" :color "red")
;;      (.getElement goog.dom "buttons"))))

(defn ^:export main []
  (c/set-framework! (l/Framework.))
  (c/setup-environment :debug? true)
  (c/setup-connection)

  (example1))