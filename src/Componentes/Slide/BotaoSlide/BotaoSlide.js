import React from "react";
// Import do css como módulo.
import estilos from "./BotaoSlide.module.css";

const BotaoSlide = ({ valor, ativo, setAtivo }) => {
    return (
        <button
            className={`${estilos.btn} ${(ativo) ? estilos.ativo : "" }`}
            onClick={() => setAtivo(valor)}
        >
        </button>
    );
};

export default BotaoSlide;
