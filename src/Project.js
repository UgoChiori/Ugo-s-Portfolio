import React from "react";
import Footer from "./Components/Footer";
import UgoImg1 from "./Components/UgoImg1";
import Pricing from "./Components/Pricing";
import UgoWork from "./Components/UgoWork";

const Project = () => {
  return (
    <div>
    
      <UgoImg1 heading="PROJECTS." text="Some of my work" />
      <UgoWork />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Project;
