import React from "react";
// Import do css como módulo.
import estilos from "./Erro.module.css";

const Erro = ({ erro }) => {
    if (erro) {
        return (
            <div className={estilos.container} >
                <p className={estilos.erro} >{erro}</p>
            </div>
        );
    }

    return null;
};

export default Erro;
