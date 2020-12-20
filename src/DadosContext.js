import React from "react";
import { GET_DADOS } from "./api.js";
// Importando o Hooks personalizado para Fetch.
import useFetch from "./Hooks/useFetch.js";

// Criando o contexto.
export const DadosContext = React.createContext();

export const DadosStorage = ({children}) => {
    const { dados, erro, loading, request } = useFetch();

    React.useEffect(() => {
        async function buscarDados() {
            const { url, options } = GET_DADOS();

            await request(url, options);
        }

        buscarDados();
    }, [request]);

    return (
        <DadosContext.Provider value={{ dados, erro, loading }}>
            {children}
        </DadosContext.Provider>
    );
};