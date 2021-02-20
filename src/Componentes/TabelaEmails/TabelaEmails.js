import React from "react";
import estilos from "./TabelaEmails.module.css";

const TabelaEmails = ({ lista, carregar, remover }) => {
    return (
        <table className={estilos.Tabela}>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th style={{ width: "120px" }}>Ações</th>
                </tr>
            </thead>

            <tbody>
                {lista.map((user) => (
                    <tr key={user.id}>
                        <td>{user.nome}</td>
                        <td>{user.email}</td>
                        <td>
                            <button
                                className={`${estilos.btn} ${estilos.editar}`}
                                onClick={() => carregar(user)}
                            >
                                <i className="fa fa-pencil"></i>
                            </button>
                            <button className={`${estilos.btn} ${estilos.remover}`} onClick={() => remover(user)}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TabelaEmails;
