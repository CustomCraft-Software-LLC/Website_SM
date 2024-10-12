import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import "../styles/index.css"; 

const Index = () => (
  <Layout>
    <SEO 
      title="Home" 
      description="Welcome to Your Business Name. We provide top-notch services to our clients."
      url="https://yourdomain.com/"
      key="home, business, services, your business name"
    />
    <section className="index-section">
      <h2 className="index-heading">Our Services</h2>
      <ul className="index-list">
        <li className="index-item">
          <strong className="index-strong">Service 1</strong>: A brief description of Service 1.
        </li>
        <li className="index-item">
          <strong className="index-strong">Service 2</strong>: A brief description of Service 2.
        </li>
        <li className="index-item">
          <strong className="index-strong">Service 3</strong>: A brief description of Service 3.
        </li>
      </ul>
    </section>
  </Layout>
);

export default Index;