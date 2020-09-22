import React from "react";

import "./CardFuncionario.css";
import { Button, Card, Container, Row } from "react-bootstrap";
import api from "../../../service/api";

const CardFuncionario = (props) => {
  const funcionario = props.funcionario;

  async function deletar(id) {
    api
      .delete(
        `/funcionario/${id}`,
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
    console.log("clicou");
  }

  return (
    <>
      <Card style={{ width: "18rem", margin: "10px" }}>
        <Card.Body>
          <Card.Title>{funcionario.nome}</Card.Title>
          <Card.Text>{funcionario.cpf}</Card.Text>
        </Card.Body>
        <Container>
          <Row>
            <Button>Editar</Button>
            <Button onClick={() => deletar(funcionario.id)}>Deletar</Button>
          </Row>
        </Container>
      </Card>
    </>
  );
};

export default CardFuncionario;
