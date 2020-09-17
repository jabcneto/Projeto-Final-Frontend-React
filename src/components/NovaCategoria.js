import React, { useState } from "react";
import axios from "axios";

export default () => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  async function novaCategoria() {
    axios
      .post(
        "http://residencia-ecommerce.us-east-1.elasticbeanstalk.com/categoria",
        {
          id: 0,
          nome: nome,
          descricao: descricao
        }
      )
      .then((res) => console.log(res));
  }

  return (
    <div className="novo">
      <input
        id="titulo"
        placeholder="titulo"
        onChange={(titulo) => setNome(titulo.target.value)}
      />
      <input
        id="descricao"
        placeholder="descricao"
        onChange={(descricao) => setDescricao(descricao.target.value)}
      />
      <button onClick={() => novaCategoria()}>Salvar</button>
    </div>
  );
};
