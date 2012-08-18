(defproject de.karolski/teeter-totter "1.0.0-SNAPSHOT" 
  :dependencies [[org.clojure/clojure "1.5.0-alpha3"]
                 [org.clojure.contrib/macro-utils "1.3.0-alpha4"]
                 [org.clojure/tools.logging "0.1.2"]
                 [org.clojure.contrib/seq "1.3.0-alpha4"]
                 
                 [seesaw "1.4.2"]
                 [compojure "1.0.0"]
                 [ring "1.0.0-RC1"]
                 [hiccup "0.3.7"]
                 [org.clojars.kriyative/clojurejs "1.2.18"]
                 [cheshire "4.0.0"]
                 [aleph "0.3.0-alpha2"]
                 [noir-cljs "0.3.0"
                  ;; for some reason noir-cljs forces clojure 1.3 instead of 1.5
                  :exclusions [org.clojure/clojure]]
                 ]
  :exclusions [org.clojure/clojure-contrib]
  :min-lein-version "2.0.0"
  :description "FIXME: write description")
