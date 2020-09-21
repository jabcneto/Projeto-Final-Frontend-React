import React, { useState } from "react";

import { Container, FormControl, InputGroup } from "react-bootstrap";
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
        <InputGroup
          className="mb-3"
          onChange={(nome) => setNome(nome.target.value)}
        >
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              Nome
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>

        <InputGroup
          className="mb-3"
          onChange={(nomeCategoria) => setNomeCategoria(nomeCategoria.target.value)}
        >
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              Categoria
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

        <InputGroup
          className="mb-3"
          onChange={(qtdEstoque) => setQtdEstoque(qtdEstoque.target.value)}
        >
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              Quantidade em Estoque
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>

        <InputGroup
          className="mb-3"
          onChange={(dataFabricacao) => setDataFabricacao(dataFabricacao.target.value)}
        >
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              Data de Fabricação
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>

        <InputGroup
          className="mb-3"
          onChange={(valor) => setValor(valor.target.value)}
        >
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              Valor
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>

        <InputGroup
          className="mb-3"
          onChange={(nomeFuncionario) => setNomeFuncionario(nomeFuncionario.target.value)}
        >
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              Nome do Funcionário
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <Button onClick={() => novoProduto()}>Salvar</Button>
      </div>
    </Container>
  );
};
