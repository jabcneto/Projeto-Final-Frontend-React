import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const H2 = styled.h2`
  color: #343A40;
  font-size: 2.5em;
  padding: 0.5em 0em;
`;

export default (props) => {

  return (
    <>
      <Col md="2">
        <div style={{display: "block", alignItems: "center" , textAlign: "center", justifyContent: "flex-start"}}>
        <H2>Categoria</H2>
            <Link style={{display: "block", marginBottom: '1rem', textAlign: "center", color:'#343A40', fontSize: '1.3rem'}} to={"/categoria/adicionar"}>Adicionar</Link>
            <Link style={{display: "block", marginBottom: '1rem', textAlign: "center", color:'#343A40', fontSize: '1.3rem'}} to={"/categoria"}>Consultar</Link>
            <Link style={{display: "block", marginBottom: '1rem', textAlign: "center", color:'#343A40', fontSize: '1.3rem'}} to={"/categoria/editar"}>Editar</Link>
        </div>
      </Col>
    </>
  );
};
