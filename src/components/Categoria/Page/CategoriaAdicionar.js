import React, { useState } from "react";

import FormCategoria from "../FormCategoria/FormCategoria";
import { Col, Container, Row } from "react-bootstrap";

import "./Categoria.css";
import MenuLateralCategoria from "../MenuLateralCategoria/MenuLateralCategoria";

function CategoriaAdicionar() {
  const [novo, setNovo] = useState(0);
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={2}>
            <MenuLateralCategoria />
          </Col>
          <Col md={1}></Col>
          <Col md={8} style={{ margin: "1.5rem 0" }}>
            <FormCategoria novo={novo} setNovo={setNovo} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CategoriaAdicionar;
