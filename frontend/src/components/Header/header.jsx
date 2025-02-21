import React from "react";
import { Link } from "react-router-dom";
import { GiFlowerPot } from "react-icons/gi";
import "./header.css";

function Header() {
  return (
    <nav className="Header">
      <div className="navBarWrapper">
        <div className="logoContentWrapper">
          <Link to="/">
            <div className="logo">
                <GiFlowerPot />
                <h3>Urban Gardening</h3>
            </div>
          </Link>
        </div>
        <div className="navLinkWrapper">
            <Link to="/resources">Resources</Link>
            <Link to="/guide">Beginner's Guide</Link>
            <Link to="/locate">Locate a Garden</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
