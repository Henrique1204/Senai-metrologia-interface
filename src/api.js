const API_URL = "http://senai-metrologia.brazilsouth.cloudapp.azure.com/api";

export const GET_DADOS = ( _nome_sensor, _limite) => {
    if (_nome_sensor && _limite) {
        return {
            url: `${API_URL}/medidas/?_nome_sensor=${_nome_sensor}&_limite=${_limite}`,
            options: {
                method: "GET",
                cache: "no-store"
            }
        }
    }

    return {
        url: `${API_URL}/medidas/?_limite=1800`,
        options: {
            method: "GET",
            cache: "no-store"
        }
    }
};

export const GET_EMAILS = (token) => ({
    url: `${API_URL}/emails`,
    options: {
        method: "GET",
        cache: "no-store",
        headers: {
            "x-access-token": token
        }
    }
});

export const POST_EMAILS = (body, token) => ({
    url: `${API_URL}/emails`,
    options: {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": token
        },
        body: JSON.stringify(body)
    }
});

export const PUT_EMAILS = (id, body, token) => ({
    url: `${API_URL}/emails/${id}`,
    options: {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": token
        },
        body: JSON.stringify(body)
    }
});

export const DELETE_EMAILS = (id, token) => ({
    url: `${API_URL}/emails/${id}`,
    options: {
        method: "DELETE",
        headers: {
            "x-access-token": token
        }
    }
});

export const LOGIN = (body) => ({
    url: `${API_URL}/login`,
    options: {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }
});
