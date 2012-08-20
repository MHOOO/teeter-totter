(ns de.karolski.teeter-totter.util)

(defn map-over-keys [m f]
  (apply hash-map (interleave (map f (keys m)) (vals m))))

(defn ^:export keywordize-map-keys [m]
  (map-over-keys m keyword))

(defn ^:export stringify-map-keys [m]
  (map-over-keys m name))