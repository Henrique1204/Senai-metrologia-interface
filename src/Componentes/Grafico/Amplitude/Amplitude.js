import React from "react";
import { useSelector } from "react-redux";
// import do css como módulo
import estilos from "./Amplitude.module.css";

const Amplitude = ({ sensor }) => {
    const [amplitudes, setAmplitudes] = React.useState([]);
    const { dados } = useSelector((state) => state.dashboard);

    React.useEffect(() => {
        // Separa os valores únicos de data.
        const datas = dados.filter(({ nome_sensor }) => nome_sensor === sensor)
        .reduce((ant, { data }) => {
            const inclui = ant.includes(data);

            if (!inclui) {
                return [...ant, data];
            }

            return [...ant];
        }, []);
    
        setAmplitudes([]);

        // Define as amplitudes.
        datas.forEach((data) => {
            const temperaturas = dados.filter((dado) => dado.data === data)
            .map(({ temperatura }) => temperatura);

            const dataHoje = new Date().getDate();

            if (Number(data.substring(0, 2)) !== dataHoje) {
                setAmplitudes((amp) => [
                    ...amp,
                    {
                        data: data,
                        maxima: Math.max(...temperaturas),
                        minima: Math.min(...temperaturas)
                    }
                ]);
            }
        });
    }, [dados, sensor]);

    return (
        <div className={estilos.containerAmplitude}>
            <h2 className={estilos.titulo}>Amplitude</h2>
        
            <table className={`${estilos.tableAmplitude} tabela`}>
                <thead>
                    <tr>
                        <th>data</th>
                        <th>max</th>
                        <th>min</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        amplitudes && amplitudes.map((amp, i) => (
                            <tr key={i} >
                                <td>{amp.data}</td>
                                <td>{amp.maxima} °C</td>
                                <td>{amp.minima} ºC</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Amplitude;
