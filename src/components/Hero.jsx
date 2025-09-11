// src/components/Hero.jsx
import React from "react";
import profileImage from "../assets/alishba.png"; // Replace with your image path
import profileImage1 from "../assets/alishbaa-removebg-preview.png";
const Hero = () => {
  return (
    <section className="hero-section relative min-h-screen flex items-center">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="accent-text">Alishba Qureshi</span>
        </h1>
        <p className="hero-description">
          I am a software engineer passionate about building innovative web and AI applications.
        </p>
        <div className="hero-buttons">
            <a href="mailto:alishbaqureshi593@gmail.com">
          <button className="primary-button">Hire Me</button>
          </a>
          <a href="#projects">
          <button className="outline-button">View Projects</button>
          </a>
        </div>
      </div>

      <div className="hero-image-container">
        <div className="profile-frame">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <span className="floating-badge">React & AI Dev</span>
      </div>
    </section>
  );
};

export default Hero;
