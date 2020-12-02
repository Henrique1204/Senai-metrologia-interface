import React from "react";
// Importando contexto de dados.
import { DadosContext } from "../../DadosContext";
import Erro from "../Feedback/Erro/Erro";
// Import componente CardTemperatura.
import CardTemperatura from "./CardTemperatura/CardTemperatura";

const TemperaturaAtual = () => {
    const { dados, erro, loading } = React.useContext(DadosContext);

    if (erro) {
        return <Erro erro="Erro ao buscar as temperaturas atuais." />;
    }

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
