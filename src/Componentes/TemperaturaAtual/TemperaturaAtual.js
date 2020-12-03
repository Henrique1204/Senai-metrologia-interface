import React from "react";
// Import componente CardTemperatura.
import CardTemperatura from "./CardTemperatura/CardTemperatura";

const TemperaturaAtual = ({ dados }) => {
    return (
        <section className="container animarEntrada">
            <h1 className="titulo">Temperaturas atuais</h1>

            <ul style={{ display: "flex", alignItems: "center" }}>
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
