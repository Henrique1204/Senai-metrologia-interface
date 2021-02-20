import React from "react";
import estilos from "./CadastroEmail.module.css";
import FormCadastro from "../FormCadastro/FormCadastro.js";
import TabelaEmails from "../TabelaEmails/TabelaEmails";
import Loading from "../Feedback/Loading/Loading.js";
import Erro from "../Feedback/Erro/Erro.js";
import { GET_EMAILS, POST_EMAILS, PUT_EMAILS, DELETE_EMAILS } from "../../api.js";
import useFetch from "../../Hooks/useFetch.js";
import { useNavigate } from "react-router-dom";
import { DadosContext } from "../../DadosContext";

const initialState = {
    user: {
        nome: "",
        email: ""
    }
};

const CadastroEmail = () => {
    const { dados, loading, erro, request } = useFetch();
    const [user, setUser] = React.useState(initialState.user);
    const [enviando, setEnviando] = React.useState(null);
    const [erroform, setErro] = React.useState(null);
    const [emailEdicao, setEmailEdicao] = React.useState(null);
    const { login, setLogin } = React.useContext(DadosContext);
    const navegar = useNavigate();

    const limpar = () => {
        setUser(initialState.user);
        setErro(null);
        setEmailEdicao(null);
    };

    const atualizarCampos = ({ target }) => setUser((user) => ({
        ...user,
        [target.name]: target.value
    }));

    const carregar = (user) => {
        setUser(user);
        setEmailEdicao(user.email);
    };

    const buscarDados = async () => {
        const { url, options } = GET_EMAILS();
        await request(url, options);

        if (erro === "Falha ao autenticar o token.") {
            window.localStorage.removeItem("token");
            setLogin(false);
            navegar("/login");
        }
    }

    const salvar = async () => {
        setEnviando(true);
        let config;
    
        if (user?.id) {
            config = PUT_EMAILS(user.id, user);
        } else {
            config = POST_EMAILS(user);
        }

        const regexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        const emailExiste = dados.map(({ email }) => email).includes(user["email"]);
        const emailValido = regexEmail.test(user["email"]);

        if (!user["nome"] && !user["email"]) {
            setErro("Por favor, preencha todos os campos!");
        } else if (!emailValido) {
            setErro("E-mail inválido! Tente novamente");
        } else if (emailExiste && user["email"] !== emailEdicao) {
            setErro("E-mail já existente, cadastre um novo!");
        } else {
            setErro(null);
            await fetch(config.url, config.options);

            limpar();
            buscarDados();
        }

        setEnviando(false);
    };

    const remover = async (user) => {
        const confirmacao = window.confirm("Tem certeza que deseja remover o e-mail?");

        if (confirmacao) {
            const { url, options } = DELETE_EMAILS(user.id);
            await fetch(url, options);
            await buscarDados();
        }
    };

    React.useEffect(() => {
        async function iniciarDados() {
            const { url, options } = GET_EMAILS();
            await request(url, options);

            if (erro === "Falha ao autenticar o token.") {
                window.localStorage.removeItem("token");
                setLogin(false);
                navegar("/login");
            }
        }

        iniciarDados();
    }, [request, navegar, erro, setLogin]);

    React.useEffect(() => {
        if (!login) navegar("/login");
    }, [login, navegar]);

    return (
        <section className={`${estilos.sessao} animarEntrada`}>
            <div className={estilos.card}>
                <FormCadastro
                    value={user}
                    setValue={atualizarCampos}
                    loading={enviando}
                    limpar={limpar}
                    submit={salvar}
                    erro={erroform}
                />

                { loading && <Loading /> }
                { erro && <Erro erro={"Erro ao buscar os e-mails."} /> }
                { dados && <TabelaEmails lista={dados} carregar={carregar} remover={remover} /> }
            </div>
        </section>
    )
};

export default CadastroEmail;
