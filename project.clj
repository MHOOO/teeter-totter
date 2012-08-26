(defproject de.karolski/teeter-totter "1.0.0-SNAPSHOT" 
  :dependencies [[org.clojure/clojure "1.5.0-alpha3"]
                 [org.clojure.contrib/macro-utils "1.3.0-alpha4"]
                 [org.clojure/tools.logging "0.1.2"]
                 [org.clojure.contrib/seq "1.3.0-alpha4"]
                 
                 [seesaw "1.4.2"]
                 [compojure "1.0.0"]
                 [ring "1.0.0-RC1"]
                 [hiccup "1.0.1"]
                 [org.clojars.kriyative/clojurejs "1.2.18"]
                 [cheshire "4.0.0"]
                 [aleph "0.3.0-alpha2"]
                 
                 ;; [noir-cljs "0.3.4"
                 ;;  ;; for some reason noir-cljs forces clojure 1.3 instead of 1.5
                 ;;  :exclusions [org.clojure/clojure]]
                 ]

  :cljsbuild {
    :builds [{
              ;; The path to the top-level ClojureScript source directory:
              :source-path "src/cljs"
              :incremental false
              ;; The standard ClojureScript compiler options:
              ;; (See the ClojureScript compiler documentation for details.)
              :compiler {
                         :output-to "static/js-out/hello/hello.js" 
                         :optimizations :whitespace
                         :pretty-print true
                         :externs ["externs/linb-min.js"]
                         }}]}

  :profiles {:dev
             {:dependencies
              [[robert/hooke "1.1.0"]
               [watchtower "0.1.1" :exclusions [org.clojure/clojure]]]}}
  
  :plugins [[lein-cljsbuild "0.2.5"]]
  :exclusions [org.clojure/clojure-contrib]
  :min-lein-version "2.0.0"
  :description "FIXME: write description"
  :main ^{:skip-aot true} de.karolski.teeter-totter.core)
