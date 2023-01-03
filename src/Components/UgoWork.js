import "./mywork.css";
import MyWork from "./MyWorkCard";
import MyWorkData from "./MyWorkData";
import React from "react";

const UgoWork = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading"> Projects</h1>
      <div className="project_container">
        {MyWorkData.map((val, ind) => {
          return (
            <MyWork
              key={ind}
              img={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              code={val.code}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UgoWork;
