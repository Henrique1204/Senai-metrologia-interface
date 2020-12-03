import React from "react";
// import do css como módulo
import estilos from "./Amplitude.module.css";

const Amplitude = ({ dados }) => {
    const [amplitudes, setAmplitudes] = React.useState([]);

    React.useEffect(() => {
        const temperaturas = dados.map((dado) => dado.temperatura);

        setAmplitudes([{
            maxima: Math.max(...temperaturas),
            minima: Math.min(...temperaturas),
        }]);

    }, [dados]);

    return (
        <div className={estilos.containerAmplitude}>
            <div className={estilos.titulo}>Amplitude</div>
        
            <ul className={estilos.listaDados}>
                {
                    amplitudes && amplitudes.map((amp, i) => (
                        <li key={i} >
                            <span className={estilos.data}>27/11:</span>
                            <span className={estilos.maxima}>Max - {amp.maxima} °C</span>
                            <span>Min - {amp.minima} ºC</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Amplitude;