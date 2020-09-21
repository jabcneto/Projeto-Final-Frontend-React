import React, { useEffect, useState } from "react";

import CardCategoria from "../CardCategoria/CardCategoria";
import FormCategoria from "../FormCategoria/FormCategoria";
import { Col, Container, Nav, Row } from "react-bootstrap";

import "./Categoria.css";
import CardCategoriaEditar from "../CardCategoria/CardCategoriaEditar";
import api from "../../../service/api";

function Categoria() {
  const [categorias, setCategorias] = useState([]);
  const [novo, setNovo] = useState(0);
  const [crudCategoria, setCrudCategoria] = useState("");

  useEffect(() => {
    async function fetchCategoria() {
      const data = await api
        .get("/categoria")
        .then((res) => res.data);

      setCategorias(data);
    }
    fetchCategoria();
  }, [novo]);

  useEffect(() => {
    setCrudCategoria(crudCategoria);
  }, [crudCategoria]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="1">
            <h2 style={{ margin: "10px 0" }}>Categoria</h2>
            <Nav.Link className="flex-column">
              <Nav.Link
                onClick={() =>
                  setCrudCategoria(
                    <FormCategoria novo={novo} setNovo={setNovo} />
                  )
                }
              >
                Adicionar
              </Nav.Link>
              <Nav.Link
                onClick={() =>
                  setCrudCategoria(
                    <Row>
                      {categorias.map((categoria) => {
                        return (
                          <>
                            <CardCategoria
                              key={categoria.id}
                              categoria={categoria}
                              novo={novo}
                              setNovo={setNovo}
                            />
                          </>
                        );
                      })}
                    </Row>
                  )
                }
              >
                
                Consultar
              </Nav.Link>
              <Nav.Link eventKey="link-2">Editar</Nav.Link>
            </Nav.Link>
          </Col>
          <Col md="2"></Col>
          <Col md="8">{crudCategoria}</Col>
          <Col md="1"></Col>
          <Col md="3"></Col>
          <Col md="7"></Col>
        </Row>
      </Container>
    </>
  );
}

export default Categoria;
