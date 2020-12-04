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
        <div className={estilos.container}>
            <div className={`${estilos.umidade} ${estilos.card}`}>
                <ChartLine dados={graficoUmi} />
            </div>

            <div>
                <Amplitude dados={dados} />

                <Link to={`sensor${dados[0].nome_sensor}`} className={estilos.link} >Ver Histórico</Link>
            </div>

            <div className={`${estilos.temperatura} ${estilos.card}`}>
                <ChartLine dados={graficoTemp} />
            </div>
        </div>
    );
};

export default Grafico;
