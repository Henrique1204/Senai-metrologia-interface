import React from "react";
// Import componente CardTemperatura.
import CardTemperatura from "./CardTemperatura/CardTemperatura";
// Import do css como módulo.
import estilos from "./TemperaturaRecente.module.css";
import { useSelector } from "react-redux";
import { selecionarSensores } from "../../store/dashboard";

const TemperaturaRecente = () => {
    const [dadosCard, setDadosCard] = React.useState(null);
    const { dados } = useSelector((state) => state.dashboard);
    const sensores = useSelector(selecionarSensores);

    React.useEffect(() => {
        setDadosCard(
            sensores.map((sensor) => dados.find((dado) => dado.nome_sensor === sensor))
        );
    }, [dados, sensores]);

    return (
        <section className="container animarEntrada">
            <h1 className="titulo">Temperaturas recentes</h1>

            <ul className={estilos.container} >
                {
                    dadosCard && dadosCard.map((dado) => (
                        <li key={dado.nome_sensor} >
                            <CardTemperatura dados={dado} />
                        </li>
                    ))
                }
            </ul>
        </section>
    );
};

export default TemperaturaRecente;
