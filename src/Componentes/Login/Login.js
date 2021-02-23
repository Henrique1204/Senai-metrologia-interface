import React from "react";
import estilos from "./Login.module.css";
import useForm from "../../Hooks/useForm.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "../../store/login.js";
import { LOGIN } from "../../api";

const Login = () => {
    const usuario = useForm();
    const senha = useForm();
    const navegar = useNavigate();
    // Redux
    const { login, erro, loading } = useSelector((state) => state.login);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (usuario.validar() && senha.validar()) {
            dispatch(fetchLogin(LOGIN({
                usuario: usuario.valor,
                senha: senha.valor
            })));
        }
    };

    React.useEffect(() => {
        if (login) navegar("/cadastro");
    }, [login, navegar]);

    return (
        <section className={`${estilos.sessao} animarEntrada`}>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="usuario">Usuário:</label>
                <div className={estilos.containerInput}>
                    <input
                        type="text"
                        name="usuario"
                        value={usuario.valor}
                        onChange={usuario.onChange}
                        onBlur={usuario.onBlur}
                    />
                    <i className="fa fa-user"></i>
                    {usuario.erro && <small className={estilos.erro}>{usuario.erro}</small>}
                </div>

                <label htmlFor="senha">Senha:</label>
                <div className={estilos.containerInput}>
                    <input
                        type="password"
                        name="senha"
                        value={senha.valor}
                        onChange={senha.onChange}
                        onBlur={senha.onBlur}
                    />
                    <i className="fa fa-unlock-alt"></i>
                    {senha.erro && <small className={estilos.erro}>{senha.erro}</small>}
                </div>

                <button disabled={loading}>Entrar</button>
                {erro && <small className={estilos.erro}>{erro}</small>}
            </form>
        </section>
    );
};

export default Login;
