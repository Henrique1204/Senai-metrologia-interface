import React from "react";
//Importando o css como módulo.
import estilos from "./Footer.module.css";
//Importando a imagem.
import logoSenai from "./logo_senai_sp.png";

const Footer = () => {
    return (
        <footer className={estilos.footer}>
            <h1>Monitoramento de temperatura - SENAI Suiço-Brasileira</h1>
            
            <div class={estilos.containerImg}>
                <img src={logoSenai} alt="Logo do senai São Paulo"/>
            </div>
        </footer>
    );
};

export default Footer;