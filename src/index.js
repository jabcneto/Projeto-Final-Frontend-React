import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Categoria from "./components/Categoria/Pagina/Categoria";
import Cliente from "./components/Cliente/Pagina/Cliente";
import * as serviceWorker from "./serviceWorker";
import Header from "./components/Header/Header";

ReactDOM.render(
  <>
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/categoria" component={Categoria} />
        <Route path="/cliente" component={Cliente} />
      </Switch>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);

serviceWorker.unregister();
