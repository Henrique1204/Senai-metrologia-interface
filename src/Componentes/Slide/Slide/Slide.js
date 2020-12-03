import React from "react";
// import do componente Grafico
import Grafico from "../../Grafico/Grafico.js";
import BotaoSlide from "../BotaoSlide/BotaoSlide.js";
// Import do css como módulo.
import estilos from "./Slide.module.css";

const Slide = ({ dados }) => {
    const [graficos, setGraficos] = React.useState([]);
    const [titulo, setTitulo] = React.useState("Sensor A");
    const [ativo, setAtivo] = React.useState(0);
    const [posicao, setPosicao] = React.useState(0);
    const slideRef = React.useRef();

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

                <div ref={slideRef} className={estilos.slide} style={{transform: `translateX(${posicao}px)`}}>
                    {
                        graficos && graficos.map((dados, i) => (
                            <div key={i} className={estilos.item}>
                                <Grafico dados={dados} />
                            </div>
                        ))
                    }
                </div>

                <nav className={estilos.nav}>
                    {
                        graficos && graficos.map((d, i) => (
                            <BotaoSlide valor={i} ativo={(ativo === i)} />
                        ))
                    }
                </nav>
            </div>
        </section>
    );
};

export default Slide;
