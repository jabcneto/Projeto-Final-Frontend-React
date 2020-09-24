import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./FormCategoria.css";
import api from "../../../service/api";
import { Link, useParams, Redirect } from "react-router-dom";
import MenuLateralCategoria from "../MenuLateralCategoria/MenuLateralCategoria";
import CardCategoria from "../CardCategoria/CardCategoria";
import styled from "styled-components";

const ButtonConfirmar = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 1px solid #6cdc00;
  color: #6cdc00;
  float: right;
  margin: 0 1em;
  padding: 0.39em 1em;
`;

export default () => {
  const { id } = useParams();
  const [categoria, setCategoria] = useState([]);
  const [redirect, setRedirect] = useState("");

  useEffect(() => {
    async function buscarPorId(id) {
      const data = await api.get(`/categoria/${id}`).then((res) => res.data);
      setCategoria(data);
    }
    buscarPorId(id);
  }, []);

  async function deletar(id) {
    await api.delete(`/categoria/${id}`).then((res) => {
      console.log(res);
      alert(`Categoria Removida com sucesso!`);
      setRedirect(<Redirect to={`/categoria/editar`} />);
    });
  }

  return (
    <Container fluid md="auto" style={{ minHeight: '100vh' }}>
      <Row>
        <Col md={2}>
          <MenuLateralCategoria />
        </Col>
        <Col md={1}></Col>
        <Col style={{ marginTop: "1.6rem" }} md={8}>
          <CardCategoria categoria={categoria}>
            <ButtonConfirmar className={'btnConfirmar'} onClick={() => deletar(id)} variant="outline-danger">
              Confirmar
            </ButtonConfirmar>
            <Link to={`/categoria/editar`}>
              <Button
                variant="outline-secondary"
                style={{ margin: "0 0 0 25px" }}
              >
                Cancelar
              </Button>
            </Link>
          </CardCategoria>
        </Col>
      </Row>
      {redirect}
    </Container>
  );
};
