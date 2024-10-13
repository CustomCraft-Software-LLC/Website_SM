import React from "react";
import "../styles/hero.css";

const Hero = () => (
  <header className="hero">
    <div className="hero-content">
      <h1 className="hero-title">Welcome to Your Business Name</h1>
      <p className="hero-description">
        We provide top-notch services to our clients with a focus on quality and customer satisfaction.
      </p>
      <a href="/contact" className="btn-primary">Get in Touch</a>
    </div>
  </header>
);

export default Hero;