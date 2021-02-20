import React from "react";
import { useNavigate } from "react-router-dom";

const RotaNaoEncontrada = () => {
    const navegar = useNavigate();

    React.useEffect(() => {
        navegar("/");
    }, [navegar]);

    return null;
}

export default RotaNaoEncontrada;
