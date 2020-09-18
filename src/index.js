import React from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Categoria from "./components/Categoria/Pagina/Categoria";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <>
    <BrowserRouter>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand> <Link to='/' >React-Bootstrap</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link ><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link ><Link to='/categoria'>Categoria</Link></Nav.Link>
            <Nav.Link ><Link to='/'>Produto</Link></Nav.Link>
            <Nav.Link ><Link to='/'>Cliente</Link></Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/categoria" component={Categoria} />
      </Switch>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);

serviceWorker.unregister();
