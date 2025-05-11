import React from "react";
import "./HomeHero.css";
import heroImage from "../../assets/homepage-plant.png";

function HomeHero() {
  return (
    <section className="home-hero">
      <div className="hero-content">
        <h1>WELCOME</h1>
        <p>
          Welcome to Urban Gardening for Beginners at UCSD! Our goal is to help
          you discover the joys of cultivating your own greens—right here on
          campus. Whether you’re completely new to gardening or simply looking
          to polish your skills, this platform will guide you with step-by-step
          techniques, expert tips, and curated resources.
        </p>
        <a href="#about-section">
          <button className="hero-button">LEARN MORE</button>
        </a>
        
      </div>

      {
        <div className="hero-image">
          <img src={heroImage} alt="A person holding a potted plant" />
        </div>
      }
    </section>
  );
}

export default HomeHero;
