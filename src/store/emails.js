// Importando utilitários do redux.
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "emails",
    initialState: {
        dados: null,
        loading: null,
        erro: null
    },
    reducers: {
        atualizarDados(state, action) {
            state.dados = action.payload;
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
    atualizarDados,
    atualizarLoading,
    atualizarErro
} = slice.actions;


export const getEmails = ({ url, options }) => async (dispatch) => {
    try {
        dispatch(atualizarErro(null));
        dispatch(atualizarLoading(true));

        const res = await fetch(url, options);
        const json = await res.json();

        if (!res.ok) {
            throw new Error(json.message);
        }

        dispatch(atualizarDados(json));
    } catch ({ message }) {
        dispatch(atualizarDados(null));
        dispatch(atualizarErro(message));
    } finally {
        dispatch(atualizarLoading(false));
    }
};

export const atualizarEmails = ({ url, options }) => async (dispatch) => {
    try {
        dispatch(atualizarErro(null));
        dispatch(atualizarLoading(true));

        const res = await fetch(url, options);
        const json = await res.json();

        if (!res.ok) {
            throw new Error(json.message);
        }
    } catch ({ message }) {
        dispatch(atualizarDados(null));
        dispatch(atualizarErro(message));
    } finally {
        dispatch(atualizarLoading(false));
    }
}

export default slice.reducer;
