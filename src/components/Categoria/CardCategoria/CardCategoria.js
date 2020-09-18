import React from "react";
import axios from "axios";

import "./CardCategoria.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const CardCategoria = (props) => {
  const categoria = props.categoria;
  async function deletar(id) {
    axios
      .delete(`https://api-castor.herokuapp.com/categoria/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => console.log(res));
  }

  return (
    <>
      <Card style={{ width: "18rem", margin: "10px" }}>
        <Card.Body>
          <Card.Title>{categoria.nome}</Card.Title>
          <Card.Text>{categoria.descricao}</Card.Text>
        </Card.Body>
        <Container>
          <Row>
            <div className="Botoes">
              <Button href="#">Editar</Button>
              <Button href="#">Deletar</Button>
            </div>
          </Row>
        </Container>
      </Card>
    </>
  );
};

export default CardCategoria;
