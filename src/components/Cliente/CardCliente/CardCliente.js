import React, { useState } from "react";
import axios from "axios";

import "./CardCliente.css";
import { Button, Card, Container, Row } from "react-bootstrap";

const CardCliente = (props) => {
    const cliente = props.cliente;
    const [editar, setEditar] = useState();

    async function deletar(id) {
        axios
        .delete(
        `https://api-castor.herokuapp.com/cliente/${id}`,
        {},
        {headers: {
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