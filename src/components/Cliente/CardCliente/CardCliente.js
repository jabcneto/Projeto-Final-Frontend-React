import React, { useState } from "react";

import "./CardCliente.css";
import { Button, Card, Container, Row } from "react-bootstrap";
import api from "../../../service/api";

const CardCliente = (props) => {
    const cliente = props.cliente;

    async function deletar(id) {
        api
        .delete(
        `/cliente/${id}`,
        {},
        {headers: {
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
      <Card style={{ width: "18rem", margin: "10px" }}>
        <Card.Body>
          <Card.Title>{cliente.nome}</Card.Title>
          <Card.Text>{cliente.descricao}</Card.Text>
        </Card.Body>
        <Container>
          <Row>
            <Button>Editar</Button>
            <Button onClick={() => deletar(cliente.id)}>Deletar</Button>
          </Row>
        </Container>
      </Card>
    </>
  );
};

export default CardCliente;