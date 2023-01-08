import React from "react";
import "./posts.css";
import hackathonphonie from "../posts/hackathonphonie.mp4";

export default function Posts2() {
  return (
    <div className="post">
      <video player className="postImg" src={hackathonphonie} alt="phone app" />

      <div className="postText">
        <div className="postCategories">
          {/* <span className="postCategory">Cakes</span> */}
          <span className="postCategory">Programming</span>
        </div>
        <span className="postTitle">Baby Developer...</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">
        {" "}
        So, I quietly updated my bio to "Aspiring software developer" on my
        social media pages and I won't even lie, I feel like an impostor,
        especially as Javascript is kicking my behind😭😭😭😭Send help! The
        first semester ended about a month ago, and yours truly did well. Of
        course, I can't fall you people's hands. I scored an overall score of
        92.2% and it felt good. You see, all my life, I have always been an
        average student. Just passing enough to be promoted to the next class,
        nothing too spectacular. So this was a big deal for me...*whispering* I
        had the highest score in my circle, so my shoulders were a bit too high
        for a while. Do am if e easy.😁😁😁
      </p>
      <a
        href="https://adaohafia1.blogspot.com/2022/08/baby-developer.html"
        className="postLink"
      >
        {" "}
        Read More
      </a>
    </div>
  );
}
