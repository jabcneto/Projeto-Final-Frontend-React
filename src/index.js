import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Categoria from "./components/Categoria/Page/Categoria";
import Produto from "./components/Produto/Page/Produto";

ReactDOM.render(
  <>
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/categoria" component={Categoria} />
        <Route path="/produto" component={Produto} />
      </Switch>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);

serviceWorker.unregister();
