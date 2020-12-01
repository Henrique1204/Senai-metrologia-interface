import React from "react";
// Importando css como um módulo.
import estilos from "./Header.module.css";
// Importando o Hook para localizar a página e componente para navegação. 
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
    // Definindo um estado para o titulo.
    const [titulo, setTitulo] = React.useState(null);
    // Definindo um estado para saber de estamos na home.
    const [isHome, setIsHome] = React.useState(null);
    // Buscando a localização da página.
    const localizacao = useLocation();

    React.useEffect(() =>{
        // Puxa a propriedade "pathname" do objeto de localização.
     const {pathname} = localizacao;

        if(localizacao.pathname === "/") {
            setTitulo("Home");
            setIsHome(true);
        }else {
            // Forma a url para definir o nome do sensor.
            setTitulo(pathname.replace("/", "").replace("sensor", "Sensor "));
            setIsHome(false);     
        }
    }, [localizacao]);

    return(
        <header className={`${estilos.header} ${(isHome)? "" : estilos.headerExterno}`}>
            <h1>Metrologia - {titulo}</h1>
            
            {
                !isHome && (
                    <nav className={estilos.navegacao}>
                        <NavLink to="/" end activeClassName={estilos.ativo}>Home</NavLink>
                        <NavLink to="/sensorA" activeClassName={estilos.ativo}>Sensor A</NavLink>
                        <NavLink to="/sensorB" activeClassName={estilos.ativo}>Sensor B</NavLink>
                        <NavLink to="/sensorC" activeClassName={estilos.ativo}>Sensor C</NavLink>
                        <NavLink to="/sensorD" activeClassName={estilos.ativo}>Sensor D</NavLink>
                        <NavLink to="/sensorE" activeClassName={estilos.ativo}>Sensor E</NavLink>
                    </nav>
                )
            }
        </header>
    );
};

export default Header;