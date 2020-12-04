import React from "react";
// Import componente CardTemperatura.
import CardTemperatura from "./CardTemperatura/CardTemperatura";
// Import do css como módulo.
import estilos from "./TemperaturaAtual.module.css";

const TemperaturaAtual = ({ dados }) => {
    return (
        <section className="container animarEntrada">
            <h1 className="titulo">Temperaturas atuais</h1>

            <ul className={estilos.container} >
                {
                    dados && dados.filter((dado, i) => i < 5).map((dado, i) => (
                        <li key={i} style={(i !== 0) ? { marginLeft: "2rem" } : {}} >
                            <CardTemperatura dados={dado} />
                        </li>
                    ))
                }
            </ul>
        </section>
    );
};

export default TemperaturaAtual;
