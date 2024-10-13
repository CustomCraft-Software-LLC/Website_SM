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
      
    </section>
  </Layout>
);

export default About;