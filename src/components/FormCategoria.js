import React, { useState } from "react";
import axios from "axios";
import { Button, Container, FormControl, InputGroup } from "react-bootstrap";

export default (props) => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  async function novaCategoria() {
    axios
      .post("https://api-castor.herokuapp.com/categoria", {
        id: 0,
        nome: nome,
        descricao: descricao,
      })
      .then((res) => {
        props.setNovo(props.novo + 1);
        console.log(res);
      });
  }
  console.log(nome, descricao);
  return (
    <Container md="auto">
      <InputGroup
        className="mb-3"
        onChange={(nome) => setNome(nome.target.value)}
      >
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-default">
            Título
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3" onChange={(descricao) => setDescricao(descricao.target.value)}>
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-default">
            Descrição
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
    </Container>
  );
};
