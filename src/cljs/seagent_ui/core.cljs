(ns seagent-ui.core
  (:require [reagent.core :as r]
            [seagent-ui.button :as button]
            [seagent-ui.catan :as catan]))

#_(defn welcome-page []
    [:div
     [:h1 "Welcome to Seagent!"]
     [:p "The reagent wrapper for Semantic UI"]
     [:h2 "Button Examples:"]
     [button/examples]])

(defn ^:export init! []
  (r/render-component [catan/dice-roller] (.-body js/document)))
