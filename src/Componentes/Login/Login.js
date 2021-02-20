import React from "react";
import estilos from "./Login.module.css";

const Login = () => {
    

    return (
        <section className={`${estilos.sessao} animarEntrada`}>
            <h1>Login</h1>

            <form>
                <label htmlFor="usuario">Usuário:</label>
                <div className={estilos.containerInput}>
                    <input type="text"/>
                    <i className="fa fa-user"></i>
                </div>

                <label htmlFor="senha">Senha:</label>
                <div className={estilos.containerInput}>
                    <input type="password"/>
                    <i className="fa fa-unlock-alt"></i>
                </div>

                <button>Entrar</button>
            </form>
        </section>
    );
};

export default Login;
