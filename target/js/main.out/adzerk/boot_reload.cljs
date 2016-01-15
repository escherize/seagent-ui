(ns adzerk.boot-reload (:require [adzerk.boot-reload.client :as client] seagent-ui.core))
(client/connect "ws://localhost:61998" {:on-jsload (fn* [] (seagent-ui.core/init!))})