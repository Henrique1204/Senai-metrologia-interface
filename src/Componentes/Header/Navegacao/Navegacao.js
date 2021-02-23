import React from "react";
import estilos from "./Navegacao.module.css";
// Importando o Hook para localizar a página e componente para navegação. 
import { NavLink, useNavigate } from "react-router-dom";
import useMedia from "../../../Hooks/useMedia.js";
import { useDispatch, useSelector } from "react-redux";
import { selecionarSensores } from "../../../store/dashboard";
import { logout } from "../../../store/login";

const Navegacao = () => {
    const isMobile = useMedia("(max-width: 70rem)");
    const [mobileMenu, setMobileMenu] = React.useState(false);
    const navegar = useNavigate();
    // Redux
    const sensores = useSelector(selecionarSensores);
    const { login } = useSelector((state) => state.login);
    const dispatch = useDispatch();

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

                { sensores.map((sensor) => (
                    <NavLink to={`/sensor${sensor}`} activeClassName={estilos.ativo} key={sensor}>
                        Sensor {sensor}
                    </NavLink>
                )) }

                { login && (
                    <button className={estilos.logout} onClick={() => {
                        dispatch(logout());
                        navegar("/login");
                    }}>
                        Logout
                    </button>
                ) }
            </nav>
        </>
    );
};

export default Navegacao;
