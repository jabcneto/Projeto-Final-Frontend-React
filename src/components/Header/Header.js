import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/categoria">Categoria</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/produto">Produto</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/funcionario">Funcionário</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/cliente">Cliente</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/">Pedido</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
