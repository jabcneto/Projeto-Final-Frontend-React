import React from "react";
import axios from "axios";

import { Button, Card, Container, Row } from "react-bootstrap";

const CardProduto = (props) => {
  const produto = props.produto;
  // const [editar, setEditar] = useState();

  console.log(props);

  async function deletar(id) {
    axios
      .delete(
        `https://api-castor.herokuapp.com/produto/${id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => console.log(res));
    props.setNovo(props.novo + 1);
  }

  return (
    <>
      <Card style={{ width: "18rem", margin: "10px" }}>
        <Card.Body>
          <Card.Title>{produto.nome}</Card.Title>
          <Card.Text>{produto.descricao}</Card.Text>
        </Card.Body>
        <Container>
          <Row>
            <Button>Editar</Button>
            <Button onClick={() => deletar(produto.id)}>Deletar</Button>
          </Row>
        </Container>
      </Card>
    </>
  );
};

export default CardProduto;
