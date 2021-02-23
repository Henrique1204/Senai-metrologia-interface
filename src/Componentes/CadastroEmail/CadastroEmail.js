import React from "react";
import estilos from "./CadastroEmail.module.css";
import FormCadastro from "../FormCadastro/FormCadastro.js";
import TabelaEmails from "../TabelaEmails/TabelaEmails";
import Loading from "../Feedback/Loading/Loading.js";
import Erro from "../Feedback/Erro/Erro.js";
import ModalAlerta from '../Feedback/ModalAlerta/ModalAlert.js';
import { GET_EMAILS, POST_EMAILS, PUT_EMAILS, DELETE_EMAILS } from "../../api.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getEmails, atualizarEmails } from "../../store/emails.js";

const initialState = {
    user: {
        nome: "",
        email: ""
    }
};

const CadastroEmail = () => {
    const [user, setUser] = React.useState(initialState.user);
    const [erroForm, setErroForm] = React.useState(null);
    const [emailEdicao, setEmailEdicao] = React.useState(null);
    const navegar = useNavigate();
    // Redux
    const { login, token } = useSelector((state) => state.login);
    const { dados, erro, loading } = useSelector((state) => state.emails);
    const dispatch = useDispatch();

    const limpar = () => {
        setUser(initialState.user);
        setErroForm(null);
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

    const salvar = async () => {
        let config;
    
        if (user?.id) {
            config = PUT_EMAILS(user.id, user, token);
        } else {
            config = POST_EMAILS(user, token);
        }

        const regexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        const emailExiste = dados.map(({ email }) => email).includes(user["email"]);
        const emailValido = regexEmail.test(user["email"]);

        if (!user["nome"] && !user["email"]) {
            setErroForm("Por favor, preencha todos os campos!");
        } else if (!emailValido) {
            setErroForm("E-mail inválido! Tente novamente");
        } else if (emailExiste && user["email"] !== emailEdicao) {
            setErroForm("E-mail já existente, cadastre um novo!");
        } else {
            setErroForm(null);
            await dispatch(atualizarEmails(config));

            limpar();
            await dispatch(getEmails(GET_EMAILS(token)));
        }
    };

    const remover = async (user) => {
        const confirmacao = window.confirm("Tem certeza que deseja remover o e-mail?");

        if (confirmacao) {
            await dispatch(atualizarEmails(DELETE_EMAILS(user.id, token)));
            await dispatch(getEmails(GET_EMAILS(token)));
        }
    };

    React.useEffect(() => {
        if (login) {
            dispatch(getEmails(GET_EMAILS(token)));
        } else {
            navegar("/login");
        }
    }, [token, login, navegar, dispatch]);

    return (
        <section className={`${estilos.sessao} animarEntrada`}>
            <div className={estilos.card}>
                <FormCadastro
                    value={user}
                    setValue={atualizarCampos}
                    limpar={limpar}
                    submit={salvar}
                    erro={erroForm}
                />

                { loading && <Loading /> }
                { erro && <Erro erro={erro} /> }
                <TabelaEmails carregar={carregar} remover={remover} />
            </div>

            <ModalAlerta />
        </section>
    )
};

export default CadastroEmail;
