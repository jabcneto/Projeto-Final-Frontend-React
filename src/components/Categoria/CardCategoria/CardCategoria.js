import React from "react";

import "./CardCategoria.css";
import { Card, Container } from "react-bootstrap";

const CardCategoria = (props) => {
  const categoria = props.categoria;

  return (
    <>
      <Card style={{ width: "18rem", margin: "10px" }}>
        <Card.Body>
          <Card.Title>{categoria.nome}</Card.Title>
          <Card.Text>{categoria.descricao}</Card.Text>
        </Card.Body>
        <Container style={{ textAlign: "center", padding: "0 0 10px " }}>
          {props.children}
        </Container>
      </Card>
    </>
  );
};

export default CardCategoria;
