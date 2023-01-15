import React from "react";
import Footer from "./Components/Footer";
import UgoImg1 from "./Components/UgoImg1";
// import "./about.css";

const About = () => {
  return (
    <div>
      <div className="aboutme">
      <UgoImg1
        heading="ABOUT."
        text="A little about me."
        text="I am Ugo Chiori, a Lagos-based software engineer. 
       I went from being a baker, to being a Software Engineer in one year.
       Learning to write code has been a really exciting experience.
        The fact that I can write code, and see the results of my work in real time is amazing...
        I do not think I will ever get used to that feeling. It is the same feeling as watching cupcakes peak in the oven.
        Priceless.
        Although I have not yet worked on a lot of projects, I have worked on a few.
       I am looking to collaborate with other developers on Front End projects, and also learn new things as well.
       I am also looking to do freelance work.
      My current stack includes Javascript, ReactJS and Vue. 
      As a developer, learning new things is very important, hence
      I am also looking to add React Native to my stack, and also learn more about Web3."
      />
</div>
      <Footer />
    </div>
  );
};

export default About;
