import React, { useEffect } from 'react';
import logo from "./logo.png";
import "./App.css";
import "./Chapters.css";
// import Parallax from "./components/Parallax/Parallax.js";
import { Button, Navbar, Nav, Form, FormControl, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FacebookPlayer from "react-facebook-player";
import SpotifyPlayer from 'react-spotify-player';
// import { Scrollbars } from 'react-custom-scrollbars';

import { verses, onboarding } from "./Scova";

import ReactGA from 'react-ga';


function App() {


  useEffect(() => {
    ReactGA.initialize('UA-235923676');
    ReactGA.pageview(window.location.pathname);
  }, []);


  var vi = 0;
  const versesNumbered = verses.map((verse, index) => {
    if (verse.classes.includes("verse")) {
      vi = vi + 1;
      return (
        <tr>
          
          <td colSpan="42" className={verse.classes} id={vi}>
            {verse.html}
          </td>
          <td colSpan="8" style={{ fontWeight: "bolder", textAlign: "left" , verticalAlign: "middle"}}>
            {vi}
          </td>
        </tr>
      );
    } else {
      return (
        <tr>
          
          <td colSpan="42" className={verse.classes}>
            {verse.html}
          </td>
          <td colSpan="8" style={{ fontWeight: "bolder", textAlign: "left"  , verticalAlign: "middle"}}>
            {" "}
          </td>
        </tr>
      );
    }
  });

  const onboardingFormatted = onboarding.map((verse, index) => (
    <p className={verse.classes}>
      <br />
      <br />
      {verse.html}
      <br />
    </p>
  ));

  return (
    <div className="App">
      {/* <Scrollbars style={{ width: 500, height: 300 }}> */}
      <img src={logo} className="App-logo" alt="logo" />

      {onboardingFormatted}
      <table>{versesNumbered}</table>
      {/* </Scrollbars> */}
    </div>
  );
}

export default App;
