(ns de.karolski.teeter-totter.util)

(defmacro wrap
  "Wraps a function. The original function must be called with an instance as its first argument.

   Examples:
    (m/wrap target.mouseDown [e oldf]
            (this-as this
              ...
              (oldf this e)) "
  [target-sym arglist & body]
  (let [[object pathspec] (clojure.string/split (name target-sym) #"\." 2)
        pathspec (str ".-" pathspec)
        target-accessor (list (symbol pathspec) (symbol object))]
   `(let [wrapped# ~target-accessor]
      (set!
       ;; widget.blub -> (.-blub widget)
       ~target-accessor
       ;; unbound wrapper function
       ;; will not have an instance as its first argument
       (fn [& args#]
         (let [~arglist (concat
                         ;; given arguments to wrapper
                         args#
                         ;; wrapped function
                         [(fn [inst# & args2#]
                            (.apply
                             wrapped#
                             inst# (~'clj->js args2#)))])]
           ~@body))))))