import React, { useEffect, useState } from "react";
import axios from "axios";

import FormCategoria from "../FormCategoria/FormCategoria";
import "./Categoria.css";
import { Container, Nav} from "react-bootstrap";

function Categoria() {
  const [categorias, setCategorias] = useState([]);
  const [novo, setNovo] = useState(0);

  useEffect(() => {
    async function fetchCategoria() {
      const data = await axios
        .get("https://api-castor.herokuapp.com/categoria")
        .then((res) => res.data);

      setCategorias(data);
    }
    fetchCategoria();
  }, [novo]);

  console.log(categorias);


  if(true){
    return (
      <Container sm={4}>
        <Nav defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link> Adicionar </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link >Consultar</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link >Editar</Nav.Link>
          </Nav.Item>
        </Nav>
  
        <Container className="">
          <div>
            <h1>Nova Categoria</h1>
            <FormCategoria novo={novo} setNovo={setNovo} />
          </div>
        </Container>
      </Container>
    );
  }
}

export default Categoria;
