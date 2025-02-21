import React from 'react';
import './HomeHero.css';
// import heroImage from './homepage-plant.png';

function HomeHero() {
  return (
    <section className="home-hero">
      <div className="hero-content">
        <h1>WELCOME</h1>
        <p>
        Welcome to Urban Gardening for Beginners at UCSD! 
        Get ready to dig in and start your urban gardening journey today!
        </p>
        <button className="hero-button">LEARN MORE</button>
      </div>
      
      {/* <div className="hero-image">
        <img src={heroImage} alt="A person holding a potted plant" />
      </div> */}
    </section>
  );
}

export default HomeHero;
