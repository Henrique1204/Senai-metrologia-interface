const API_URL = "http://localhost:8000";

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

export const GET_EMAILS = () => ({
    url: `${API_URL}/emails`,
    options: {
        method: "GET",
        cache: "no-store"
    }
});

export const POST_EMAILS = (body) => ({
    url: `${API_URL}/emails`,
    options: {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }
});

export const PUT_EMAILS = (id, body) => ({
    url: `${API_URL}/emails/${id}`,
    options: {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }
});

export const DELETE_EMAILS = (id) => ({
    url: `${API_URL}/emails/${id}`,
    options: {
        method: "DELETE"
    }
});
