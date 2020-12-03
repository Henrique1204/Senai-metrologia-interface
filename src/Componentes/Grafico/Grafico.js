import React from "react";
// import do componente amplitude.
import Amplitude from "./Amplitude/Amplitude.js";
// Import do componente para criação de gráficos.
import ChartLine from "../ChartJS/ChartLine.js";
// Import do css como módulo.
import estilos from "./Grafico.module.css";

const Grafico = ({ dados }) => {
    const [graficoUmi, setGraficoUmi] = React.useState({});
    const [graficoTemp, setGraficoTemp] = React.useState({});

    React.useEffect(() => {
        setGraficoUmi({
            titulo: "Umidade",
            labels: dados.map((dado) => `${dado.hora}`),
            valores: dados.map((dado) => dado.umidade)
        });

        setGraficoTemp({
            titulo: "Temperatura",
            labels: dados.map((dado) => `${dado.hora}`),
            valores: dados.map((dado) => dado.temperatura)
        });

    }, [dados]);

    return (
        <div className={`${estilos.container} container`}>
            <div className={`${estilos.umidade} ${estilos.card}`}>
                <ChartLine dados={graficoUmi} />
            </div>

            <Amplitude dados={dados} />

            <div className={`${estilos.temperatura} ${estilos.card}`}>
                <ChartLine dados={graficoTemp} />
            </div>
        </div>
    );
};

export default Grafico;
