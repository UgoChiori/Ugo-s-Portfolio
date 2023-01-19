import "./mywork.css";
import React from "react";

const MyWork = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="pictures" />
      <h2 className="project-title">{props.title}</h2>
      <div className="details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <a href={`${props.view}`} target="_blank" className="btn">
            View
          </a>

          <a href={`${props.code}`} target="_blank" className="btn">
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
