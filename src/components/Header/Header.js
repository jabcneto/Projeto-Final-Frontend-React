import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css'

export default () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
        <Nav className="mr-auto">
          <Link className='link' to="/">Home</Link>

          <Link className='link' to="/categoria">Categoria</Link>

          <Link className='link' to="/produto">Produto</Link>

          <Link className='link' to="/funcionario">Funcionário</Link>

          <Link className='link' to="/cliente">Cliente</Link>

          <Link className='link' to="/">Pedido</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
