import "./landingpage.css";
import workspace from "../assets/workspace1.png";
import { Link } from "react-router-dom";
import React from "react";

const LandingPage = () => {
  return (
    <div className="heroine">
      <div className="mask">
        <img className="intro" src={workspace} alt="workspace" />
      </div>
      <div className="content">
        <p>LOREM IPSUM YADA YADA YADA.</p>
        <h1>React Developer</h1>
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
