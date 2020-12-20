const API_URL = "http://senai-metrologia.brazilsouth.cloudapp.azure.com/api";

export const GET_DADOS = ( _nome_sensor, _limite) => {
    if (_nome_sensor && _limite) {
        return {
            url: `${API_URL}/?_nome_sensor=${_nome_sensor}&_limite=${_limite}`,
            options: {
                method: "GET",
                cache: "no-store"
            }
        }
    }

    return {
        url: `${API_URL}/?_limite=1800`,
        options: {
            method: "GET",
            cache: "no-store"
        }
    }
};


