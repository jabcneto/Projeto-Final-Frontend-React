import React, { useEffect, useState } from "react";

import FormCategoria from "../FormCategoria/FormCategoria";
import CardCategoriaEditar from "../CardCategoria/CardCategoriaEditar";
import { Col, Container, Form, Nav, Row } from "react-bootstrap";

import "./Categoria.css";
import api from "../../../service/api";
import { Link } from "react-router-dom";

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
          <Col md="1"></Col>
          <Col md="3"></Col>
          <Col md="7"></Col>
        </Row>
      </Container>
    </>
  );
}

export default CategoriaEditar;
