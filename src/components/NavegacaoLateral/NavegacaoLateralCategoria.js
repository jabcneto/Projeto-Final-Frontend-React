import React from "react";
import { Col, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardCategoria from "../Categoria/CardCategoria/CardCategoria";
import FormCategoria from "../Categoria/FormCategoria/FormCategoria";
export default ({ novo, setNovo, categorias, setCrudCategoria }) => {
  return (
    <Col md="1">
      <h2 style={{ margin: "10px 0" }}>Categoria</h2>
      <Nav.Link className="flex-column">
        <Nav.Link
          onClick={() =>
            setCrudCategoria(<FormCategoria novo={novo} setNovo={setNovo} />)
          }
        >
          Adicionar
        </Nav.Link>
        <Nav.Link
          onClick={() =>
            setCrudCategoria(
              <>
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
              </>
            )
          }
        >
          Consultar
        </Nav.Link>
        <Nav.Link>
          <Link to={"/categoria/editar"}>Editar</Link>
        </Nav.Link>
      </Nav.Link>
    </Col>
  );
};
