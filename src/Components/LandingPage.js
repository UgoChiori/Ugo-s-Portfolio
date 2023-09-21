import "./landingpage.css";
import ugodawn from "../assets/ugodawn.jpeg";
import { Link } from "react-router-dom";
import React from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaCss3,
  FaDev,
  FaVuejs,
 
} from "react-icons/fa";

// import { useTranslation } from "react-i18next";
// import { changeLanguage } from "i18next";
// import i18next from "i18next";

function LandingPage() {
  // const { t, i18next } = useTranslation();
  // const handleClick = (lang) => {
  //   i18next.changeLanguage(lang);
  // }

  // function handleClick  (lang)  {
  //   i18next.changeLanguage(lang);
  // };

  return (
    <div className="heroine">
      <div className="language"></div>
      <div className="mask">
        <img className="intro" src={ugodawn} alt="workspace" />
      </div>
      <div className="content">
        <h1>Front End Developer</h1>
        <h4>Baker Turned Developer, </h4>
        <p> I enjoy writing code, solving problems and building things. </p>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn-light">
            Contact
          </Link>
        </div>
        <div>
          <FaDev
            size={20}
            style={{
              color: "white",
              cursor: "pointer",
              marginRight: "2rem",
            }}
          />
          <FaHtml5
            size={20}
            style={{
              color: "white",
              cursor: "pointer",
              marginRight: "2rem",
            }}
          />
          <FaCss3
            size={20}
            style={{
              color: "white",
              cursor: "pointer",
              marginRight: "2rem",
            }}
          />
          <FaJsSquare
            size={20}
            style={{
              color: "white",
              cursor: "pointer",
              marginRight: "2rem",
            }}
          />
          <FaReact
            size={20}
            style={{
              color: "white",
              cursor: "pointer",
              marginRight: "2rem",
            }}
          />

          <FaCss3Alt
            size={20}
            style={{
              color: "white",
              cursor: "pointer",
              marginRight: "2rem",
            }}
          />
          <FaVuejs
            size={20}
            style={{
              color: "white",
              cursor: "pointer",
              marginRight: "2rem",
            }}
          />
         
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
