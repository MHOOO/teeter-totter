(ns de.karolski.teeter-totter.util
  (:use [clojure.string :only [split]]))

(defprotocol AInstance
  (class-of* [_] "Returns the class (i.e. prototype) of the object."))

(defprotocol ASimpleNameable
  (get-simple-name [this]))

(defprotocol Children 
  "A protocol for retrieving the children of a widget as a seq. 
  This takes care of idiosyncracies of frame vs. menus, etc."

  (children [c] "Returns a seq of the children of the given widget"))

(defn class-for-name
  "Return the class that has the specified fully qualified name."
  [name]
  (apply aget (js* "window") (split name #"\.")))

(defn class-of
  "Return the class of the given instance."
  [obj]
  (class-of* obj))

(defn is-instance?
  "Return true if OBJ is of instance class CLS. Currenlty only works
  if CLS is the direct superclass as returned by AInstance/class-of*"
  [cls obj]
  (= (class-of obj) cls))

;; necessary for selector.cljs
(js*
 "if (typeof String.prototype.startsWith != 'function') {
  String.prototype.startsWith = function (str){
    return this.slice(0, str.length) == str;
  };
}")

(defn clj->js
  "Recursively transforms ClojureScript maps into Javascript objects,
   other ClojureScript colls into JavaScript arrays, and ClojureScript
   keywords into JavaScript strings."
  [x]
  (cond
   (string? x) x
   (keyword? x) (name x)
   (map? x) (.strobj (reduce (fn [m [k v]]
                               (assoc m (clj->js k) (clj->js v))) {} x))
   (coll? x) (apply array (map clj->js x))
   :else x))

(defn map-over-keys [m f]
  (apply hash-map (interleave (map f (keys m)) (vals m))))

(defn ^:export keywordize-map-keys [m]
  (map-over-keys m keyword))

(defn ^:export stringify-map-keys [m]
  (map-over-keys m name))