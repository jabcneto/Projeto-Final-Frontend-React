import React from "react";
import "./Categoria.css";

const Categoria = (props) => {
  const categoria = props.categoria;

  return (
    <div className="container">
      <div className="categoria">
        <h2 className={"titulo"}>{categoria.nome}</h2>
        <p>{categoria.descricao}</p>
        <button>editar</button>
      </div>
    </div>
  );
};

export default Categoria;
