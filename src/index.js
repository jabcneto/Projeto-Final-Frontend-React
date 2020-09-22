import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cliente from "./components/Cliente/Pagina/Cliente";
import Funcionario from "./components/Funcionario/Pagina/Funcionario";
import * as serviceWorker from "./serviceWorker";
import './styles.css'

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Categoria from "./components/Categoria/Page/Categoria";
import Produto from "./components/Produto/Page/Produto";
import CategoriaEditar from "./components/Categoria/Page/CategoriaEditar";
import CategoriaAdicionar from "./components/Categoria/Page/CategoriaAdicionar";
import FormCategoriaEditar from "./components/Categoria/FormCategoria/FormCategoriaEditar";

ReactDOM.render(
  <>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/categoria" exact={true} component={Categoria} />
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
    </BrowserRouter>
  </>,
  document.getElementById("root")
);

serviceWorker.unregister();
