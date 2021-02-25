import React from "react";
// Importando css como um módulo.
import estilos from "./Header.module.css";
// Importando o Hook para localizar a página e componente para navegação. 
import { useLocation } from "react-router-dom";
import Navegacao from "./Navegacao/Navegacao";
import { useSelector } from "react-redux";


const Header = () => {
    // Definindo um estado para o titulo.
    const [titulo, setTitulo] = React.useState(null);
    // Buscando a localização da página.
    const { pathname } = useLocation();
    // Redux
    const { loading } = useSelector((state) => state.dashboard);

    React.useEffect(() =>{
        if(pathname === "/") {
            setTitulo("Dashboard");
        } else {
            // Forma a url para definir o nome do sensor.
            setTitulo(pathname.replace("/", "").replace("sensor", "Sensor "));
        }
    }, [pathname]);

    if (pathname === "/login") return null;

    return(
        <header className={estilos.header}>
            <h1>{titulo}</h1>
            
            {!loading && <Navegacao />}
        </header>
    );
};

export default Header;