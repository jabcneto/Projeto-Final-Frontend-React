import React from "react";
import axios from "axios";

import { Button, Card, Col, Container, Row } from "react-bootstrap";
import api from "../../../service/api";

const CardProduto = (props) => {
  const produto = props.produto;
  // const [editar, setEditar] = useState();

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
                <Card.Title>{produto.nome}</Card.Title>
                <Card.Text>{produto.descricao}</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Button>Editar</Button>
            <Button onClick={() => deletar(produto.id)}>Deletar</Button>
          </Row>
        </Container>
      </Card>
    </>
  );
};

export default CardProduto;
