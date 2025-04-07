import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-background"></div>
      <div className="hero-content">
        <h1>Stranger Things</h1>
        <p>Watch Season 4 Now</p>
        <div className="hero-buttons">
          <button className="play-btn">▶ Play</button>
          <button className="info-btn">ℹ More Info</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
