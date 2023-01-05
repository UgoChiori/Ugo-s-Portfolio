import "./mywork.css";
import { Link } from "react-router-dom";
import React from "react";

const MyWork = (props) => {
  
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="pictures" />
      <h2 className="project-title">{props.title}</h2>
      <div className="details">
        <p>{props.text}</p>
        <div className="pro-btns">

          <Link to={props.view} className="btn">
            View
          </Link>
          <Link to={props.code} className="btn">
            Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
