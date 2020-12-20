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
    const [tabelas, setTabelas] = React.useState([]);
    const [datas, setDatas] = React.useState([]);
    const [filtro, setFiltro] = React.useState("");

    function filtrarDatas(dados) {
        const datas =  dados.reduce((ant, { data }) => {
            const inclui = ant.includes(data);
            if (!inclui) {
                return [...ant, data];
            }

            setDatas([...ant]);
            return [...ant];
        }, []);

        return datas;
    }

    function filtrarDados(filtro, dados) {
        let dadosFiltrados = [];

        if (Array.isArray(filtro)) {
            filtro.forEach((item) => {
                const dado = dados.filter((dado) => dado.data === item);
        
                dadosFiltrados.push(dado);
            });
        } else {
            const dado = dados.filter((dado) => dado.data === filtro);

            dadosFiltrados.push(dado);
        }

        return dadosFiltrados;;
    }

    React.useEffect(() => {
        async function buscarDados() {
            const { url, options } = GET_DADOS(pathname.replace("/sensor", ""), 420);
            const { json } = await request(url, options);

            const datas = filtrarDatas(json);
            setDatas(datas);
            setTabelas(filtrarDados(datas, json));
        }

        buscarDados();
    }, [pathname, request]);

    React.useEffect(() => {
        if (datas.length && dados) {
            setTabelas(filtrarDados((filtro ? filtro : datas), dados));
        }
    }, [filtro, datas, dados]);

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

                {
                    (datas.length !== 1) && (
                        <div className={estilos.filtro}>
                            <select value={filtro} onChange={({target}) => setFiltro(target.value)}>
                                <option value="">Todas as datas</option>

                                {
                                    datas.map((data, i) => <option key={i + 1} value={data}>{data}</option>)
                                }
                            </select>
                        </div>
                    )
                }

                {
                    tabelas.map((tabela, i) => (
                        <TabelaHistorico key={i + 1} dados={tabela} />
                    ))
                }
            </section>
        );
    }

    return null;
};

export default Historico;
