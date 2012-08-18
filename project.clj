(defproject de.karolski/teeter-totter "1.0.0-SNAPSHOT" 
  :dependencies [[org.clojure/clojure "1.5.0-alpha2"]
                 [org.clojure.contrib/macro-utils "1.3.0-alpha4"]
                 [org.clojure/tools.logging "0.1.2"]
                 [org.clojure.contrib/seq "1.3.0-alpha4"]
                 [org.clojure/math.combinatorics "0.0.2"]
                 [seesaw "1.4.2"]
                 [compojure "1.0.0"]
                 [ring "1.0.0-RC1"]
                 [hiccup "0.3.7"]
                 [org.clojars.kriyative/clojurejs "1.2.18"]
                 [cheshire "4.0.0"]
                 [aleph "0.3.0-alpha2"]]
  ;;:hooks [hooks]
  :checkout-deps-shares [:source-path :test-path
                         ~(fn [p] (str (:root p) "/clojurescript/lib/*"))]
  :exclusions [org.clojure/clojure-contrib]
  :profiles {:dev
             {:dependencies
              [[com.stuartsierra/lazytest "2.0.0-SNAPSHOT"]
               [robert/hooke "1.1.0"]]}}
  :repositories {"stuartsierra-releases"
                 "http://stuartsierra.com/maven2",
                 "stuartsierra-snapshots"
                 "http://stuartsierra.com/m2snapshots"}
  :min-lein-version "2.0.0"
  :description "FIXME: write description")
