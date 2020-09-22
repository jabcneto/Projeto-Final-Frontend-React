import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Form, FormControl, InputGroup } from "react-bootstrap";
import styled, { css } from "styled-components";
import "./FormCategoria.css";
import api from "../../../service/api";
import { useParams } from "react-router-dom";

export default (props) => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  
  const [categoria, setCategoria] = useState();

  const { id } = useParams();

  async function editar(id) {
    const data = await api.get(`/categoria/${id}`).then((res) => console.log(res.data));
    
  }

  async function editar(id) {
    api
      .put(`/categoria/${id}`, {
        nome: nome,
        descricao: descricao,
      })
      .then((res) => console.log(res));
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
        <h2>Editar Categoria: id-{id}</h2>
        <Form.Group
          controlId="formNomeCategoria"
          onChange={(nome) => setNome(nome.target.value)}
        >
          <Form.Label>Nome:</Form.Label>
          <Form.Control type="text" placeholder="nome da categoria" />
        </Form.Group>
        <Form.Group
          controlId="formDescricaoCategoria"
          value={categoria.nome}
          onChange={(descricao) => setDescricao(descricao.target.value)}
        >
          <Form.Label>Descrição:</Form.Label>
          <Form.Control type="text" placeholder="nome da categoria" />
        </Form.Group>
        <Button onClick={() => editar(id)}>Salvar</Button>
      </div>
    </Container>
  );
};
