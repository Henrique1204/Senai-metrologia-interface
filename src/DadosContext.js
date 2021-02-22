import React from "react";
import { GET_DADOS, LOGIN } from "./api.js";
// Importando o Hooks personalizado para Fetch.
import useFetch from "./Hooks/useFetch.js";

// Criando o contexto.
export const DadosContext = React.createContext();

export const DadosStorage = ({children}) => {
    // Dados Medidas.
    const { dados, erro, loading, request } = useFetch();
    const [sensores, setSensores] = React.useState([]);
    // Dados Usuário.
    const [login, setLogin] = React.useState(null);
    const [erroLogin, setErroLogin] = React.useState(null);
    const [loadingLogin, setLoadingLogin] = React.useState(null);

    React.useEffect(() => {
        async function buscarDados() {
            const { url, options } = GET_DADOS();

            const { json } = await request(url, options);

            if (json) {
                const sensores = json.reduce((ant, { nome_sensor }) => {
                    if (!ant.includes(nome_sensor)) {
                        return [...ant, nome_sensor];
                    }
        
                    return [...ant];
                }, []);

                setSensores(sensores.sort((a, b) => ((a > b) ? 1 : ((b > a) ? -1 : 0))));
            }
        }

        buscarDados();
    }, [request]);

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
            dados,
            erro,
            loading,
            sensores,
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