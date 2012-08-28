(ns de.karolski.teeter-totter.util)

(defprotocol ASimpleNameable
  (get-simple-name [this]))

(defprotocol Children 
  "A protocol for retrieving the children of a widget as a seq. 
  This takes care of idiosyncracies of frame vs. menus, etc."

  (children [c] "Returns a seq of the children of the given widget"))

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