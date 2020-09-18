import React, { useState } from "react";
import axios from "axios";
import { Container, FormControl, InputGroup } from "react-bootstrap";
import styled, { css } from "styled-components";

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

  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #507bff;
    color: #507bff;
    float: right;
    margin: 0 1em;
    padding: 0.25em 1em;

    ${(props) =>
      props.primary &&
      css`
        background: palevioletred;
        color: white;
      `};
  `;

  return (
    <Container md="auto">
      <div>
      <h2>Nova Categoria</h2>
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
        <InputGroup
          className="mb-3"
          onChange={(descricao) => setDescricao(descricao.target.value)}
        >
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
        <Button onClick={() => novaCategoria()}>Salvar</Button>
      </div>
    </Container>
  );
};
