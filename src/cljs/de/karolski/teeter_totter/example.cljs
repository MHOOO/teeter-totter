(ns de.karolski.teeter-totter.example
  (:use [de.karolski.teeter-totter.util :only [debug]])
  (:require
   [de.karolski.teeter-totter.core :as c]
   [de.karolski.teeter-totter.bind :as b]
   [de.karolski.teeter-totter.frameworks.google :as g]
   [de.karolski.teeter-totter.frameworks.linb :as l]))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Main program

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
                         :id :confirmbtn
                         :text "Push me!"
                                  :tooltip "Not implemented"
                                  :color "green"
                                  :listen [:action (fn [e] (debug "Button clicked!"))])])])
                    
             )]
    (debug "checkbox: " (c/select dlg [:#cb]))
    ;; TODO: Button not found. select possibly only works on the first
    ;; child of every elemement it visits, since moving the containing
    ;; panel of the checkbox down does not find it either
    (debug "button: " (c/select dlg [:#confirmbtn]))
    (b/bind (c/select dlg [:#cb]) (b/property (c/select dlg [:#confirm-btn]) :enabled?))
    (c/config! dlg :visible? true) 
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