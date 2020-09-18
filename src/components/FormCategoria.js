import React, { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

export default (props) => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  async function novaCategoria() {
    axios
      .post(
        "https://api-castor.herokuapp.com/categoria",
        {
          id: 0,
          nome: nome,
          descricao: descricao,
        }
      )
      .then((res) => {
        props.setNovo(props.novo + 1);
        console.log(res);
      });
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
      <Button variant="outlined" color="primary" onClick={() => novaCategoria()}>Salvar</Button>
    </div>
  );
};
