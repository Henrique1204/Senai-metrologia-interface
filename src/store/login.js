// Importando utilitários do redux.
import { createSlice } from "@reduxjs/toolkit";
import { VALIDAR_TOKEN } from "../api.js";

const storageKey = "token";

const slice = createSlice({
    name: "login",
    initialState: {
        loading: null,
        token: localStorage.getItem(storageKey) || null,
        login: false,
        erro: null
    },
    reducers: {
        validarToken(state, action) {
            if (action.payload) {
                state.login = true;
            } else {
                localStorage.removeItem(storageKey)
                state.login = false;
            }
        },
        atualizarLogin(state, action) {
            state.login = action.payload;
        },
        atualizarToken(state, action) {
            state.token = action.payload;
        },
        atualizarLoading(state, action) {
            state.loading = action.payload;
        },
        atualizarErro(state, action) {
            state.erro = action.payload;
        }
    }
});

export const {
    validarToken,
    atualizarLogin,
    atualizarToken,
    atualizarLoading,
    atualizarErro
} = slice.actions;

export const fetchLogin = ({ url, options }) => async (dispatch) => {
    try {
        dispatch(atualizarErro(null));
        dispatch(atualizarLoading(true));

        const res = await fetch(url, options);
        const json = await res.json();

        if (!json.auth) {
            throw new Error(json.message);
        }

        dispatch(atualizarToken(json.token));
        window.localStorage.setItem(storageKey, json.token);
        dispatch(atualizarLogin(true));
    } catch ({ message }) {
        dispatch(atualizarErro(message));
    } finally {
        dispatch(atualizarLoading(false));
    }
}

// export const logout = () => (dispatch) => {
//     dispatch(validarToken(false));
// }

export const validarTokenFetch = (payload) => async (dispatch) => {
    try {
        if (payload) {
            const { url, options } = VALIDAR_TOKEN(payload);
            const res = await fetch(url, options);
            const json = await res.json();

            if (res.ok === false) throw new Error("Erro no fetch!");

            dispatch(validarToken(json.auth));
        } else {
            dispatch(validarToken(false));
        }
    } catch (e) {
        dispatch(validarToken(false));
    }
}

export default slice.reducer;
