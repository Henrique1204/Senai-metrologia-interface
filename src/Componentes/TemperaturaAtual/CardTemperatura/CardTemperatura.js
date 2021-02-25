import React from "react";
// Import do css como módulo.
import estilos from "./CardTemperatura.module.css";

const CardTemperatura = ({ dados }) => {
    const [corAviso, setCorAviso] = React.useState(null);
    const [ativo, setAtivo] = React.useState(true);

    React.useEffect(() => {
        const { temperatura, data, hora } = dados;

        const dataAtual = new Date();
        const dataCard = Number(data.substring(0, 2));
        const horaCard = Number(hora.split("h")[1].replace("m", ""));

        const condicaoData = dataCard === dataAtual.getDate();
        const condicaoHora = horaCard > dataAtual.getMinutes() - 15;
        setAtivo(condicaoData && condicaoHora);

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
            <div className={`${estilos.card} ${estilos[corAviso]} ${(!ativo) ? estilos.desativado : '' }`}>
                <p className={estilos.nome} >Sensor {dados.nome_sensor}</p>
                <span className={estilos.temperatura} >
                    T • {dados.temperatura.toString().replace(".", ",")} º C
                </span>
                <span>U • {dados.umidade}</span>
            </div>
        );
    }

    return null;
};

export default CardTemperatura;
