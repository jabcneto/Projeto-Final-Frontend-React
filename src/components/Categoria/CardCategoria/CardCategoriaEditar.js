import React, { useState } from "react";
import axios from "axios";

import "./CardCategoria.css";
import { Button, Card, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import api from "../../../service/api";

const CardCategoriaEditar = (props) => {
  const categoria = props.categoria;
  const [nome, setNome] = useState();
  const [descricao, setDescricao] = useState();

  async function editar(id) {
    api
      .put(`/categoria/${id}`, {
        id: categoria.id,
        nome: nome,
        descricao: descricao,
      })
      .then((res) => console.log(res));
  }
  async function deletar(id) {
    api.delete(`/categoria/${id}`).then((res) => console.log(res));
  }

  return (
    <>
      <Card style={{ width: "18rem", margin: "10px" }}>
        <Card.Body>
          <Card.Title>{categoria.nome}</Card.Title>
          <Card.Text>{categoria.descricao}</Card.Text>
        </Card.Body>
        <Container style={{textAlign: 'center', padding:'0 0 10px '}}>
          <Link to={`/categoria/editar/${categoria.id}`}>
            <Button variant="secondary">Editar</Button>
          </Link>
          <Button style={{margin: '0 0 0 25px' }} onClick={() => deletar(categoria.id)}>Deletar</Button>
        </Container>
      </Card>
    </>
  );
};

export default CardCategoriaEditar;
