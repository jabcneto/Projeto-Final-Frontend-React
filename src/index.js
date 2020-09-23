import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Cliente from "./components/Cliente/Pagina/Cliente";
import Funcionario from "./components/Funcionario/Pagina/Funcionario";
import * as serviceWorker from "./serviceWorker";
import "./styles.css";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Categoria from "./components/Categoria/Page/Categoria";
import Produto from "./components/Produto/Page/Produto";
import CategoriaEditar from "./components/Categoria/Page/CategoriaEditar";
import CategoriaAdicionar from "./components/Categoria/Page/CategoriaAdicionar";
import FormCategoriaEditar from "./components/Categoria/FormCategoria/FormCategoriaEditar";
import CategoriaConsultar from "./components/Categoria/Page/CategoriaConsultar";

import styled, { css } from "styled-components";
import { Nav, Navbar } from "react-bootstrap";

const Footer = styled.div`
  margin: 2em 0 0;
  background: #343a40;
  color: #fefefe;
  border-radius: 3px;
  width: 100%;
  padding: 1.24em;
  position: relative;
  bottom: 0px;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

ReactDOM.render(
  <>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/categoria" exact={true} component={Categoria} />
        <Route
          path="/categoria/consultar"
          exact={true}
          component={CategoriaConsultar}
        />
        <Route
          path="/categoria/adicionar"
          exact={true}
          component={CategoriaAdicionar}
        />
        <Route
          path="/categoria/editar"
          exact={true}
          component={CategoriaEditar}
        />
        <Route
          path="/categoria/editar/:id"
          exact={true}
          component={FormCategoriaEditar}
        />
        <Route path="/cliente" component={Cliente} />
        <Route path="/produto" component={Produto} />
        <Route path="/funcionario" component={Funcionario} />
      </Switch>
      <Footer>
        <Navbar bg="dark" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
            <Nav className="mr-auto">
              <Link className="link" to="/">
                Home
              </Link>

              <Link className="link" to="/categoria">
                Categoria
              </Link>

              <Link className="link" to="/produto">
                Produto
              </Link>

              <Link className="link" to="/funcionario">
                Funcionário
              </Link>

              <Link className="link" to="/cliente">
                Cliente
              </Link>

              <Link className="link" to="/">
                Pedido
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Footer>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);

serviceWorker.unregister();
