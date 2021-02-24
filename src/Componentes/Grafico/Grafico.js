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


const Grafico = ({ dados, sensor }) => {
    const [graficoUmi, setGraficoUmi] = React.useState(null);
    const [graficoTemp, setGraficoTemp] = React.useState(null);

    React.useEffect(() => {
        const formatarInfos = (dados, tipo, valorPadrao, titulo, cor) => {
            const labels = dados.map((dado) => `${dado.hora}`).filter((d, i) => i <= 23).reverse();
            const valores = dados.map((dado) => dado[tipo]).filter((d, i) => i <= 23).reverse();
            const cores = Array(24).fill(cor);

            for(let i = 0; i < 24; i++) {
                if (labels.length <= i) {
                    labels.push("--.--");
                    valores.push(valorPadrao);
                    cores[i] = "rgba(0, 0, 0, 0.2)";
                }
            }

            return {
                dados: {
                    titulo,
                    labels,
                    valores
                },
                cores
            };
        };

        setGraficoUmi(formatarInfos(dados, "umidade", 50, "Umidade %", "rgba(169,215,241, 0.7)"));
        setGraficoTemp(formatarInfos(dados, "temperatura", 14, "Temperatura ºC", "rgba(22,70,115, 0.7)"));
    }, [dados]);

    return (
        <div className={estilos.container}>
            <div className={`${estilos.temperatura} ${estilos.card}`}>
                {graficoTemp && <ChartBar dados={graficoTemp.dados} cor={graficoTemp.cores} yAxes={yAxesTemp} />}
            </div>

            <div className={`${estilos.umidade} ${estilos.card}`}>
            {graficoUmi && <ChartBar dados={graficoUmi.dados} cor={graficoUmi.cores} yAxes={yAxesUmi} />}
            </div>

            <div>
                <Amplitude />

                <Link to={`sensor${sensor}`} className={estilos.link} >Ver Histórico</Link>
            </div>
        </div>
    );
};

export default Grafico;
