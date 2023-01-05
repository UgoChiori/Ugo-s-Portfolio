import "./landingpage.css";
import ugodawn from "../assets/ugodawn.jpeg";
import { Link } from "react-router-dom";
import React from "react";
// import { useTranslation } from "react-i18next";
// import { changeLanguage } from "i18next";
// import i18next from "i18next";

function LandingPage  ()  {
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
        <p> I enjoy writing code, solving problems and building things </p>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn-light">
            Contact
          </Link>
        </div>
      </div>
      {/* <Link to="/"> */}
          {/* <button onClick={() => handleClick("en")}>English</button>
          <button onClick={() => handleClick("fr")}>French</button>
          <p>{t("my translated text")}</p> */}
        {/* </Link> */}
    </div>
  );
};

export default LandingPage;
