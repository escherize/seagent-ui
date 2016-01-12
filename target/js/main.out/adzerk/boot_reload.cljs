(ns adzerk.boot-reload (:require [adzerk.boot-reload.client :as client] seagent-ui.core))
(client/connect "ws://localhost:58224" {:on-jsload (fn* [] (seagent-ui.core/init!))})