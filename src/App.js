import React from "react";
import "./App.css";
// Import dos componentes do React Router.
import {BrowserRouter, Route, Routes} from "react-router-dom";
// Omport do componente Header.
import Header from "./Componentes/Header/Header.js";
// Import do componente Home.
import Home from "./Componentes/Home.js";
// Import do componente Footer.
import Footer from "./Componentes/Footer/Footer.js";


const App = () => {
  return (
    // BrowserRouter é necessário para as rotas funcionarem.
    <BrowserRouter>
    {/* Adiciona o Header do site. */}
    <Header/>
    
    {/* Routes é o componente que cria as rotas. */}
    <Routes>
      {/* Router é a rota. */}
      {/* "path" é a url, "element" é o componente que irá renderizar. */}
      <Route path="/" element={<Home />}/>
      <Route path="/sensorA" element={<div>Sensor A</div>}/>
      <Route path="/sensorB" element={<div>Sensor B</div>}/>
      <Route path="/sensorC" element={<div>Sensor C</div>}/>
      <Route path="/sensorD" element={<div>Sensor D</div>}/>
      <Route path="/sensorE" element={<div>Sensor E</div>}/>
    </Routes>
    
    {/* Adiciona o Footer do site. */}
    <Footer />
    </BrowserRouter>
  );
}

export default App;
