import React from "react";
import CardTemperatura from "./CardTemperatura/CardTemperatura";

const dados = [
    {
        temperatura: 28,
        umidade: 10,
        nome_sensor: "A"
    },
    {
        temperatura: 20,
        umidade: 12,
        nome_sensor: "B"
    },
    {
        temperatura: 23,
        umidade: 9,
        nome_sensor: "C"
    },
    {
        temperatura: 14,
        umidade: 15,
        nome_sensor: "D"
    },
    {
        temperatura: 19,
        umidade: 12,
        nome_sensor: "E"
    }
]

const TemperaturaAtual = () => {
    return (
        <section className="container">
            <h1 className="titulo">Temperaturas atuais</h1>

            <ul style={{ display: "flex", alignItems: "center" }}>
                {
                    dados.map((dado, i) => (
                        <li key={i} style={(i !== 0) ? { marginLeft: "2rem" } : {}} >
                            <CardTemperatura dados={dado} />
                        </li>
                    ))
                }
            </ul>
        </section>
    );
};

export default TemperaturaAtual;
