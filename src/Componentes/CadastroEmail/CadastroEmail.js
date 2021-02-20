import React from "react";
import estilos from "./CadastroEmail.module.css";
import FormCadastro from "../FormCadastro/FormCadastro.js";
import TabelaEmails from "../TabelaEmails/TabelaEmails";
import Loading from "../Feedback/Loading/Loading.js";
import { GET_EMAILS, POST_EMAILS, PUT_EMAILS, DELETE_EMAILS } from "../../api.js";

const initialState = {
    lista: null,
    user: {
        nome: "",
        email: ""
    }
};

const CadastroEmail = () => {
    const [lista, setLista] = React.useState(initialState.lista);
    const [user, setUser] = React.useState(initialState.user);
    const [enviando, setEnviando] = React.useState(null);
    const [loading, setLoading] = React.useState(null);

    const limpar = () => setUser(initialState.user);

    const atualizarCampos = ({ target }) => setUser((user) => ({
        ...user,
        [target.name]: target.value
    }));

    const carregar = (user) => setUser(user);

    const buscarLista = async () => {
        setLoading(true);

        const { url, options } = GET_EMAILS();
        const res = await fetch(url, options);
        const json = await res.json();

        if (res.ok !== false) setLista(json);
        setLoading(false);
    }

    const salvar = async () => {
        setEnviando(true);
        let config;
    
        if (user?.id) {
            config = PUT_EMAILS(user.id, user);
        } else {
            config = POST_EMAILS(user);
        }

        const res = await fetch(config.url, config.options);
        const json = await res.json();
        console.log(json);


        setEnviando(false);
        limpar();
        buscarLista();
    };

    const remover = async (user) => {
        const confirmacao = window.confirm("Tem certeza que deseja remover o e-mail?");

        if (confirmacao) {
            const { url, options } = DELETE_EMAILS(user.id);
            await fetch(url, options);
            setLista((lista) => lista.filter((item) => item.id !== user.id));
        }
    };

    React.useEffect(() => {
        buscarLista(); 
    }, []);


    return (
        <section className="animarEntrada">
            <div className={estilos.card}>
                <FormCadastro
                    value={user}
                    setValue={atualizarCampos}
                    loading={enviando}
                    limpar={limpar}
                    submit={salvar}
                />

                { loading && <Loading /> }
                { lista && <TabelaEmails lista={lista} carregar={carregar} remover={remover} /> }
            </div>
        </section>
    )
};

export default CadastroEmail;
