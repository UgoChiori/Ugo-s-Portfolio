import React from 'react';
import Footer from "./Components/Footer";
import UgoImg1 from './Components/UgoImg1';


const About = () => {
  return (
    <div>
      <UgoImg1 heading="ABOUT." text="A little about me."
       text="I am Ugo Chiori, and I am a Lagos-based software engineer. 
       I like to write code and learn new things about programming.
       I am looking to collaborate with other developers on any front end projects.
      My skills include HTML, CSS, Javascript, Vue and ReactJS."
       />
      

      <Footer />
      
    </div>
  )
}

export default About