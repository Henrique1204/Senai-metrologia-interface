import React from "react";
import estilos from "./Historico.module.css";
const Historico = () => {
    return (
        <section className="container">
            <table className={estilos.tabela}>

                <tr className={estilos.titulos}>
                    <th>Nome Sensor</th>
                    <th>Temperatura</th>
                    <th>Umidade</th>
                    <th>Data</th>
                    <th>Hora</th>
                </tr>

                <tr className={estilos.dados}>
                    <td>A</td>
                    <td>28 ºC</td>
                    <td>12</td>
                    <td>03/12</td>
                    <td>16h40</td>
                </tr>
            </table>
        </section>
    );
};

export default Historico;
