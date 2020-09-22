import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import styled, { css } from "styled-components";
import "./FormCategoria.css";
import api from "../../../service/api";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #343A40;
  color: #343A40;
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

export default (props) => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  async function novaCategoria(event) {
    api
      .post("/categoria", {
        nome: nome,
        descricao: descricao,
      })
      .then((res) => {
        props.setNovo(props.novo + 1);
        console.log(res);
      });
  }

  return (
    <Container  md="auto" >
      <div>
        <h2>Nova Categoria</h2>
        <form style={{ margin: "1rem 0" }}>
          <Form.Group
            controlId="formNomeCategoria"
            onChange={(nome) => setNome(nome.target.value)}
          >
            <Form.Label >Nome:</Form.Label>
            <Form.Control type="text" placeholder="Nome da categoria" />
          </Form.Group>

          <Form.Group
            controlId="formDescricaoCategoria"
            onChange={(descricao) => setDescricao(descricao.target.value)}
          >
            <Form.Label>Descrição:</Form.Label>
            <Form.Control type="text" placeholder="Descrição da categoria" />
          </Form.Group>

          <Button
            type="submit"
            onClick={(event) => {
              novaCategoria(event);
            }}
          >
            Salvar
          </Button>
        </form>
      </div>
    </Container>
  );
};
