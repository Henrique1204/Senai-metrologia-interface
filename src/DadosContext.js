import React from "react";
import { GET_DADOS, LOGIN } from "./api.js";
// Importando o Hooks personalizado para Fetch.
import useFetch from "./Hooks/useFetch.js";

// Criando o contexto.
export const DadosContext = React.createContext();

export const DadosStorage = ({children}) => {
    // Dados Usuário.
    const [login, setLogin] = React.useState(null);
    const [erroLogin, setErroLogin] = React.useState(null);
    const [loadingLogin, setLoadingLogin] = React.useState(null);

    async function userLogin(usuario, senha) {
        try {
            setErroLogin(null);
            setLoadingLogin(true);

            const { url, options } = LOGIN({usuario, senha});

            const res = await fetch(url, options);

            if (!res.ok) throw new Error("Erro: Usuário inválido!");

            const { token } = await res.json();
    
            window.localStorage.setItem("token", token);
            setLogin(true);
        } catch(erro) {
            setErroLogin(erro.message);
            setLogin(false);
        } finally {
            setLoadingLogin(false);
        }
    }

    React.useEffect(() => {
        const token = window.localStorage.getItem("token");
        if (token) setLogin(true);
    }, []);

    return (
        <DadosContext.Provider value={{
            userLogin,
            erroLogin,
            loadingLogin,
            login,
            setLogin
        }}>
            {children}
        </DadosContext.Provider>
    );
};