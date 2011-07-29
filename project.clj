(defproject de.karolski/teeter-totter "1.0.0-SNAPSHOT"
  :description "FIXME: write description"
  :dependencies [[org.clojure/clojure "1.3.0-beta1"]
                 [org.clojure.contrib/macro-utils "1.3.0-alpha4"]
                 [org.clojure.contrib/logging "1.3.0-alpha4"]
                 [org.clojure.contrib/seq "1.3.0-alpha4"]]
  :exclusions [org.clojure/clojure-contrib]
  :dev-dependencies [[com.stuartsierra/lazytest "2.0.0-SNAPSHOT"]]
  :repositories {"stuartsierra-releases" "http://stuartsierra.com/maven2"
                 "stuartsierra-snapshots" "http://stuartsierra.com/m2snapshots"}
)