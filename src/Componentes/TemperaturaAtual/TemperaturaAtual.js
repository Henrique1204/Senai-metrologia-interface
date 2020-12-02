import React from "react";
// Importando contexto de dados.
import { DadosContext } from "../../DadosContext";
// Importando componente de Erro.
import Erro from "../Feedback/Erro/Erro";
// Importando componente de Loading.
import Loading from "../Feedback/Loading/Loading";
// Import componente CardTemperatura.
import CardTemperatura from "./CardTemperatura/CardTemperatura";

const TemperaturaAtual = () => {
    const { dados, erro, loading } = React.useContext(DadosContext);

    if (loading) {
        return <Loading />
    }

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
