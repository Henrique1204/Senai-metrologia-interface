import React from "react";
// import do css como módulo
import estilos from "./Amplitude.module.css";

const Amplitude = () => {
    return (
        <div className={estilos.containerAmplitude}>
            <div className={estilos.titulo}>Amplitude</div>
        
            <ul className={estilos.listaDados}>
                <li>
                    <span className={estilos.data}>27/11:</span>
                    <span className={estilos.maxima}>Max - 28 °C</span>
                    <span>Mínima</span>
                </li>

                <li>
                    <span className={estilos.data}>27/11:</span>
                    <span className={estilos.maxima}>Max - 28 °C</span>
                    <span>Mínima</span>
                </li>

                <li>
                    <span className={estilos.data}>27/11:</span>
                    <span className={estilos.maxima}>Max - 28 °C</span>
                    <span>Mínima</span>
                </li>
            </ul>
        </div>
    );
};

export default Amplitude;