import React from "react";
// Import componente CardTemperatura.
import CardTemperatura from "./CardTemperatura/CardTemperatura";
// Import do css como módulo.
import estilos from "./TemperaturaAtual.module.css";
import { useSelector } from "react-redux";
import { selecionarSensores } from "../../store/dashboard";

const TemperaturaAtual = () => {
    const { dados } = useSelector((state) => state.dashboard);
    const sensores = useSelector(selecionarSensores);

    return (
        <section className="container animarEntrada">
            <h1 className="titulo">Temperaturas atuais</h1>

            <ul className={estilos.container} >
                {
                    dados && dados.filter((dado, i) => i < sensores.length)
                    .map((dado, i) => (
                        <li key={i} >
                            <CardTemperatura dados={dado} />
                        </li>
                    ))
                }
            </ul>
        </section>
    );
};

export default TemperaturaAtual;
