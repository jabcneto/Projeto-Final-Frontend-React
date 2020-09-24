import React, { useEffect, useState } from "react";

import CardCategoriaEditar from "../CardCategoria/CardCategoriaEditar";
import { Col, Container, Nav, Row } from "react-bootstrap";

import "./Categoria.css";
import api from "../../../service/api";
import MenuLateralCategoria from "../MenuLateralCategoria/MenuLateralCategoria";

function CategoriaEditar() {
  const [categorias, setCategorias] = useState([]);
  const [novo, setNovo] = useState(0);

  useEffect(() => {
    async function fetchCategoria() {
      const data = await api.get("/categoria").then((res) => res.data);

      setCategorias(data);
    }
    fetchCategoria();
  }, [novo]);

  return (
    <>
      <Container fluid style={{ minHeight: "100vh" }}>
        <Row>
          <Col md={2}>
            <MenuLateralCategoria />
          </Col>
          <Col md={1}></Col>
          <Col md={8} style={{ marginTop: "1.5rem" }}>
            <Row>
              {categorias.map((categoria) => {
                return (
                  <>
                    <CardCategoriaEditar
                      key={categoria.id}
                      categoria={categoria}
                      novo={novo}
                      setNovo={setNovo}
                    />
                  </>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CategoriaEditar;
