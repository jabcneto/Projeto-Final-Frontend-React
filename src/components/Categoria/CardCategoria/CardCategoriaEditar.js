import React, { useState } from "react";

import "./CardCategoria.css";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "../../../service/api";

const CardCategoriaEditar = (props) => {
  const categoria = props.categoria;
  const [nome, setNome] = useState();
  const [descricao, setDescricao] = useState();

  async function deletar(id) {
    api.delete(`/categoria/${id}`).then((res) => console.log(res));
  }

  return (
    <>
      <Card style={{ width: "18rem", margin: "10px", borderColor: "#343A40" }}>
        <Card.Body>
          <Card.Title>{categoria.nome}</Card.Title>
          <Card.Text>{categoria.descricao}</Card.Text>
        </Card.Body>
        <Container style={{ textAlign: "center", padding: "0 0 10px " }}>
          <Link to={`/categoria/editar/${categoria.id}`}>
            <Button variant="outline-secondary">Editar</Button>
          </Link>
          <Button
            variant="outline-danger"
            style={{ margin: "0 0 0 25px" }}
            onClick={() => deletar(categoria.id)}
          >
            Deletar
          </Button>
        </Container>
      </Card>
    </>
  );
};

export default CardCategoriaEditar;
