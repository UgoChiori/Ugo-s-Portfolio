import React from "react";
import "./posts.css";

export default function Posts() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1644792863360-40fa85ea52e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="hello world"
      />

      <div className="postText">
        <div className="postCategories">
          {/* <span className="postCategory">Cakes</span> */}
          <span className="postCategory">Programming</span>
        </div>
        <span className="postTitle">
        NEW BEGINNINGS: THE SWITCH.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">
        It has been the most difficult three years of my life, so far. What with
        being a Nigerian, living in Lagos (oh, I moved from Uyo to Lagos in
        2016, so I am now a Lagos beb) and living in Nigeria with only a
        Nigerian passport. Abeg, anywhere you see me, give me a long, tight hug
        and squeeze dollaz and/or Mama Charlie into my hands...bad as e bad,
        Mai-Bornu and Uncle Clems, I go manage. Have you ever had to deal with
        discontent or rather, being stuck in a rut? That's where I was for the
        longest time. I was stuck in a rut. I knew I didn't want to bake cakes
        commercially anymore, but I had no idea what else it was I should be
        doing, and it really did my head in. I love baking, honestly I do, but
        the daily hike in the price of
      </p>
      <a
        href="https://adaohafia1.blogspot.com/2022/05/new-beginnings-switch.html"
        className="postLink"
      >
        {" "}
        Read More
      </a>
    </div>
  );
}
