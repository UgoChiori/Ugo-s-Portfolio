import "./mywork.css";
import { NavLink } from "react-router-dom";
import React from "react";

const MyWork = (props) => {
  return (
    <div className="project-card">
          
            <img src={props.imgsrc} alt="pictures" />
            <h2 className="project-title">{props.title}</h2>
            <div className="details">
              <p>{props.text}</p>
              <div className="pro-btns">
                <NavLink to={props.view} className="btn">
                  View
                </NavLink>
                <NavLink to={props.code} className="btn">
                    Code
                    </NavLink>
              </div>
            </div>
         
        </div>
  );
};

export default MyWork;
