import React from "react";
//import do componente TemperaturaAtual
import TemperaturaAtual from "./TemperaturaAtual/TemperaturaAtual.js";
//import do componente Grafico
import Grafico from "./Grafico/Grafico.js"

const Home = () => {
    return (
        <section className="container">
            <TemperaturaAtual />

            <Grafico />
        </section>
    );
};

export default Home;
