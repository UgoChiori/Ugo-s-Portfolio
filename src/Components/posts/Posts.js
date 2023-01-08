import React from "react";
import "./posts.css";
import code from "../posts/code.jpeg";

export default function Posts() {
  return (
    <div className="post">
      <img className="postImg" src={code} alt="url" />

      <div className="postText">
        <div className="postCategories">
          <span className="postCategory">Programming</span>
        </div>
        <span className="postTitle">
          Altschool Exam Project: My Github repositories
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">
        {" "}
        This project is a simple React application that allows the user to
        search for GitHub repositories using the GitHub Repo API. Getting
        Started: To get started, create new React App: npx create-react-app
        altschoolassignment Start the development server: npm start The
        application is hosted at
        https://alt-school-exam-project-zeta.vercel.app/ The following
        dependencies were installed for this project: - npm i- react-router-dom
        - npm i- axios - npm i- react-error-boundary{" "}
      </p>
      <a
        href="https://adaohafia1.blogspot.com/2023/01/altschool-exam-project-my-github_8.html"
        className="postLink"
      >
        {" "}
        Read More
      </a>
    </div>
  );
}
