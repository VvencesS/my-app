import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { wrapper } from "./store";

import App from "./App";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/now-ui-dashboard.scss?v1.5.0";
import "./assets/css/demo.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={wrapper()}>
    <App />
  </Provider>
);
