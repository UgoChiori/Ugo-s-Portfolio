import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navigation() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <NavLink to="/">
        <h1>Ugo Chiori.</h1>
      </NavLink>
      <ul className={click ? "menu active" : "menu"}>
        <li>
          <NavLink to="/">Home</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/project"> Projects </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/about"> About </NavLink>{" "}
        </li>
        <li>
          <NavLink to="/blog"> Blog </NavLink>{" "}
        </li>
        <li>
          <NavLink to="/contact"> Contact </NavLink>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
}

export default Navigation;
