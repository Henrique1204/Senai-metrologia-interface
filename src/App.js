import React from "react";
import "./App.css";
// Import dos componentes do React Router.
import {BrowserRouter, Route, Routes} from "react-router-dom";
// Import do contexto de dados.
import { DadosContext } from "./DadosContext.js";
// Omport do componente Header.
import Header from "./Componentes/Header/Header.js";
// Import do componente Home.
import Home from "./Componentes/Home.js";
import Historico from "./Componentes/Historico/Historico.js";
// Import do componente Footer.
import Footer from "./Componentes/Footer/Footer.js";

const App = () => {
  const { sensores } = React.useContext(DadosContext);

  return (
    // BrowserRouter é necessário para as rotas funcionarem.
    <BrowserRouter>
        {/* Adiciona o Header do site. */}
        <Header/>
        
        <main>
          {/* Routes é o componente que cria as rotas. */}
          <Routes>
            {/* Router é a rota. */}
            {/* "path" é a url, "element" é o componente que irá renderizar. */}
            <Route path="/" element={<Home />}/>
            {
              sensores.map((sensor) => (
                <Route path={`/sensor${sensor}`} element={<Historico />}/>
              ))
            }
          </Routes>
        </main>
        
        {/* Adiciona o Footer do site. */}
        <Footer />
    </BrowserRouter>
  );
}

export default App;
