import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Home from "./Home";
import Blog from "./Blog";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route, Link, HashRouter } from "react-router-dom";
import Headroom from 'react-headroom';

import {
  Button,
  Navbar,
  Nav,
  Form,
  FormControl,
  InputGroup,
  ButtonGroup,
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ScaleText from "react-scale-text";


ReactDOM.render(
  <Router>
    <Headroom>
    <Navbar bg="clear" variant="light" expand='true'>
      <Navbar.Brand className="Navbar-brand">
        <Link to="/home" style={{ color: "black" }}>
        <span class="full-text">Scova</span>
        <span class="short-text">Scova</span>
        </Link>
      </Navbar.Brand>


      <span class="full-text">
      <ButtonGroup aria-label="Basic example" className="float-sm-right" size="lg">
        <Button href="/book" variant="success">
          Book
        </Button>
        {/* <Button href="/blog" variant="warning">
          Blog
        </Button> */}
      </ButtonGroup>
      </span>


      <span class="short-text">
      <ButtonGroup aria-label="Basic example" className="float-sm-right" size="md">
        <Button href="/book" variant="success">
          Book
        </Button>
        {/* <Button href="/blog" variant="warning">
          Blog
        </Button> */}
      </ButtonGroup>
      </span>


      {/* <Form inline>
        <InputGroup className="mr-3">
          <FormControl
            placeholder="Search Scova"
            aria-label="Recipient's username" 
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">
              <FontAwesomeIcon icon={faSearch} color="black" />
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form> */}
    </Navbar>
    </Headroom>
    

    {/* <IndexRoute component={Home} /> */}

    <Route exact path="/" component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/book" component={App} />
    <Route path="/blog" component={Blog} />
    
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
