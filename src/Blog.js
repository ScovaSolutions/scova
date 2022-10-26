import React from "react";
import logo from "./logo.png";
import "./Blog.css";
// import Parallax from "./components/Parallax/Parallax.js";
import {
  Button,
  Navbar,
  Nav,
  Form,
  FormControl
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Blog() {
  return (
    <div className="Blog">
        <img src={logo} className="Blog-logo" alt="logo" />
        <p><br/><br/><br/><br/>Page under construction, check back later!</p>
      </div>
      
  );
}

export default Blog;
