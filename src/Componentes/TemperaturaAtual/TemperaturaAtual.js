import React from "react";
// Import componente CardTemperatura.
import CardTemperatura from "./CardTemperatura/CardTemperatura";
// Import do css como módulo.
import estilos from "./TemperaturaAtual.module.css";
import { DadosContext } from "../../DadosContext.js";

const TemperaturaAtual = ({ dados }) => {
    const { sensores } = React.useContext(DadosContext);

    return (
        <section className="container animarEntrada">
            <h1 className="titulo">Temperaturas atuais</h1>

            <ul className={estilos.container} >
                {
                    dados && dados.filter((dado, i) => i < sensores.length)
                    .sort( (a, b) => ( (a.nome_sensor > b.nome_sensor) ? 1 : ((b.nome_sensor > a.nome_sensor) ? -1 : 0) ) )
                    .map((dado, i) => (
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
