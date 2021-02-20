import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DadosStorage } from "./DadosContext";
import "font-awesome/css/font-awesome.min.css";

ReactDOM.render(
  <React.StrictMode>
    <DadosStorage>
      <App />
    </DadosStorage>
  </React.StrictMode>,
  document.getElementById("root")
);
