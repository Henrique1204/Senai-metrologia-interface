import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DadosStorage } from "./DadosContext";

ReactDOM.render(
  <React.StrictMode>
    <DadosStorage>
      <App />
    </DadosStorage>
  </React.StrictMode>,
  document.getElementById('root')
);
