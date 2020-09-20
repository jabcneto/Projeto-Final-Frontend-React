import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Categoria from "./components/Categoria/Pagina/Categoria";
import * as serviceWorker from "./serviceWorker";
import Header from "./components/Header/Header";

ReactDOM.render(
  <>
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/categoria" component={Categoria} />
      </Switch>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);

serviceWorker.unregister();
