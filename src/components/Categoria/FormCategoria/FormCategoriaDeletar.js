import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./FormCategoria.css";
import api from "../../../service/api";
import { Link, useParams, Redirect } from "react-router-dom";
import MenuLateralCategoria from "../MenuLateralCategoria/MenuLateralCategoria";
import CardCategoria from "../CardCategoria/CardCategoria";

export default () => {
  const { id } = useParams();
  const [categoria, setCategoria] = useState([]);

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
      return <Redirect to={`/categoria/editar`} />;
    });
  }

  return (
    <Container fluid md="auto">
      <Row>
        <Col md={2}>
          <MenuLateralCategoria />
        </Col>
        <Col md={1}></Col>
        <Col style={{ marginTop: "1.6rem" }} md={8}>
          <CardCategoria categoria={categoria}>
            <Button onClick={() => deletar(id)} variant="outline-danger">
              Confirmar
            </Button>
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
    </Container>
  );
};
