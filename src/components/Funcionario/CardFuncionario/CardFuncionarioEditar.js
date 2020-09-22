import React, { useState } from "react";
import axios from "axios";

import "./CardFuncionario.css";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import api from "../../../service/api";

const CardFuncionarioEditar = (props) => {
  const funcionario = props.funcionario;
  const [nome, setNome] = useState();
  const [cpf, setCpf] = useState();

  async function editar(id) {
    api
      .put(
        `/funcionario/${id}`,
        {
          id: funcionario.id,
          nome: nome,
          cpf: cpf,
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
            id="nomeFuncionario"
          />
          <Form.Control
            onChange={(cpf) => setCpf(cpf.target.value)}
            type="text"
            id="cpfFuncionario"
          />
        </Card.Body>
        <Container>
          <Row>
            <div className="Botoes">
              <Button onClick={()=>editar(funcionario.id)}>Salvar</Button>
            </div>
          </Row>
        </Container>
      </Card>
    </>
  );
};

export default CardFuncionarioEditar;
