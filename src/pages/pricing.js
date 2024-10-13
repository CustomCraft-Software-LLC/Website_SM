import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import "../styles/pricing.css";

const Pricing = () => (
  <Layout>
    <SEO 
      title="Pricing Plans" 
      description="Explore our competitive pricing options tailored to meet your needs." 
      url="https://yourdomain.com/pricing"
      key="pricing, services, plans, affordable, your business name"
    />
    
    <section className="pricing-section">
      <h1 className="pricing-title">Our Pricing Plans</h1>
      <p className="pricing-intro">
        Choose from our flexible pricing plans that are designed to fit any business size or need.
      </p>
      
      <div className="pricing-plans">
        <div className="pricing-card">
          <h2 className="plan-title">Basic Plan</h2>
          <p className="plan-price">$99/month</p>
          <p className="plan-description">Ideal for small businesses just getting started.</p>
          <ul className="plan-features">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
        </div>

        <div className="pricing-card">
          <h2 className="plan-title">Pro Plan</h2>
          <p className="plan-price">$199/month</p>
          <p className="plan-description">Perfect for growing businesses looking to scale.</p>
          <ul className="plan-features">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
        </div>

        <div className="pricing-card">
          <h2 className="plan-title">Enterprise Plan</h2>
          <p className="plan-price">Custom Pricing</p>
          <p className="plan-description">Tailored solutions for large enterprises.</p>
          <ul className="plan-features">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
        </div>
      </div>
    </section>
  </Layout>
);

export default Pricing;