(ns seagent-ui.core
  (:require [reagent.core :as r]
            [seagent-ui.button :as button]))

(defn welcome-page []
  [:div
   [:h1 "Welcome to Seagent!"]
   [:p "The reagent wrapper for Semantic UI"]
   [:h2 "Button Examples:"]
   [button/examples]])

(defn ^:export init! []
  (r/render-component [welcome-page] (.-body js/document)))
