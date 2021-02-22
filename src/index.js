import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "font-awesome/css/font-awesome.min.css";
// Importando componentes externos.
import { Provider } from "react-redux";
// Importando configuração da store.
import  store from "./store/configureStore.js";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
