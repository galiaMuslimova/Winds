import React from "react";
import "./index.css";
import { App } from "App";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
