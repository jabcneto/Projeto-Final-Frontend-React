import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import styled, { css } from "styled-components";
import "./FormCategoria.css";
import api from "../../../service/api";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #343a40;
  color: #343a40;
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

export default () => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  async function novaCategoria(event) {
    await api
      .post("/categoria", {
        nome: nome,
        descricao: descricao,
      })
      .then(async (res) => {
        await alert("Categoria adicionada com sucesso!");
        console.log(res);
        document.getElementById("formNomeCategoria").value = "";
        document.getElementById("formDescricaoCategoria").value = "";
      });
  }

  return (
    <Container md="auto">
      <div>
        <h2>Nova Categoria</h2>
        <form style={{ margin: "1rem 0" }}>
          <Form.Group
            controlId="formNomeCategoria"
            onChange={(nome) => setNome(nome.target.value)}
          >
            <Form.Label>Nome:</Form.Label>
            <Form.Control type="text" placeholder="Nome da categoria" />
          </Form.Group>

          <Form.Group
            controlId="formDescricaoCategoria"
            onChange={(descricao) => setDescricao(descricao.target.value)}
          >
            <Form.Label>Descrição:</Form.Label>
            <Form.Control type="text" placeholder="Descrição da categoria" />
          </Form.Group>
        </form>
        <Button
          type="submit"
          onClick={(event) => {
            novaCategoria(event);
          }}
        >
          Salvar
        </Button>
      </div>
    </Container>
  );
};
