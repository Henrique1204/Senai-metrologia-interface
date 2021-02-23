// Importação do React.
import React from "react";
// Importação do módulo de estilo.
import estilos from "./ModalAlerta.module.css";

// Criando a função que retorna o JSX
// (Linguagem de marcação mista entre HTML e JavaScript)
const ModalAlerta = ({ setState }) => {

  const fundoRef = React.useRef();

  const fecharModal = ({ target }) => {
    if (target === fundoRef.current) setState(false);
  }

  // O JSX que vai ser retornado.
  return (
    // Div com a classe Modal que tá vindo do Módulo.
    <div className={estilos.Modal} onClick={fecharModal} ref={fundoRef}>
      <div className={`${estilos.CardModal} animarEntrada`}>
        <button className={estilos.ModalFechar} onClick={() => setState(false)}>X</button>

        <i className="fa fa-check-circle"></i>

        <p>Enviamos um e-mail de confirmação, não esqueça de olhar na caixa de spam.</p>
      </div>
    </div>
  );
};

export default ModalAlerta;