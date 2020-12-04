import React from "react";
import estilos from "./TabelaHistorico.module.css";

const TabelaHistorico = ({ dados }) => {
    const [tabelas, setTabelas] = React.useState([]);

    React.useEffect(() => {
        const datas = dados.reduce((ant, { data }) => {
            const inclui = ant.includes(data);
            if (!inclui) {
                return [...ant, data];
            }

            return [...ant];
        }, []);

        datas.forEach((data) => {
            const tabela = dados.filter((dado) => dado.data === data);

            setTabelas((tab) => ([...tab, tabela]));
        });
    }, [dados]);

    return (
        <>
            {
                tabelas.map((tabela, i) => (
                    <div key={`Tabela${i + 1}`} className={estilos.tabela}>
                        <div className={estilos.titulos}>
                            <span>Nome Sensor</span>
                            <span>Temperatura</span>
                            <span>Umidade</span>
                            <span>Data</span>
                            <span>Hora</span>
                        </div>

                        {
                            tabela.map((dados, i) => (
                                <div key={`Dados${i + 1}`} className={estilos.dados}>
                                    <span>{dados.nome_sensor}</span>
                                    <span>{dados.temperatura} ºC</span>
                                    <span>{dados.umidade}</span>
                                    <span>{dados.data}</span>
                                    <span>{dados.hora}</span>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </>
    );
};

export default TabelaHistorico;
