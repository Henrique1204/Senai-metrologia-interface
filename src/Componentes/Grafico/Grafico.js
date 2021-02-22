import React from "react";
// import do componente amplitude.
import Amplitude from "./Amplitude/Amplitude.js";
// Import do componente para criação de gráficos.
import ChartBar from "../ChartJS/ChartBar.js";
// Import do css como módulo.
import estilos from "./Grafico.module.css";
import { Link } from "react-router-dom";

const yAxesTemp = [{
    gridLines: {
        lineWidth: 3,
        color: [
            'rgba(0, 0, 0, 0.1)',
            'rgba(0, 0, 0, 0.1)',
            'rgba(255, 0, 0, 0.4)',
            'rgba(255, 119, 0, 0.4)',
            'rgba(250, 220, 0, 1)',
            'rgba(0, 233, 0, 0.6)',
            'rgba(250, 220, 0, 1)',
            'rgba(255, 119, 0, 0.4)',
            'rgba(255, 0, 0, 0.4)',
            'rgba(0, 0, 0, 0.1)'
        ]
    },
    ticks: {
        autoSkip: false,
        stepSize: 2,
        min: 12,
        max: 30
    }
}]

const yAxesUmi = [{
    ticks: {
        fontSize: 16,
        fontColor: "#222",
        min: 40,
        max: 100
    }
}];


const Grafico = ({ dados }) => {
    const [graficoUmi, setGraficoUmi] = React.useState({});
    const [graficoTemp, setGraficoTemp] = React.useState({});

    React.useEffect(() => {
        setGraficoUmi({
            titulo: "Umidade %",
            labels: dados.map((dado) => `${dado.hora}`).filter((dado, i) => i <= 23).reverse(),
            valores: dados.map((dado) => dado.umidade).filter((dado, i) => i <= 23).reverse()
        });

        setGraficoTemp({
            titulo: "Temperatura ºC",
            labels: dados.map((dado) => `${dado.hora}`).filter((dado, i) => i <= 23).reverse(),
            valores: dados.map((dado) => dado.temperatura).filter((dado, i) => i <= 23).reverse()
        });

    }, [dados]);

    return (
        <div className={estilos.container}>
            <div className={`${estilos.temperatura} ${estilos.card}`}>
                <ChartBar dados={graficoTemp} cor="rgba(22,70,115, 0.7)" yAxes={yAxesTemp} />
            </div>

            <div className={`${estilos.umidade} ${estilos.card}`}>
                <ChartBar dados={graficoUmi} cor="rgba(169,215,241, 0.7)" yAxes={yAxesUmi} />
            </div>

            <div>
                <Amplitude dados={dados} />

                <Link to={`sensor${dados[0].nome_sensor}`} className={estilos.link} >Ver Histórico</Link>
            </div>
        </div>
    );
};

export default Grafico;
