import React, { useState } from "react";

import { Container, Form } from "react-bootstrap";
import styled, { css } from "styled-components";
import api from "../../../service/api";

export default (props) => {
  const [nome, setNome] = useState("");
  const [nomeCategoria, setNomeCategoria] = useState("");
  const [descricao, setDescricao] = useState("");
  const [qtdEstoque, setQtdEstoque] = useState("");
  const [dataFabricacao, setDataFabricacao] = useState("");
  const [valor, setValor] = useState("");
  const [nomeFuncionario, setNomeFuncionario] = useState("");

  async function novoProduto() {
    api
      .post("/produto", {
        id: 0,
        nome: nome,
        nomeCategoria: nomeCategoria,
        descricao: descricao,
        qtdEstoque: qtdEstoque,
        dataFabricacao: dataFabricacao,
        valor: valor,
        nomeFuncionario: nomeFuncionario,
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
        <h2>Novo Produto</h2>
        <Form.Group
          controlId="formNomeProduto"
          onChange={(nome) => setNome(nome.target.value)}
        >
          <Form.Label>Nome:</Form.Label>
          <Form.Control type="text" placeholder="Nome do produto" />
        </Form.Group>

        <Form.Group
          controlId="formNomeCategoria"
          onChange={(categoria) => setNomeCategoria(categoria.target.value)}
        >
          <Form.Label>Categoria:</Form.Label>
          <Form.Control type="text" placeholder="Categoria do produto" />
        </Form.Group>

        <Form.Group
          controlId="formDescricaoProduto"
          onChange={(descricao) => setDescricao(descricao.target.value)}
        >
          <Form.Label>Descrição:</Form.Label>
          <Form.Control type="text" placeholder="Descrição do produto" />
        </Form.Group>

        <Form.Group
          controlId="formQtdEstoque"
          onChange={(qtdEstoque) => setQtdEstoque(qtdEstoque.target.value)}
        >
          <Form.Label>Quantidade em Estoque:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Quantidade em estoque do produto"
          />
        </Form.Group>

        <Form.Group
          controlId="formDataFabricacao"
          onChange={(dataFabricacao) =>
            setDataFabricacao(dataFabricacao.target.value)
          }
        >
          <Form.Label>Data de fabricação:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Data de fabricação do produto"
          />
        </Form.Group>

        <Form.Group
          controlId="formValor"
          onChange={(valor) => setValor(valor.target.value)}
        >
          <Form.Label>Valor (R$):</Form.Label>
          <Form.Control type="text" placeholder="Valor do produto" />
        </Form.Group>

        <Form.Group
          controlId="formNomeFuncionario"
          onChange={(nomeFuncionario) =>
            setNomeFuncionario(nomeFuncionario.target.value)
          }
        >
          <Form.Label>Nome do funcionário:</Form.Label>
          <Form.Control type="text" placeholder="Nome do funcionário" />
        </Form.Group>

        <h2>
          Adicione foto <span>📷</span>
        </h2>
        <Button onClick={() => novoProduto()}>Salvar</Button>
      </div>
    </Container>
  );
};
