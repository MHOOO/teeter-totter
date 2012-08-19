(ns de.karolski.teeter-totter.example
  (:require
   [de.karolski.teeter-totter.core :as c]
   [de.karolski.teeter-totter.frameworks.google :as g]
   [goog.debug.Logger :as glogger]))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Main program

(defn example1 []
  (let [dlg (c/dialog :title "Hello There2!"
                      :content
                      (c/vertical-panel
                       :items
                       [(c/horizontal-panel
                         :items [(c/label :text "Name")
                                 (c/text :text "Joe Smith")])
                        (c/horizontal-panel
                         :items [(c/label :text "E-Mail")
                                 (c/text :text "Joe.Smith@template.com")])
                        (c/horizontal-panel
                         :items [(c/button :text "Push me!"
                                           :tooltip "Not implemented"
                                           :color "green"
                                           :listen [:action (fn [e] (c/debug "Button clicked!"))])])])
                    
                      )] 
    (c/config! dlg :visible? true)))

(defn example2 []
  (let [log (glogger/getLogger "Local")]
    (.info log "Hallo Welt! Ich war hier!")
    (.render
     (c/button :text "Database" :tooltip "Database Connection Status" :color "red")
     (.getElement goog.dom "buttons"))))

(defn ^:export main []
  (c/set-framework! (g/Framework.))
  (c/setup-environment :debug? true)
  (c/setup-connection)

  (example1)
  (example2))