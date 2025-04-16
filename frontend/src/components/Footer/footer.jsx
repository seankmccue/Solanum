import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

import "./footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <div className="footerWrapper">
        <div className="footerContentRow">
          <div className="footerText">
            <p className="footerName">SOLANUM</p>
            <p className="footerDetails">
              9500 Gilman Dr
              <br /> 
              La Jolla, CA 92093
              <br /> 
              Made with love by Solanum
            </p>
          </div>

          <div className="footerIcon">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://gmail.com" target="_blank" rel="noopener noreferrer">
              <MdOutlineEmail />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <CiLinkedin />
            </a>
          </div>
        </div>
        <br />
        <hr className="footerLine" />

        <p className="footerDetails copyright">
          © 2025 ACM Hack Team 2, hope you had a good visit
        </p>
      </div>
    </footer>
  );
}

export default Footer;

