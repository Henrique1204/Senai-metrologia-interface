import React from "react"
import estilos from "./FormCadastro.module.css";

const FormCadastro = ({ value, setValue, limpar, submit, loading, erro }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        submit();
    }

    return (
        <form className={estilos.Form} onSubmit={handleSubmit}>
            <div className={estilos.formGroup}>
                <label htmlFor="nome">Nome:</label>
                <input
                    className="form-control"
                    type="text"
                    name="nome"
                    id="nome"
                    value={value["nome"]}
                    onChange={setValue}
                    placeholder="Digite o nome..."
                />
            </div>

            <div className={estilos.formGroup}>
                <label htmlFor="email">E-mail:</label>
                <input
                    className="form-control"
                    type="text"
                    name="email"
                    id="email"
                    value={value["email"]}
                    onChange={setValue}
                    placeholder="Digite o e-mail..."
                />
            </div>

            { erro && <small className={estilos.erro}>{erro}</small> }

            <div className={estilos.btns}>
                <button className={`${estilos.btn} ${estilos.salvar}`} disabled={loading}>Salvar</button>
                <button type="button" className={`${estilos.btn} ${estilos.cancelar}`} onClick={limpar}>Cancelar</button>
            </div>
        </form>
    );
};

export default FormCadastro
