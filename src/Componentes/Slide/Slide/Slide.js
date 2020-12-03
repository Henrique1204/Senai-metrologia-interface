import React from "react";
// import do componente Grafico
import Grafico from "../../Grafico/Grafico.js";
import BotaoSlide from "../BotaoSlide/BotaoSlide.js";
// Import do css como módulo.
import estilos from "./Slide.module.css";

const Slide = ({ dados }) => {
    const [titulo, setTitulo] = React.useState("Sensor A");

    return (
        <section className={estilos.container}>
            <div className="container">
                <h1 className="titulo">{titulo}</h1>

                <Grafico dados={dados} />

                <div>
                    <BotaoSlide valor={0} ativo={true} />
                </div>
            </div>
        </section>
    );
};

export default Slide;
