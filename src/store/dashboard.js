import createAsyncSlice from "./util/createAsyncSlice.js";
import { GET_DADOS } from "../api.js";

const slice = createAsyncSlice({
    name: "dashboard",
    fetchConfig: () => GET_DADOS()
});

export const fetchDados = slice.asyncActions;

export const selecionarSensores = ({ dashboard }) => {
    if (dashboard.dados) {
        const sensores = dashboard.dados.reduce((ant, { nome_sensor }) => {
            if (!ant.includes(nome_sensor)) {
                return [...ant, nome_sensor];
            }
    
            return [...ant];
        }, []);
    
        return sensores.sort((a, b) => ((a > b) ? 1 : ((b > a) ? -1 : 0)));
    } else {
        return [];
    }
}

export default slice.reducer;