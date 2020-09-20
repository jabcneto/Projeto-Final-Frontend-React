import React, { useState } from "react";
import axios from "axios";

import "./CardCategoria.css";
import { Button, Card, Container, Form, Row } from "react-bootstrap";

const CardCategoriaEditar = (props) => {
  const categoria = props.categoria;
  const [nome, setNome] = useState();
  const [descricao, setDescricao] = useState();

  async function editar(id) {
    axios
      .put(
        `https://api-castor.herokuapp.com/categoria/${id}`,
        {
          id: categoria.id,
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
            id="nomeCategoria"
          />
          <Form.Control
            onChange={(descricao) => setDescricao(descricao.target.value)}
            type="text"
            id="descricaoCategoria"
          />
        </Card.Body>
        <Container>
          <Row>
            <div className="Botoes">
              <Button onClick={()=>editar(categoria.id)}>Salvar</Button>
            </div>
          </Row>
        </Container>
      </Card>
    </>
  );
};

export default CardCategoriaEditar;
