import React, { useState } from "react";
import axios from "axios";

import "./CardProduto.css";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import api from "../../../service/api";

const CardProdutoEditar = (props) => {
  const categoria = props.categoria;
  const [nome, setNome] = useState("");
  const [nomeCategoria, setNomeCategoria] = useState("");
  const [descricao, setDescricao] = useState("");
  const [qtdEstoque, setQtdEstoque] = useState("");
  const [dataFabricacao, setDataFabricacao] = useState("");
  const [valor, setValor] = useState("");
  const [nomeFuncionario, setNomeFuncionario] = useState("");
    
  async function editar(id) {
    api
      .put(
        `/categoria/${id}`,
        {
          id: categoria.id,
          nome: nome,
          nomeCategoria: nomeCategoria,        
          descricao: descricao,
          qtdEstoque: qtdEstoque,
          dataFabricacao: dataFabricacao,
          valor: valor,
          nomeFuncionario: nomeFuncionario,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => console.log(res));
  }

  return (
    <>
      <Card style={{ width: "18rem", margin: "10px" }}>
        <Card.Body>
          <Form.Control
            onChange={(nome) => setNome(nome.target.value)}
            type="text"
          />
          <Form.Control
            onChange={(nomeCategoria) => setNomeCategoria(nomeCategoria.target.value)}
            type="text"
          />
          <Form.Control
            onChange={(descricao) => setDescricao(descricao.target.value)}
            type="text"
          />
          <Form.Control
            onChange={(qtdEstoque) => setQtdEstoque(qtdEstoque.target.value)}
            type="text"
          />
          <Form.Control
            onChange={(dataFabricacao) => setDataFabricacao(dataFabricacao.target.value)}
            type="text"
          />
          <Form.Control
            onChange={(valor) => setValor(valor.target.value)}
            type="text"
          />
          <Form.Control
            onChange={(nomeFuncionario) => setNomeFuncionario(nomeFuncionario.target.value)}
            type="text"
          />
        </Card.Body>
        <Container>
          <Row>
            <div className="Botoes">
              <Button onClick={()=>editar(produto.id)}>Salvar</Button>
            </div>
          </Row>
        </Container>
      </Card>
    </>
  );
};

export default CardProdutoEditar;
