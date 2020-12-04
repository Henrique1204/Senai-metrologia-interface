import React from "react";
import { useLocation } from "react-router-dom";
import estilos from "./Historico.module.css";
import useFetch from "../../Hooks/useFetch.js";
import { GET_DADOS } from "../../api";
import TabelaHistorico from "./TabelaHistorico/TabelaHistorico.js";
import Loading from "../Feedback/Loading/Loading";
import Erro from "../Feedback/Erro/Erro";
import Head from "../Head.js";

const Historico = () => {
    const { pathname } = useLocation();
    const { dados, erro, loading, request } = useFetch();

    React.useEffect(() => {
        const { url } = GET_DADOS(pathname.replace("/sensor", ""), 420);

        request(url);
    }, [pathname, request]);

    if (loading) {
        return (
            <section className="container">
                <Loading />
            </section>
        );
    }

    if (erro) {
        return (
            <section className="container animarEntrada">
                <Erro erro="Erro ao buscar o histórico." />
            </section>
        );
    }

    if (dados) {
        return (
            <section className={`container ${estilos.container} animarEntrada`}>
                <Head title={`Histórico ${pathname.replace("/", "")}`} />

                <h1 className="titulo">Histórico</h1>
    
                <TabelaHistorico dados={dados} />
            </section>
        );
    }

    return null;
};

export default Historico;
