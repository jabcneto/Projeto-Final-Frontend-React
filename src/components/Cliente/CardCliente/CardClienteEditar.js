import React, { useState } from "react";
import axios from "axios";

import "./CardCliente.css";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import api from "../../../service/api";

const CardClienteEditar = (props) => {
  const cliente = props.cliente;
  const [nome, setNome] = useState();
  const [descricao, setDescricao] = useState();

  async function editar(id) {
    api
      .put(
        `/cliente/${id}`,
        {
          id: cliente.id,
          nome: nome,
          descricao: descricao,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => console.log(res));
  }

  return (
    <>
      <Card style={{ width: "18rem", margin: "10px" }}>
        <Card.Body>
          <Form.Control
            onChange={(nome) => setNome(nome.target.value)}
            type="text"
            id="nomeCliente"
          />
          <Form.Control
            onChange={(descricao) => setDescricao(descricao.target.value)}
            type="text"
            id="descricaoCliente"
          />
        </Card.Body>
        <Container>
          <Row>
            <div className="Botoes">
              <Button onClick={()=>editar(cliente.id)}>Salvar</Button>
            </div>
          </Row>
        </Container>
      </Card>
    </>
  );
};

export default CardClienteEditar;
