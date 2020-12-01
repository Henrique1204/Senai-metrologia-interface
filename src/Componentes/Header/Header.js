import React from "react";
//  Importando css como um módulo.
import estilos from "./Header.module.css";
//  Importando o Hook para localizar a página e componente para navegação. 
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
    //  Definindo um estado para o titulo.
    const [titulo, setTitulo] = React.useState(null);
    //  Definindo um estado para saber de estamos na home.
    const [isHome, setIsHome] = React.useState(null);
    //Buscando a localização da página.
    const localizacao = useLocation();

    React.useEffect(() =>{
        //  Puxa a propriedade "pathname" do objeto de localização.
     const {pathname} = localizacao;

        if(localizacao.pathname === "/") {
            setTitulo("Home");
            setIsHome(true);
        }else {
            //  Forma a url para definir o nome do sensor.
            setTitulo(pathname.replace("/", "").replace("sensor", "Sensor "));
            setIsHome(false);     
        }
    }, [localizacao]);

    return(
        <header>
            <h1>Metrologia SENAI - {titulo}</h1>
            
            {

                !isHome && (
                    <nav>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/sensorA">Sensor A</NavLink>
                        <NavLink to="/sensorB">Sensor B</NavLink>
                        <NavLink to="/sensorC">Sensor C</NavLink>
                        <NavLink to="/sensorD">Sensor D</NavLink>
                        <NavLink to="/sensorE">Sensor E</NavLink>
                    </nav>
                )
            }
        </header>
    );
};

export default Header;