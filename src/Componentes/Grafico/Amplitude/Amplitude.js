import React from "react";
// import do css como módulo
import estilos from "./Amplitude.module.css";

const Amplitude = ({ dados }) => {
    const [amplitudes, setAmplitudes] = React.useState([]);

    React.useEffect(() => {
        // Separa os valores únicos de data.
        const datas = dados.reduce((ant, { data }) => {
            const inclui = ant.includes(data);
            if (!inclui) {
                return [...ant, data];
            }

            return [...ant];
        }, []);

        // Define as amplitudes.
        datas.forEach((data) => {
            const temperaturas = dados.filter((dado) => dado.data === data)
            .map(({ temperatura }) => temperatura);

            setAmplitudes((amp) => [{
                ...amp,
                data: data,
                maxima: Math.max(...temperaturas),
                minima: Math.min(...temperaturas)
            }]);
        });
    }, [dados]);

    return (
        <div className={estilos.containerAmplitude}>
            <div className={estilos.titulo}>Amplitude</div>
        
            <ul className={estilos.listaDados}>
                {
                    amplitudes && amplitudes.map((amp, i) => (
                        <li key={i} >
                            <span className={estilos.data}>{amp.data}:</span>
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