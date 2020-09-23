import React from "react";

import "./CardCategoria.css";
import { Card } from "react-bootstrap";

const CardCategoria = (props) => {
  const categoria = props.categoria;

  return (
    <>
      <Card style={{ width: "18rem", margin: "10px" }}>
        <Card.Body>
          <Card.Title>{categoria.nome}</Card.Title>
          <Card.Text>{categoria.descricao}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardCategoria;
