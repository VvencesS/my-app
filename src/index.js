import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { wrapper } from "./store";

import App from "./App";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./assets/scss/now-ui-dashboard.scss?v1.5.0";
import "./assets/css/demo.css";
import "react-notifications/lib/notifications.css";
import "./assets/scss/select.scss";

/**
 * React v18
 */
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={wrapper()}>
//     <App />
//   </Provider>
// );

ReactDOM.render(
  <Provider store={wrapper()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
