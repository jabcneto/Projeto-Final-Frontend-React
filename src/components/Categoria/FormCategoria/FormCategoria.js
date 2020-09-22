import React, { useState } from "react";
import { Container, Form, FormControl, InputGroup } from "react-bootstrap";
import styled, { css } from "styled-components";
import "./FormCategoria.css";
import AlertCadastro from "../../AlertCadastro/AlertCadastro";
import api from "../../../service/api";


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

export default (props) => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [alert, setAlert] = useState("");

  async function novaCategoria(event) {
    setAlert("");
    console.log(event)
    api
      .post("/categoria", {
        nome: nome,
        descricao: descricao,
      })
      .then((res) => {
        props.setNovo(props.novo + 1);
        console.log(res);

        if (res.status !== 201) {
          setAlert(
            <AlertCadastro
              titulo={"Erro no cadastro"}
              mensagem={`Erro no cadastro: status-${res.status}`}
              cor="danger"
            />
          );
        } else {
          setAlert(
            <AlertCadastro
              titulo={"Categoria cadastrada com sucesso"}
              mensagem={`A categoria ${nome} foi cadastrada com sucesso.`}
            />
          );
        }
      });
  }

  return (
    <Container md="auto">
      <div>
        <h2>Nova Categoria</h2>
        <Form>
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

          <Button  type="submit" onClick={(event)=>{
            event.preventDefault()
            novaCategoria(event)
            }}>
            Salvar
          </Button>
          </Form>
        {alert}
      </div>
    </Container>
  );
};
