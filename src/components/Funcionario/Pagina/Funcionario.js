import React, { useEffect, useState } from "react";
import axios from "axios";

import CardFuncionario from "../CardFuncionario/CardFuncionario";
import FormFuncionario from "../FormFuncionario/FormFuncionario";
import { Col, Container, Nav, Row } from "react-bootstrap";

import "./Funcionario.css";
import CardFuncionarioEditar from "../CardFuncionario/CardFuncionarioEditar";

function Funcionario() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [novo, setNovo] = useState(0);
  const [crudFuncionario, setCrudFuncionario] = useState("");

  useEffect(() => {
    async function fetchFuncionario() {
      const data = await axios
        .get("https://api-castor.herokuapp.com/funcionario")
        .then((res) => res.data);
      console.log(data);
      setFuncionarios(data);
    }
    fetchFuncionario();
  }, [novo]);

  useEffect(() => {
    setCrudFuncionario(crudFuncionario);
  }, [crudFuncionario]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="1">
            <h2 style={{ margin: "10px 0" }}>Funcionário</h2>
            <Nav.Link defaultActiveKey="/home" className="flex-column">
              <Nav.Link
                onClick={() =>
                  setCrudFuncionario(
                    <FormFuncionario novo={novo} setNovo={setNovo} />
                  )
                }
              >
                Adicionar
              </Nav.Link>
              <Nav.Link
                onClick={() =>
                  setCrudFuncionario(
                    <Row>
                      {funcionarios.map((funcionario) => {
                        return (
                          <>
                            <CardFuncionario
                              key={funcionario.id}
                              funcionario={funcionario}
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
          <Col md="8">{crudFuncionario}</Col>
          <Col md="1"></Col>
          <Col md="3"></Col>
          <Col md="7"></Col>
        </Row>
      </Container>
    </>
  );
}

export default Funcionario;