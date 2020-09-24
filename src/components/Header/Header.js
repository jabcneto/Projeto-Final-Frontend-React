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
          <Link className='link'>Home</Link>

          <Link className='link' to="/categoria">Categoria</Link>

          <Link className='link'>Produto</Link>

          <Link className='link'>Funcionário</Link>

          <Link className='link'>Cliente</Link>

          <Link className='link'>Pedido</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
