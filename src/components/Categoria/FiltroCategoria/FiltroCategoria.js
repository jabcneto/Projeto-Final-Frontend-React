import React from "react";
import { Card } from "react-bootstrap";

export default ({ categorias, filterText }) => {
  const categoriasList = categorias
    .filter((categoria) => {
      return (
        categoria.nome.toLowerCase().startsWith(filterText.toLowerCase())
      );
    })
    .map((categoria) => {
      return (
        <Card style={{ width: "18rem", margin: "10px" }}>
          <Card.Body>
            <Card.Title>{categoria.nome}</Card.Title>
            <Card.Text>{categoria.descricao}</Card.Text>
          </Card.Body>
        </Card>
      );
    });
  return <>{categoriasList}</>;
};
