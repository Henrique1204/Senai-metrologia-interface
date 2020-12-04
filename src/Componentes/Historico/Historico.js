import React from "react";
import { useLocation } from "react-router-dom";
import estilos from "./Historico.module.css";

const Historico = () => {
    return (
        <section className={`container ${estilos.container}`}>
            <h1 className="titulo">Histórico</h1>

            <div className={estilos.tabela}>
                <div className={estilos.titulos}>
                    <span>Nome Sensor</span>
                    <span>Temperatura</span>
                    <span>Umidade</span>
                    <span>Data</span>
                    <span>Hora</span>
                </div>

                <div className={estilos.dados}>
                    <span>A</span>
                    <span>28 ºC</span>
                    <span>12</span>
                    <span>03/12</span>
                    <span>20h10</span>
                </div>

                <div className={estilos.dados}>
                    <span>A</span>
                    <span>28 ºC</span>
                    <span>12</span>
                    <span>03/12</span>
                    <span>20h10</span>
                </div>
            </div>
        </section>
    );
};

export default Historico;
