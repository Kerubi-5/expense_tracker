import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";

import App from "./containers/App";

const renderReactDom = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

if (window.cordova) {
  document.addEventListener(
    "deviceready",
    () => {
      renderReactDom();
    },
    false
  );
} else {
  renderReactDom();
}
