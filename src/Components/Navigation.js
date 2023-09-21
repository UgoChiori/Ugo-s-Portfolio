import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navigation() {
  // State to manage the menu open/close
  const [click, setClick] = useState(false);

  // Function to toggle the menu open/close
  const handleClick = () => setClick(!click);

  // Function to close the menu
  const closeMenu = () => setClick(false);

  // Function to change the header background color on scroll
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
      <NavLink to="/" onClick={closeMenu}>
        <h1>Ugo Chiori.</h1>
      </NavLink>
      <ul className={click ? "menu active" : "menu"}>
        <li>
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>{" "}
        </li>
        <li>
          <NavLink to="/project" onClick={closeMenu}>
            Projects
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>{" "}
        </li>
        <li>
          <NavLink to="/blog" onClick={closeMenu}>
            Blog
          </NavLink>{" "}
        </li>
        <li>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
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
