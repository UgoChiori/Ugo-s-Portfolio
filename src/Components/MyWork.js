import "./mywork.css";
// import { Link, useNavigate, redirect } from "react-router-dom";
import React from "react";

const MyWork = (props) => {
  // const navigate = useNavigate();

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
          
          {/* <button onClick={()=>{window.location.href=props.code}}>CODE</button> */}
          <a href={`${props.code}`} target="_blank"className="btn">
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
