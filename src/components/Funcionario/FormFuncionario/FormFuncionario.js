import React, { useState } from "react";
import axios from "axios";
import { Container, Form, FormControl, InputGroup } from "react-bootstrap";
import styled, { css } from "styled-components";

export default (props) => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");

  async function novoFuncionario() {
    axios
      .post("https://api-castor.herokuapp.com/funcionario", {
        id: 0,
        nome: nome,
        cpf: cpf,
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
      <h2>Novo Funcionário</h2>
      <Form.Group
          controlId="formNomeFuncionario"
          onChange={(nome) => setNome(nome.target.value)}
        >
          <Form.Label>Nome:</Form.Label>
          <Form.Control type="text" placeholder="Nome do funcionário" />
        </Form.Group>
        <Form.Group
          controlId="formCpfFuncionario"
          onChange={(cpf) => setCpf(cpf.target.value)}
        >
          <Form.Label>CPF:</Form.Label>
          <Form.Control type="text" placeholder="CPF do funcionário" />
        </Form.Group>
        <Button onClick={() => novoFuncionario()}>Salvar</Button>
      </div>
    </Container>
  );
};
