import React from "react";
import Footer from "./Components/Footer";
import UgoImg1 from "./Components/UgoImg1";
import "./blog.css";
import Posts from "./Components/posts/Posts";
import Posts2 from "./Components/posts/Posts2";
import Posts3 from "./Components/posts/Posts3";

const Blog = () => {
  return (
    <div className="blog">
      <UgoImg1
        heading="BLOG."
        text="My thoughts on programming development and everything in between. "
        My
        thoughts
        on
        programming
        development
        and
        everything
      />
      <Posts />
      <Posts2 />
      <Posts3 />

      <Footer />
    </div>
  );
};

export default Blog;
