(require 'robert.hooke)
(require 'leiningen.classpath)
;; Add . to classpath to pick up hbase-site.xml.
(robert.hooke/add-hook
 #'leiningen.classpath/get-classpath
 (fn [get-classpath project]
   (conj (conj (get-classpath project) "./clojurescript/src/clj")
         "./clojurescript/src/cljs")))