import React from "react";
import estilos from "./CadastroEmail.module.css";
import FormCadastro from "../FormCadastro/FormCadastro";

const initialState = {
    lista: [],
    user: {
        name: "",
        email: ""
    }
};

const CadastroEmail = () => {
    const [lista, setLista] = React.useState(initialState.lista);
    const [user, setUser] = React.useState(initialState.user);

    return (
        <section className="animarEntrada">
            <div className={estilos.card}>
                <FormCadastro value={user} />
            </div>
        </section>
    )
};

export default CadastroEmail;
