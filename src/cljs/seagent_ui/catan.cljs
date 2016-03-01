(ns seagent-ui.catan
  (:require [reagent.core :as r]))

(defn dice-roll []
  (+ (rand-nth [1 2 3 4 5 6])
     (rand-nth [1 2 3 4 5 6])))

(defonce roll    (r/atom (dice-roll)))
(defonce history (r/atom [@roll]))
(defonce players (r/atom ["P 1" "P 2" "P 3" "P 4"]))


(defn histogram-bar [outcome count max-count]
  [:div.grid.ui {:style {:height "50px"}}
   [:div.column.one.wide [:h2 outcome]]
   [:div.column.fifteen.wide
    [:div {:class (str (cond
                         (#{6 8} outcome) "red"
                         (= 7 outcome) "black"
                         :else "blue") " ui active progress large")}
     [:div.bar {:style {:width (str (* 100 (/ count max-count)) "%")}}
      [:div.progress count]]]]])

(defn histogram []
  (let [data      (->> @history
                       frequencies
                       (map (fn [[o c]] {:outcome o :count c}))
                       (sort-by :outcome))
        max-count (->> data (map :count) (apply max))]
    [:div
     (for [roll (range 2 13)]
       (let [{:keys [outcome count]}
             {:outcome roll
              :count (or (->> data
                              (filter #(= roll (:outcome %)))
                              first
                              :count)
                         0)}]
         ^{:key outcome}
         [histogram-bar outcome count max-count]))]))

(defn player-edit [player-name editing?]
  (r/create-class
   {:reagent-render (fn [player-name editing?]
                      [:input {:type "text"
                               :value @player-name
                               :on-change (fn [e] (reset! player-name (-> e .-target .-value)))
                               :on-key-press (fn [e] (js/console.log (.-charCode e))
                                               (when (= 13 (.-charCode e))
                                                 (reset! editing? false)) true)
                               :on-blur (fn [] (reset! editing? false))}])
    :component-did-mount #(.focus (r/dom-node %))}))

(defn player-label [name selected?]
  (let [player-name (r/atom name)
        editing? (r/atom false)
        hover? (r/atom false)]
    (fn [name selected?]
      [:div.column {:on-mouse-over #(when (not @editing?) (reset! hover? true))
                    :on-mouse-out #(reset! hover? false)}
       (if @editing?
         [:div.ui.input {:style {:width "100px"}}
          [player-edit player-name editing?]]
         (if @hover?
           [:div {:class (str "ui label huge " (when selected? " green"))
                  :on-click (fn []
                              (reset! player-name "")
                              (reset! editing? true))}
            "Edit"]
           [:div
            {:class (str "ui label huge " (when selected? " green"))}
            @player-name]))])))

(defn player [turn-count]
  (let [player-number (mod (dec turn-count) 4)
        active-label "ui label"
        passive-label "ui label teal"]
    [:div [:div.grid.ui.five.column
           [:h2.column "Players:"]
           [player-label (nth @players 0) (= player-number 0)]
           [player-label (nth @players 1) (= player-number 1)]
           [player-label (nth @players 2) (= player-number 2)]
           [player-label (nth @players 3) (= player-number 3)]]]))

(defn undo []
  (reset! roll (last @history))
  (swap! history drop-last))

(defn roll-dice []
  (let [next-roll (dice-roll)]
    (swap! history conj next-roll)
    (reset! roll next-roll)))

(defn reset []
  (let [next-roll (dice-roll)]
    (reset! history [next-roll])
    (reset! roll next-roll)))

(defn dice-roller []
  [:div.ui.container
   [:h1 "Settlers of Catan - Dice Roller"]
   [:div.ui.grid [:div.column.centered [player (count @history)]]]
   [:div.ui.divider]
   [:div.ui.grid
    [:div.column {:style {:margin-top "10px"}}
     [:button.ui.button.primary.massive
      {:on-click roll-dice :tab-index 0} "Roll"]]
    [:div.two.wide.column.centered
     [:div.ui.huge.statistic
      [:div.value (pr-str @roll)]]]
    [:div.two.wide.column
     [:div.ui.statistic
      [:div.value (count @history)]
      [:div.label "Turn #"]]]]
   [:div.ui.divider]
   [histogram]
   [:div.ui.grid {:style {:margin-top "30px"}}
    [:div.column.ten.wide]
    [:div.column.two.wide
     [:button.ui.button.secondary.mini
      {:on-click undo}
      [:span "Undo " [:i.undo.icon]]]]
    [:div.column.two.wide]
    [:div.column.two.wide
     [:button.ui.button.secondary.mini
      {:on-click reset}
      [:span "Reset " [:i.trash.icon]]]]]])
