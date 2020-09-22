import React from "react";

import { Button, Card, Col, Container, Row } from "react-bootstrap";
import api from "../../../service/api";

const CardProduto = (props) => {
  const produto = props.produto;

  console.log(props);

  async function deletar(id) {
    api
      .delete(
        `/produto/${id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => console.log(res));
    props.setNovo(props.novo + 1);
  }

  return (
    <>
      <Card>
        <Container>
          <Row>
            <Col>
              <Card.Img
                style={{ width: "300px" }}
                variant="top"
                src={produto.urlImagem}
              />
            </Col>
            <Col>
              <Card.Body>
                <Card.Text>Nome: {produto.nome}</Card.Text>
                <Card.Text>Categoria: {produto.categoria.nome}</Card.Text>
                <Card.Text>Descrição: {produto.descricao}</Card.Text>
                <Card.Text>Quantidade em estoque: {produto.quantidadeEmEstoque}</Card.Text>
                <Card.Text>Data de fabricação: {produto.dataDeFabricacao}</Card.Text>
                <Card.Text>Valor: R${produto.valorUnitario}</Card.Text>
                <Card.Text>Nome do funcionário: {produto.funcionario.nome}</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Button variant="outline-secondary">Editar</Button>
            <Button style={{margin: '0 15px 0 0' }} variant="outline-danger" onClick={() => deletar(produto.id)}>Deletar</Button>
          </Row>
        </Container>
      </Card>
    </>
  );
};

export default CardProduto;
