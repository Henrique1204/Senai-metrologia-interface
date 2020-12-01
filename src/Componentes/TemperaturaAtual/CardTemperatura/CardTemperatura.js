import React from "react";
// Import do css como módulo.
import estilos from "./CardTemperatura.module.css";

const CardTemperatura = ({ dados }) => {
    const [corAviso, setCorAviso] = React.useState(null);

    React.useEffect(() => {
        const { temperatura } = dados;

        if (temperatura >= 18 && temperatura <= 22) {
            setCorAviso("verde");
        } else if (temperatura >= 16 && temperatura <= 24) {
            setCorAviso("amarelo");
        } else if (temperatura >= 14 && temperatura <= 26) {
            setCorAviso("laranja");
        } else {
            setCorAviso("vermelho");
        }
    }, [dados]);

    if (dados) {
        return (
            <div className={`${estilos.card} ${estilos[corAviso]}`} >
                <p className={estilos.nome} >Sensor {dados.nome_sensor}</p>
                <span className={estilos.temperatura} >T - {dados.temperatura} º C</span>
                <span className={estilos.umidade} >U - {dados.umidade}</span>
            </div>
        );
    }

    return null;
};

export default CardTemperatura;
