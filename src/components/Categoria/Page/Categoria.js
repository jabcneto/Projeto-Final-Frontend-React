import React, { useEffect, useState } from "react";

import { Col, Container, Form, Nav, Row } from "react-bootstrap";

import "./Categoria.css";
import api from "../../../service/api";
import { Link } from "react-router-dom";
import FiltroCategoria from "../FiltroCategoria/FiltroCategoria";
import styled from "styled-components";

function CategoriaConsultar() {
  const [categorias, setCategorias] = useState([]);
  const [novo, setNovo] = useState(0);
  const [crudCategoria, setCrudCategoria] = useState("");
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    async function fetchCategoria() {
      const data = await api.get("/categoria").then((res) => res.data);

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
          <Col md="8" style={{justifyContent: 'space-between'}}>
            <Row>
              <Input
                onChange={(filterText) =>
                  setFilterText(filterText.target.value)
                }
                placeholder="Digite o nome da categoria"
              />
              <FiltroCategoria
                categorias={categorias}
                filterText={filterText}
              ></FiltroCategoria>
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

const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))`
  color: black;
  font-size: 1.3em;
  width: 87%;
  border: 1px solid black;
  border-radius: 10px;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

export default CategoriaConsultar;
