(defproject de.karolski/teeter-totter "1.0.0-SNAPSHOT"
  :description "FIXME: write description"
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [org.clojure.contrib/macro-utils "1.3.0-alpha4"]
                 [org.clojure/tools.logging "0.1.2"]
                 ;; [org.clojure.contrib/logging "1.3.0-alpha4"]
                 [org.clojure.contrib/seq "1.3.0-alpha4"]
                 ;; [org.clojure.contrib/java-utils "1.3.0-alpha4"]
                 [org.clojure/math.combinatorics "0.0.2"] ;; quick fix for lamina, remove this with new lamina (aleph) release
                 [seesaw "1.3.1-SNAPSHOT"]
                 [compojure "1.0.0-RC2"]
                 [ring "1.0.1"]
                 [hiccup "0.3.7"]
                 [org.clojars.kriyative/clojurejs "1.2.14"] ;; NOTE: personal modified repo for clojure 1.3
                 [cheshire "2.0.4"]
                 [aleph "0.2.1-SNAPSHOT"]]
  :exclusions [org.clojure/clojure-contrib]
  :dev-dependencies [[com.stuartsierra/lazytest "2.0.0-SNAPSHOT"]
                     [robert/hooke "1.1.0"]]
  :hooks [hooks]
  :repositories {"stuartsierra-releases" "http://stuartsierra.com/maven2"
                 "stuartsierra-snapshots" "http://stuartsierra.com/m2snapshots"}
)