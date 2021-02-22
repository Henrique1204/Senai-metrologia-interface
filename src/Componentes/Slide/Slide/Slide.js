import React from "react";
import { useSelector } from "react-redux";
import { selecionarSensores } from "../../../store/dashboard.js";
// import do componente Grafico
import Grafico from "../../Grafico/Grafico.js";
import BotaoSlide from "../BotaoSlide/BotaoSlide.js";
// Import do css como módulo.
import estilos from "./Slide.module.css";

const Slide = () => {
    const [graficos, setGraficos] = React.useState([]);
    const [ativo, setAtivo] = React.useState(0);
    const [posicao, setPosicao] = React.useState(0);
    const slideRef = React.useRef();

    const { dados } = useSelector((state) => state.dashboard);
    const sensores = useSelector(selecionarSensores);

    React.useEffect(() => {
        function separarDados(sensor) {
            return dados.filter((dado) => dado.nome_sensor === sensor);
        }
    
        const dadosGraficos = sensores.map((sensor) => (separarDados(sensor)));

        setGraficos(dadosGraficos);

        const {width} = slideRef.current.getBoundingClientRect();
        setPosicao(-((width * 1.2) * ativo));
    }, [dados, ativo, sensores]);

    return (
        <section className={estilos.container}>
            <div className="container animarEntrada">
                <h1 className="titulo">Sensor {graficos.length && graficos[ativo][0].nome_sensor}</h1>

                <div ref={slideRef} className={estilos.slide} style={{transform: `translateX(${posicao}px)`}}>
                    {
                        graficos.map((dados, i) => (
                            <div key={i} className={estilos.item}>
                                <Grafico dados={dados} />
                            </div>
                        ))
                    }
                </div>

                <nav className={estilos.nav}>
                    {
                        graficos.map((d, i) => (
                            <BotaoSlide key={i} valor={i} ativo={(ativo === i)} setAtivo={setAtivo} />
                        ))
                    }
                </nav>
            </div>
        </section>
    );
};

export default Slide;
