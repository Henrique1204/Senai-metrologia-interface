import React from "react";
import estilos from "./CadastroEmail.module.css";
import FormCadastro from "../FormCadastro/FormCadastro.js";
import TabelaEmails from "../TabelaEmails/TabelaEmails";

const initialState = {
    lista: [
        {
            id: 1,
            nome: "Paulo",
            email: "paulo@gmail.com"
        },
        {
            id: 2,
            nome: "Mauricio",
            email: "mauricio@gmail.com"
        },
        {
            id: 3,
            nome: "Nicolas",
            email: "nico_gatinho102@gmail.com"
        }
    ],
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
                <TabelaEmails lista={lista} />
            </div>
        </section>
    )
};

export default CadastroEmail;
