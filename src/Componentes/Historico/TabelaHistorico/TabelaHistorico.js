import React from "react";
import estilos from "./TabelaHistorico.module.css";

const TabelaHistorico = ({ dados }) => {
    if (dados.length !== 0) {
        return (
            <div className={estilos.tabela}>
                <h2 className={estilos.titulo}>Dados do dia: {dados[0].data}</h2>
                <div className={estilos.titulos}>
                    <span>Temperatura</span>
                    <span>Umidade</span>
                    <span>Hora</span>
                </div>
    
                {
                    dados.map((dado, i) => (
                        <div key={`Dados${i + 1}`} className={estilos.dados}>
                            <span>{dado.temperatura} ºC</span>
                            <span>{dado.umidade}</span>
                            <span>{dado.hora}</span>
                        </div>
                    ))
                }
            </div>
        );
    }

    return null;
};

export default TabelaHistorico;
