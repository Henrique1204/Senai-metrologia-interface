import React from "react";
// import do componente amplitude.
import Amplitude from "./Amplitude/Amplitude.js";
// Import do componente para criação de gráficos.
import ChartLine from "../ChartJS/ChartLine.js";
// Import do css como módulo.
import estilos from "./Grafico.module.css";

const Grafico = () => {
    const dados = {
        label: ["Label 1", "Label 2", "Label 3"],
        valores: [12, 14, 16],
        titulo: "Temperatura"
    }

    return (
        <div className={`${estilos.container} container`}>
            <div className={`${estilos.umidade} ${estilos.card}`}>
                <ChartLine dados={dados} />
            </div>

            <Amplitude />

            <div className={`${estilos.temperatura} ${estilos.card}`}>
                <ChartLine dados={dados} />
            </div>
        </div>
    );
};

export default Grafico;
