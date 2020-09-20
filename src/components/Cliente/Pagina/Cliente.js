import React, { useEffect, useState } from "react";
import axios from "axios";

import CardCliente from "../CardCliente/CardCliente";
import FormCliente from "../FormCliente/FormCliente";
import { Col, Container, Nav, Row } from "react-bootstrap";

import "./Cliente.css";
import CardClienteEditar from "../CardCliente/CardClienteEditar";

function Cliente() {
    const [clientes, setClientes] = useState([]);
    const [novo, setNovo] = useState(0);
    const [crudCliente, setCrudCliente] = useState("");
  
    useEffect(() => {
      async function fetchCliente() {
        const data = await axios
          .get("https://api-castor.herokuapp.com/cliente")
          .then((res) => res.data);
  
        setClientes(data);
      }
      fetchCliente();
    }, [novo]);
  
    useEffect(() => {
      setCrudCliente(crudCliente);
    }, [crudCliente]);
  
    return (
      <>
        <Container fluid>
          <Row>
            <Col md="1">
              <h2 style={{ margin: "10px 0" }}>Cliente</h2>
              <Nav.Link defaultActiveKey="/home" className="flex-column">
                <Nav.Link
                  onClick={() =>
                    setCrudCliente(
                      <FormCliente novo={novo} setNovo={setNovo} />
                    )
                  }
                >
                  Adicionar
                </Nav.Link>
                <Nav.Link
                  onClick={() =>
                    setCrudCliente(
                      <Row>
                        {clientes.map((cliente) => {
                          return (
                            <>
                              <CardCliente
                                key={cliente.id}
                                cliente={cliente}
                                novo={novo}
                                setNovo={setNovo}
                              />
  
                              <CardClienteEditar
                                key={cliente.id}
                                cliente={cliente}
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
            <Col md="8">{crudCliente}</Col>
            <Col md="1"></Col>
            <Col md="3"></Col>
            <Col md="7"></Col>
          </Row>
        </Container>
      </>
    );
  }
  
  export default Cliente;