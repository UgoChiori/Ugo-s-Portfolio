import "./landingpage.css";
import ugodawn from "../assets/ugodawn.jpeg";
import { Link } from "react-router-dom";
import React from "react";

const LandingPage = () => {
  return (
    <div className="heroine">
      <div className="mask">
        <img className="intro" src={ugodawn} alt="workspace" />
      </div>
      <div className="content">
        <h1>Front End Developer.</h1>
        <p> I enjoy writing code, solving problems and building things. </p>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
