import React from "react";
import CardTemperatura from "./CardTemperatura/CardTemperatura";

const TemperaturaAtual = () => {
    const dados = {
        temperatura: 28,
        umidade: 10,
        nome_sensor: "A"
    }

    return (
        <section className="container">
            <h1 className="titulo">Temperaturas atuais</h1>
            <CardTemperatura dados={dados} />
        </section>
    );
};

export default TemperaturaAtual;
