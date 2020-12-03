import React from "react";
// Import do css como módulo.
import estilos from "./BotaoSlide.module.css";

const BotaoSlide = ({ valor, ativo }) => {
    return <button className={`${estilos.btn} ${(ativo) ? estilos.ativo : "" }`} valor={valor} ></button>;
};

export default BotaoSlide;
