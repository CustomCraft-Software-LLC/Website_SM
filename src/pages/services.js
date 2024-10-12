import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import "../styles/services.css";

const Services = () => (
  <Layout>
    <SEO 
      title="Services" 
      description="Discover the range of services offered by our business, tailored to meet your needs."
      url="https://yourdomain.com/services"
      key="services, offerings, your business name"
    />
    
    <section>
      <h1>Our Services</h1>
      <p>At Your Business Name, we offer a variety of services to help you achieve your goals. Our experienced team is dedicated to providing high-quality solutions tailored to your needs.</p>
      
      <h2>Service 1</h2>
      <p>A brief description of Service 1. Explain what it entails and how it benefits customers.</p>
      
      <h2>Service 2</h2>
      <p>A brief description of Service 2. Highlight unique features and advantages.</p>
      
      <h2>Service 3</h2>
      <p>A brief description of Service 3. Describe how it stands out in the market.</p>
      
      <h2>Service 4</h2>
      <p>A brief description of Service 4. Focus on its importance and impact.</p>
      
    </section>
  </Layout>
);

export default Services;