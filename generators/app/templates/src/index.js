import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// TODO Add this line if you need it
// import "./config/i18n";
import "./config/perf";
import store from "./redux/store";
import App from "./app";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
