import React, { useEffect, useState } from "react";

import FormCategoria from "../FormCategoria/FormCategoria";
import { Col, Container, Nav, Row } from "react-bootstrap";

import "./Categoria.css";
import { Link } from "react-router-dom";

function CategoriaAdicionar() {
  const [novo, setNovo] = useState(0);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="1">
            <h2 style={{ margin: "10px 0" }}>Categoria</h2>
            <Nav.Link className="flex-column">
              <Nav.Link>
                <Link to={"/categoria/adicionar"}>Adicionar</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={"/categoria"}>Consultar</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={"/categoria/editar"}>Editar</Link>
              </Nav.Link>
            </Nav.Link>
          </Col>
          <Col md="2"></Col>
          <Col md="8">
            <FormCategoria novo={novo} setNovo={setNovo} />
          </Col>
          <Col md="1"></Col>
          <Col md="3"></Col>
          <Col md="7"></Col>
        </Row>
      </Container>
    </>
  );
}

export default CategoriaAdicionar;
