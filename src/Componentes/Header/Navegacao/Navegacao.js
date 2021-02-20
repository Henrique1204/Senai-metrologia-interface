import React from "react";
import estilos from "./Navegacao.module.css";
// Importando o Hook para localizar a página e componente para navegação. 
import { NavLink } from "react-router-dom";
import useMedia from "../../../Hooks/useMedia.js";
import { DadosContext } from "../../../DadosContext.js";

const Navegacao = () => {
    const isMobile = useMedia("(max-width: 70rem)");
    const [mobileMenu, setMobileMenu] = React.useState(false);
    const { sensores } = React.useContext(DadosContext);

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
                {
                    sensores.map((sensor) => (
                        <NavLink to={`/sensor${sensor}`} activeClassName={estilos.ativo} key={sensor}>
                            Sensor {sensor}
                        </NavLink>
                    ))
                }
            </nav>
        </>
    );
};

export default Navegacao;
