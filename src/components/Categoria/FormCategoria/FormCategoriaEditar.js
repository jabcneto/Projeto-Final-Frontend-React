import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import styled, { css } from "styled-components";
import "./FormCategoria.css";
import api from "../../../service/api";
import { Link, Redirect, useParams } from "react-router-dom";
import MenuLateralCategoria from "../MenuLateralCategoria/MenuLateralCategoria";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #343a40;
  color: #343a40;
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

export default () => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [redirect, setRedirect] = useState("");

  const { id } = useParams();

  useEffect(() => {
    async function buscarPorId(id) {
      const data = await api.get(`/categoria/${id}`).then((res) => res.data);
      console.log(data);
      setNome(data.nome);
      setDescricao(data.descricao);
      document.getElementById("formNomeCategoria").value = data.nome;
      document.getElementById("formDescricaoCategoria").value = data.descricao;
    }

    buscarPorId(id);
  }, []);

  async function editar(id) {
    await api
      .put(`/categoria/${id}`, {
        id,
        nome,
        descricao,
      })
      .then((res) => {
        alert(`Categoria editada com sucesso!`);
        setRedirect(<Redirect to={`/categoria/editar`} />);
      });
  }

  return (
    <Container fluid md="auto" style={{ minHeight: "75vh" }}>
      <Row>
        <Col md={2}>
          <MenuLateralCategoria />
        </Col>
        <Col md={1}></Col>
        <Col style={{ marginTop: "1.6rem" }} md={8}>
          <form>
            <h2>Editar Categoria:</h2>
            <Form.Group
              controlId="formNomeCategoria"
              onChange={(nome) => {
                setNome(nome.target.value);
              }}
            >
              <Form.Label>Nome:</Form.Label>
              <Form.Control type="text" placeholder="nome da categoria" />
            </Form.Group>

            <Form.Group
              controlId="formDescricaoCategoria"
              onChange={(descricao) => setDescricao(descricao.target.value)}
            >
              <Form.Label>Descrição:</Form.Label>
              <Form.Control type="text" placeholder="descricao da categoria" />
            </Form.Group>
          </form>
          <Button
            onClick={() => {
              console.log(nome, descricao);
              editar(id);
            }}
          >
            Salvar
          </Button>
          <Link to='/categoria/editar'>
            <Button>Cancelar</Button>
          </Link>
        </Col>
        {redirect}
      </Row>
    </Container>
  );
};
