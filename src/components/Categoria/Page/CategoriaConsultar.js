import React, { useEffect, useState } from "react";

import { Col, Container, Row } from "react-bootstrap";

import "./Categoria.css";
import api from "../../../service/api";
import MenuLateralCategoria from "../MenuLateralCategoria/MenuLateralCategoria";
import FiltroCategoria from "../FiltroCategoria/FiltroCategoria";
import styled from "styled-components";

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

function CategoriaConsultar() {
  const [categorias, setCategorias] = useState([]);
  const [novo, setNovo] = useState(0);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    async function fetchCategoria() {
      const data = await api.get("/categoria").then((res) => res.data);

      setCategorias(data);
    }
    fetchCategoria();
  }, [novo]);

  return (
    <>
      <Container fluid style={{ minHeight: '100vh'}}>
        <Row>
          <Col md={2}>
            <MenuLateralCategoria />
          </Col>
          <Col md={1}></Col>
          <Col md={8} style={{ marginTop: "1rem" }}>
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
        </Row>
      </Container>
    </>
  );
}

export default CategoriaConsultar;
