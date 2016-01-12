(ns seagent-ui.button
  (:require [reagent.core :as r]
            [seagent-ui.util :refer [section]]
            [clojure.string :as str]))

(defn button [& opts+content]
  (let [content (last opts+content)
        options (->> (drop-last opts+content)
                     (keep name)
                     (into #{"ui" "button"})
                     (str/join " "))]
    [:div {:class options :tab-index 0}
     content]))

(defn examples []
  [:div
   [section
    [:div "Here's a normal button:"]
    [button "Follow"]]

   [section
    [:div "Buttons are focusable:"]
    [button "Button"]
    [button "Focusable"]]

   [section
    [:div "Here's a primary Save button:"]
    [button :green "Save"]
    [button "Discard"]]

   [section
    [:div "Here's a secondary button"]
    [button :secondary "Okay"]
    [button "Cancel"]]

   [section
    [:div "Here are some animated buttons! Oooo:"]
    [button :animated
     '([:div.visible.content "Next"]
       [:div.hidden.content [:i.right.arrow.icon]])]
    [button :animated :vertical
     '([:div.hidden.content "Shop"]
       [:div.visible.content [:i.shop.icon]])]
    [button :animated :fade
     '([:div.visible.content "Sign-up for a Pro account"]
       [:div.hidden.content "$12.99 a month"])]]

   [section
    [:div "A button can appear alongside a _label_:"]
    [button :labeled
     '([:div.ui.button [:i.heart.icon] "Like"]
       [:a.ui.basic.label "1,234"])]]

   [section
    [:div "Here are some more:"]
    [button :labeled
     '([:div.ui.button [:i.heart.icon] "Like"]
       [:a.ui.basic.label "1,234"])]
    [button :left :labeled
     '([:a.ui.basic.right.pointing.label "1,234"]
       [:div.ui.button [:i.heart.icon] "Like"])]
    [button :left :labeled
     '([:a.ui.basic.label "1,048"]
       [:div.ui.icon.button
        [:i.fork.icon]])]]

   [section
    [:div "BTW, they can be whatever color."]
    [button :labeled
     '([:div.ui.button.red [:i.heart.icon] "Like"]
       [:a.ui.basic.red.left.pointing.label "1,048"])]
    [button :labeled
     '([:div.ui.basic.blue.button [:i.fork.icon] "Forks"]
       [:a.ui.basic.left.pointing.blue.label "1,048"])]]
   ])
