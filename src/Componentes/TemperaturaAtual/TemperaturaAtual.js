import React from "react";
// Importando contexto de dados.
import { DadosContext } from "../../DadosContext";
// Import componente CardTemperatura.
import CardTemperatura from "./CardTemperatura/CardTemperatura";

const TemperaturaAtual = () => {
    const { dados, erro, loading } = React.useContext(DadosContext);

    return (
        <section className="container">
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
