import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import styled, { css } from "styled-components";
import "./FormCategoria.css";
import api from "../../../service/api";
import { useParams } from "react-router-dom";
import MenuLateralCategoria from "../MenuLateralCategoria/MenuLateralCategoria";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #507bff;
  color: #507bff;
  float: right;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

export default (props) => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    async function buscarPorId(id) {
      const data = api.get(`/categoria/${id}`).then((res) => console.log(res));
      setCategoria(data);
    }
    buscarPorId(id);
  }, []);

  async function editar(id) {
    console.log("EU sou muito BOM!");
    await api
      .put(`/categoria/${id}`, {
        id,
        nome,
        descricao,
      })
      .then((res) => {
        console.log(res);
        alert(`Categoria editada com sucesso!`);
      });
  }

  return (
    <Container fluid md="auto">
      <Row>
        <Col md={2}>
          <MenuLateralCategoria />
        </Col>
        <Col md={1}></Col>
        <Col md={8}>
          <form>
            <h2>Editar Categoria: id-{id}</h2>
            <Form.Group
              controlId="formNomeCategoria"
              onChange={(nome) => {
                setNome(nome.target.value);
              }}
            >
              <Form.Label>Nome:</Form.Label>
              <Form.Control
                type="text"
                placeholder="nome da categoria"
                value={categoria.nome}
              />
            </Form.Group>
            <Form.Group
              controlId="formDescricaoCategoria"
              onChange={(descricao) => setDescricao(descricao.target.value)}
            >
              <Form.Label>Descrição:</Form.Label>
              <Form.Control type="text" placeholder="nome da categoria" />
            </Form.Group>
          </form>
          <Button onClick={() => editar(id)}>Salvar</Button>
        </Col>
      </Row>
    </Container>
  );
};
