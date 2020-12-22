import React from "react";
import { GET_DADOS } from "./api.js";
// Importando o Hooks personalizado para Fetch.
import useFetch from "./Hooks/useFetch.js";

// Criando o contexto.
export const DadosContext = React.createContext();

export const DadosStorage = ({children}) => {
    const { dados, erro, loading, request } = useFetch();
    const [sensores, setSensores] = React.useState([]);

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

    return (
        <DadosContext.Provider value={{ dados, erro, loading, sensores }}>
            {children}
        </DadosContext.Provider>
    );
};