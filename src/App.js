import React from "react";
import "./App.css";
// Import dos componentes do React Router.
import {BrowserRouter, Route, Routes} from "react-router-dom";
// Omport do componente Header.
import Header from "./Componentes/Header/Header.js";
// Import do componente Home.
import Home from "./Componentes/Home.js";
import Historico from "./Componentes/Historico/Historico.js";
// Import do componente CadastroEmail.
import CadastroEmail from "./Componentes/CadastroEmail/CadastroEmail.js";
import Login from "./Componentes/Login/Login.js";
import RotaNaoEncontrada from "./Componentes/RotaNaoEncontrada.js";
// Import do componente Footer.
import Footer from "./Componentes/Footer/Footer.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchDados, selecionarSensores } from "./store/dashboard";

const App = () => {
  const sensores = useSelector(selecionarSensores);

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchDados());
    }, [dispatch]);

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
            <Route path="/cadastro" element={<CadastroEmail />}/>
            <Route path="/login" element={<Login />}/>
            {
              sensores?.map((sensor) => (
                <Route path={`/sensor${sensor}`} element={<Historico />} key={sensor} />
              ))
            }
            <Route path="*" element={<RotaNaoEncontrada />}/>
          </Routes>
        </main>
        
        {/* Adiciona o Footer do site. */}
        <Footer />
    </BrowserRouter>
  );
}

export default App;
