import React from "react";
// import do componente amplitude.
import Amplitude from "./Amplitude/Amplitude.js";
// Import do componente para criação de gráficos.
import ChartLine from "../ChartJS/ChartLine.js";
// Import do css como módulo.
import estilos from "./Grafico.module.css";
import { Link } from "react-router-dom";

const Grafico = ({ dados }) => {
    const [graficoUmi, setGraficoUmi] = React.useState({});
    const [graficoTemp, setGraficoTemp] = React.useState({});

    React.useEffect(() => {
        setGraficoUmi({
            titulo: "Umidade",
            labels: dados.map((dado) => `${dado.hora}`).filter((dado, i) => i <= 59),
            valores: dados.map((dado) => dado.umidade).filter((dado, i) => i <= 59)
        });

        setGraficoTemp({
            titulo: "Temperatura",
            labels: dados.map((dado) => `${dado.hora}`).filter((dado, i) => i <= 59),
            valores: dados.map((dado) => dado.temperatura).filter((dado, i) => i <= 59)
        });

    }, [dados]);

    return (
        <div className={estilos.container}>
            <div className={`${estilos.temperatura} ${estilos.card}`}>
                <ChartLine dados={graficoTemp} cor="rgba(22,70,115, 0.7)" />
            </div>

            <div className={`${estilos.umidade} ${estilos.card}`}>
                <ChartLine dados={graficoUmi} cor="rgba(169,215,241, 0.7)" />
            </div>

            <div>
                <Amplitude dados={dados} />

                <Link to={`sensor${dados[0].nome_sensor}`} className={estilos.link} >Ver Histórico</Link>
            </div>
        </div>
    );
};

export default Grafico;
