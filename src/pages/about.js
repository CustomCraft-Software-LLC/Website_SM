import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import "../styles/about.css";

const About = () => (
  <Layout>
    <SEO 
      title="About Us" 
      description="Learn more about our business, mission, and team."
      url="https://yourdomain.com/about"
      key="about us, mission, team, your business name"
    />
    
    <section className="about-section">
      <h1 className="about-title">About Us</h1>
      <p className="about-text">
        Welcome to Your Business Name. We are dedicated to delivering top-quality services to our clients.
        Our mission is to help businesses succeed by providing professional solutions tailored to their needs.
      </p>
      <p className="about-text">
        Our team is composed of passionate individuals who bring a wealth of experience and expertise to the table.
        Whether you're looking for service 1, service 2, or service 3, we are here to help you achieve your goals.
      </p>
    </section>
  </Layout>
);

export default About;