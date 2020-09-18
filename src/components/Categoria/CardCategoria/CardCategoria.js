import React from "react";
import axios from "axios";
import "./CardCategoria.css";


const CardCategoria = (props) => {
  const categoria = props.categoria;
  async function deletar(id) {
    axios
      .delete(`https://api-castor.herokuapp.com/categoria/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
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

export default CardCategoria;
