import React from "react";
// import do componente Grafico
import Grafico from "../../Grafico/Grafico.js";
import BotaoSlide from "../BotaoSlide/BotaoSlide.js";
// Import do css como módulo.
import estilos from "./Slide.module.css";

const Slide = ({ dados }) => {
    const [graficos, setGraficos] = React.useState([]);
    const [titulo, setTitulo] = React.useState("Sensor A");

    React.useEffect(() => {
        function separarDados(sensor) {
            return dados.filter((dado) => dado.nome_sensor === sensor);
        }
    
        setGraficos([
            separarDados("A"),
            separarDados("B"),
            separarDados("C"),
            separarDados("D"),
            separarDados("E"),
        ]);

    }, [dados]);

    return (
        <section className={estilos.container}>
            <div className="container">
                <h1 className="titulo">{titulo}</h1>

                <div className={estilos.slide}>
                    {
                        graficos && graficos.map((dados, i) => (
                            <Grafico key={i} dados={dados} />
                        ))
                    }
                </div>

                <nav>
                    {
                        graficos && graficos.map((d, i) => (
                            <BotaoSlide valor={i} ativo={true} />
                        ))
                    }
                </nav>
            </div>
        </section>
    );
};

export default Slide;
