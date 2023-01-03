
import React from "react";

// Create Header component...
function Header() {
  return <h1>UGO CHIORI</h1>;
} 
// create About component...
function About() {
  return (
    <div>
      <p>
        {" "}
        Hello! My name is Ugo Chiori, and I am a Lagos-based software engineer.
        When I am not baking cakes, or drinking the world's finest coffees, I
        can be found writing code and learning new things. <br></br>I am looking
        to collaborate with other developers on any front end projects.<br></br>
        I have a diverse set of skills, ranging from HTML, CSS, Javascript,
        OpenSource and ReactJS.
      </p>
    </div>
  );
}
// Create Picture component...
function Picture() {
  return (
    <div className="picture">
      <img
        className="profilepicture"
        src={require("./ugopicture.jpeg")}
        alt="Girl"
        style={{ width: 100 }}
      />
    </div>
  );
}

// Create Navigation component...
function Footer() {
  return (
    <div>
      <button className="action-btn">
        <a href="https://github.com/UgoChiori">PROJECTS</a>{" "}
      </button>
      <button className="action-btn">
        {" "}
        <a href="https://twitter.com/AdaOhafia">CONTACT</a>{" "}
      </button>
      <button className="action-btn">
        {" "}
        <a href="https://adaohafia1.blogspot.com/">BLOG</a>{" "}
      </button>
    </div>
  );
}
// Create social media component...

function SocialIcon() {
  return (
    <div className="icon">
      <a href="https://twitter.com/AdaOhafia">
        <img src={require("./twitter.jpeg")} alt="icon" style={{ width: 20 }} />{" "}
      </a>
      <a href="https://www.instagram.com/ugo_chiori/">
        <img
          src={require("./instagram.png")}
          alt="icon"
          style={{ width: 20 }}
        />{" "}
      </a>

      <a href="https://web.facebook.com/mc.creamyz">
        <img src={require("./facebook.png")} alt="icon" style={{ width: 20 }} />{" "}
      </a>
      <a href="https://www.linkedin.com/in/ugo-chiori-086bb22a/">
        <img
          src={require("./linkedin.jpeg")}
          alt="icon"
          style={{ width: 20 }}
        />{" "}
      </a>
      <a href="https://github.com/UgoChiori">
        <img src={require("./github.webp")} alt="icon" style={{ width: 20 }} />{" "}
      </a>
    </div>
  );
}

//Create our root component => App component

function App() {
  return (
    <section className="landing-page">
      <Header />
      <p className="about-text"></p>
      <About />
      <Picture />
      <Footer />
      <SocialIcon />
    </section>
  );
}

export default App;
