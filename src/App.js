import React from "react";
import Home from "./HomePage";
import Blog from "./Blog";
import Contact from "./Contact";
import Project from "./Project";
import About from "./About";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";



function App() {
  return (
    <div className="App">
      <Navigation />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
     </Routes>
      </div>

     )
}

export default App;
