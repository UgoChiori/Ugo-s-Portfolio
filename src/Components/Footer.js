import "./footer.css";
import React from "react";
import {
  FaHome,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome
              size={20}
              style={{
                color: "white",
                cursor: "pointer",
                marginRight: "2rem",
              }}
            />
            <div>
              <p>Lekki, Lagos</p>
              <p>Nigeria</p>
            </div>
          </div>
         
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{
                  color: "white",
                  cursor: "pointer",
                  marginRight: "2rem",
                }}
              />
              ugochiori@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>
            I am Ugo Chiori. Front End Developer. I enjoy writing code, solving
            problems and building things.
          </p>
          <div className="socialmedia">
            <FaFacebook
              size={20}
              style={{
                color: "white",
                cursor: "pointer",
                marginRight: "1rem",
              }}
            />
            <FaTwitter
              size={20}
              style={{
                color: "white",
                cursor: "pointer",
                marginRight: "1rem",
              }}
            />
            <FaLinkedin
              size={20}
              style={{
                color: "white",
                cursor: "pointer",
                marginRight: "1rem",
              }}
            />
            <FaGithub
              size={20}
              style={{
                color: "white",

                cursor: "pointer",
                marginRight: "1rem",
              }}
            />
          </div>
        </div>
      </div>
      <p>© 2021. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
