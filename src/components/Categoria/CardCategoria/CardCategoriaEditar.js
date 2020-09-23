import React, { useState } from "react";
import axios from "axios";

import "./CardCategoria.css";
import { Button, Card, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const CardCategoriaEditar = (props) => {
  const categoria = props.categoria;

  return (
    <>
      <Card style={{ width: "18rem", margin: "10px" }}>
        <Card.Body>
          <Card.Title>{categoria.nome}</Card.Title>
          <Card.Text>{categoria.descricao}</Card.Text>
        </Card.Body>
        <Container style={{ textAlign: "center", padding: "0 0 10px " }}>
          <Link to={`/categoria/editar/${categoria.id}`}>
            <Button variant="outline-secondary" style={{ margin: "0 0 0 25px" }}>Editar</Button>
          </Link>

          <Link to={`/categoria/deletar/${categoria.id}`}>
            <Button variant="outline-danger" style={{ margin: "0 0 0 25px" }}>
              Deletar
            </Button>
          </Link>
        </Container>
      </Card>
    </>
  );
};

export default CardCategoriaEditar;
