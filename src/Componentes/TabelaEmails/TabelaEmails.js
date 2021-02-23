import React from "react";
import { useSelector } from "react-redux";
import estilos from "./TabelaEmails.module.css";

const TabelaEmails = ({ carregar, remover }) => {
    const { dados } = useSelector((state) => state.emails);

    if (dados) {
        return (
            <table className={`${estilos.Tabela} animarEntrada`}>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th style={{ width: "120px" }}>Ações</th>
                    </tr>
                </thead>
    
                <tbody>
                    {dados.map((user) => (
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
    }

    return null;
};

export default TabelaEmails;
