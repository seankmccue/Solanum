import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import "./footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <div className="footerWrapper">
        <div className="footerContentRow">
          <div className="footerText">
            <p className="footerName">SOLANUM</p>
            <p className="footerDetails">
              Are your plants lost? At Solanum they will find their forever home!
              <br />
              Don't wander off ... contact us at solanumsgarden@gmail.com
              <br />
              Made with love by Solanum
            </p>
          </div>

          <div className="footerIcon">
            Contact Us:
            <br />
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://gmail.com" target="_blank" rel="noopener noreferrer">
              <MdOutlineEmail />
            </a>
          </div>
        </div>

        <hr className="footerLine" />

        <p className="footerDetails copyright">
          © 2025 ACM Hack Team 2, hope you had a good visit
        </p>
      </div>
    </footer>
  );
}

export default Footer;

