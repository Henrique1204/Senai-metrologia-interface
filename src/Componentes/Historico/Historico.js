import React from "react";

const Historico = () => {
    return (
        <section className="container">
            <table>
                <tr>
                    <th>Nome Sensor</th>
                    <th>Temperatura</th>
                    <th>Umidade</th>
                    <th>Data</th>
                    <th>Hora</th>
                </tr>
                
                <tr>
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
