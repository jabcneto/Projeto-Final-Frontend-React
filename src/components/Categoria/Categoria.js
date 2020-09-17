import React from "react";
import axios from "axios";
import "./Categoria.css";

const Categoria = (props) => {
  const categoria = props.categoria;
  async function deletar(id) {
    axios
      .delete(
        `http://residencia-ecommerce.us-east-1.elasticbeanstalk.com/categoria/${id}`,
        {headers: {"Access-Control-Allow-Origin": "*"}}
      )
      .then((res) => console.log(res));
  }

  return (
    <div className="categoria">
      <div>
        <button onClick={() => deletar(categoria.id)}>X</button>
        <h2 className={"titulo"}>{categoria.nome}</h2>
      </div>
      <p>{categoria.descricao}</p>
      <button>editar</button>
    </div>
  );
};

export default Categoria;
