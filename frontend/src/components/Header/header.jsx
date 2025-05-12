import React from "react";
import { Link } from "react-router-dom";
import { GiFlowerPot } from "react-icons/gi";
import "./header.css";
import logo from "../../assets/tomato.png";

function Header() {
  return (
    <nav className="Header">
      <div className="navBarWrapper">
        <div className="logoContentWrapper">
          <Link to="/">
            <div className="logo">
              <img alt="Logo" src={logo} />
              <h3>Solanum</h3>
            </div>
          </Link>
        </div>
        <div className="navLinkWrapper">
          <Link to="/resources" id="resources-link">Resources</Link>
          <Link to="/guide" id="guide-link">Beginner's Guide</Link>
          <Link to="/locate" id="locate-link">Locate a Garden</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
