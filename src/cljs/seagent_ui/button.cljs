(ns seagent-ui.button
  (:require [reagent.core :as r]
            [seagent-ui.util :refer [section]]))

(defn button [title]
  [:button.ui.button title])

(defn primary-button [title]
  [:button.ui.button.primary title])

(defn secondary-button [title]
  [:button.ui.button.secondary title])

(defn examples []
  [:div
   [section [button "Follow"]]

   [section
    [button "Button"]
    [button "Focusable"]]

   [section
    [primary-button "Save"]
    [button "Discard"]]

   [section
    [secondary-button "Okay"]
    [button "Cancel"]]

   [section
    [:div.ui.animated.button {:tabindex 0}
     [:div.visible.content "Next"]
     [:div.hidden.content
      [:i.right.arrow.icon]]]
    [:div.ui.vertical.animated.button {:tabindex 0}
     [:div.hidden.content "Shop"]
     [:div.visible.content
      [:i.shop.icon]]]
    [:div.ui.animated.fade.button {:tabindex 0}
     [:div.visible.content "Sign-up for a Pro account"]
     [:div.hidden.content "$12.99 a month"]]]])
