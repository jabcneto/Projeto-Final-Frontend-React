import React, { useEffect, useState } from "react";
import axios from "axios";

import CardProduto from "../CardProduto/CardProduto";
import FormProduto from "../FormProduto/FormProduto";
import { Col, Container, Nav, Row } from "react-bootstrap";

import "./Produto.css";

function Produto() {
  const [produtos, setProdutos] = useState([]);
  const [novo, setNovo] = useState(0);
  const [crudProduto, setCrudProduto] = useState("");

  useEffect(() => {
    async function fetchProduto() {
      const data = await axios
        .get("https://api-castor.herokuapp.com/produto")
        .then((res) => res.data);
      setProdutos(data);
      console.log(data);
    }
    fetchProduto();
  }, [novo]);

  useEffect(() => {
    setCrudProduto(crudProduto);
  }, [crudProduto]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="1">
            <h2>Produto</h2>
            <Nav.Link defaultActiveKey="/home" className="flex-column">
              <Nav.Link
                onClick={() =>
                  setCrudProduto(<FormProduto novo={novo} setNovo={setNovo} />)
                }
              >
                Adicionar
              </Nav.Link>
              <Nav.Link
                onClick={() =>
                  setCrudProduto(
                    <>
                      {produtos.map((produto) => {
                        return (
                          <>
                            <CardProduto
                              key={produto.id}
                              produto={produto}
                              novo={novo}
                              setNovo={setNovo}
                            />
                          </>
                        );
                      })}
                    </>
                  )
                }
              >
                Consultar
              </Nav.Link>
              <Nav.Link>Editar</Nav.Link>
            </Nav.Link>
          </Col>
          <Col md="2"></Col>
          <Col md="8">{crudProduto}</Col>
          <Col md="1"></Col>
          <Col md="3"></Col>
          <Col md="7"></Col>
        </Row>
      </Container>
    </>
  );
}

export default Produto;
