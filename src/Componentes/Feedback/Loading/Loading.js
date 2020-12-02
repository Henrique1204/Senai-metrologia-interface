import React from "react";
// Import do css como módulo.
import estilos from "./Loading.module.css";

const Loading = () => {
    return (
        <div className={estilos.containerLoading}>
            <div></div>
        </div>
    );
};

export default Loading
