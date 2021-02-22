import React from "react";
import estilos from "./Login.module.css";
import useForm from "../../Hooks/useForm.js";
import { DadosContext } from "../../DadosContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const usuario = useForm();
    const senha = useForm();
    const { userLogin, erroLogin, loadingLogin, login } = React.useContext(DadosContext);
    const navegar = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (usuario.validar() && senha.validar()) {
            userLogin(usuario.valor, senha.valor);
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

                <button disabled={loadingLogin}>Entrar</button>
                {erroLogin && <small className={estilos.erro}>{erroLogin}</small>}
            </form>
        </section>
    );
};

export default Login;
