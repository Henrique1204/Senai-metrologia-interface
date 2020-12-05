import React from "react";
import estilos from "./Navegacao.module.css";
// Importando o Hook para localizar a página e componente para navegação. 
import { NavLink } from "react-router-dom";
import useMedia from "../../../Hooks/useMedia.js";

const Navegacao = () => {
    const isMobile = useMedia("(max-width: 70rem)");
    const [mobileMenu, setMobileMenu] = React.useState(false)

    return (
        <>
            {
                isMobile && (
                    <button
                        aria-label="Menu"
                        onClick={() => setMobileMenu(!mobileMenu)}
                        className={`
                            ${estilos.mobileButton}
                            ${mobileMenu ? estilos.mobileButtonAtivo : ""}
                        `}
                    ></button>
                )
            }

            <nav className={`
                ${(isMobile) ? estilos.navMobile : estilos.nav }
                ${mobileMenu ? estilos.navMobileAtivo : ""}
            `}>
                <NavLink to="/" end activeClassName={estilos.ativo}>Home</NavLink>
                <NavLink to="/sensorA" activeClassName={estilos.ativo}>Sensor A</NavLink>
                <NavLink to="/sensorB" activeClassName={estilos.ativo}>Sensor B</NavLink>
                <NavLink to="/sensorC" activeClassName={estilos.ativo}>Sensor C</NavLink>
                <NavLink to="/sensorD" activeClassName={estilos.ativo}>Sensor D</NavLink>
                <NavLink to="/sensorE" activeClassName={estilos.ativo}>Sensor E</NavLink>
            </nav>
        </>
    );
};

export default Navegacao;
