import React, { useState } from "react";
import axios from "axios";
import { Container, Form, FormControl, InputGroup } from "react-bootstrap";
import styled, { css } from "styled-components";
import "./FormCategoria.css";

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
        <Form.Group
          controlId="formNomeCategoria"
          onChange={(nome) => setNome(nome.target.value)}
        >
          <Form.Label>Nome:</Form.Label>
          <Form.Control type="text" placeholder="nome da categoria" />
        </Form.Group>
        <Form.Group
          controlId="formDescricaoCategoria"
          onChange={(descricao) => setDescricao(descricao.target.value)}
        >
          <Form.Label>Descrição:</Form.Label>
          <Form.Control type="text" placeholder="nome da categoria" />
        </Form.Group>
        <Button onClick={() => novaCategoria()}>Salvar</Button>
      </div>
    </Container>
  );
};
