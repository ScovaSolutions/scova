import React from "react";
import logo from "./logo.png";
import "./Home.css";
// import Parallax from "./components/Parallax/Parallax.js";
import {
  Button,
  Navbar,
  Nav,
  Form,
  FormControl
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {

  return (
    <div className="Home">
      <img src={logo} className="Home-logo" alt="logo" />
      <p><br /><br /><br />Mission: Collective Nirvana</p>


      <br /><br /><br /><br /><br /><br />


    <p>
      <strong><em>
        He that descended <br/>
        is the same also that ascended up <br/>
        far above all heavens, <br/>
        that he might fill all things.
        <br/>
        <br/>
        And he gave some, apostles; <br/>
        and some, prophets; <br/>
        and some, evangelists; <br/>
        and some, pastors and teachers;<br/>
        <br/>
        <br/>
        For the perfecting of the saints, <br/>
        for the work of the ministry, <br/>
        for the edifying of the body of Christ:
        <br/>
        <br/>
        Till we all come in the unity of the faith, <br/>
        and of the knowledge of the Son of God, <br/>
        unto a perfect man, <br/>
        unto the measure of the stature <br/>
        of the fulness of Christ:
        <br/>
        <br/>
        That we henceforth be no more children, <br/>
        tossed to and fro, and carried about <br/>
        with every wind of doctrine, <br/>
        by the sleight of men, <br/>
        and cunning craftiness, <br/>
        whereby they lie in wait to deceive;
        <br/>
        <br/>
        But speaking the truth in love, <br/>
        may grow up into him in all things, <br/>
        which is the head, even Christ:
        <br/>
        <br/>
        From whom the whole body <br/>
        fitly joined together and compacted <br/>
        by that which every joint supplieth, <br/>
        according to the effectual working <br/>
        in the measure of every part, <br/>
        maketh increase of the body <br/>
        unto the edifying of itself in love.
        <br/>
        <br/>
        (Ephesians 4:10-16)</em></strong>
      </p>

      {/* Who am I?
        Why am I here?
        Where do I go from here?
        What is Scova?
        What is Scova Foundation's Mission?
        What can You do? */}



    </div>



  );
}

export default Home;
