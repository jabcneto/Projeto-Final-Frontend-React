import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "./styles.css";

import Header from "./components/Header/Header";
import Categoria from "./components/Categoria/Page/Categoria";
import CategoriaEditar from "./components/Categoria/Page/CategoriaEditar";
import CategoriaAdicionar from "./components/Categoria/Page/CategoriaAdicionar";
import FormCategoriaEditar from "./components/Categoria/FormCategoria/FormCategoriaEditar";
import CategoriaConsultar from "./components/Categoria/Page/CategoriaConsultar";

import styled, { css } from "styled-components";
import { Nav, Navbar } from "react-bootstrap";
import FormCategoriaDeletar from "./components/Categoria/FormCategoria/FormCategoriaDeletar";

const Footer = styled.div`
  margin: 2em 0 0;
  background: #343a40;
  color: #fefefe;
  border-radius: 3px;
  width: 100%;
  padding: 1.24em;
`;

ReactDOM.render(
  <>
    <BrowserRouter>
      <Header />
      <Switch style={{bottom:'0',
    'position':'fixed',
    'overflow-y':'scroll',
    'overflow-x':'hidden'}}>
        <Route path="/" exact={true} component={Categoria} />
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
        <Route
          path="/categoria/deletar/:id"
          exact={true}
          component={FormCategoriaDeletar}
        />
      </Switch>
      <Footer sm={true}>
        <Navbar bg="dark" expand="lg">
          <Nav className="mr-auto">
            
            <Link className="link">
              Home
            </Link>

            <Link className="link" to="/categoria">
              Categoria
            </Link>

            <Link className="link">
              Produto
            </Link>

            <Link className="link">
              Funcionário
            </Link>

            <Link className="link">
              Cliente
            </Link>

            <Link className="link">
              Pedido
            </Link>
          </Nav>
        </Navbar>
      </Footer>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);

serviceWorker.unregister();
