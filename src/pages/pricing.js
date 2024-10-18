import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import "../styles/pricing.css";

const Pricing = () => (
  <Layout>
    <SEO 
      title="Pricing Plans" 
      description="Explore our competitive pricing options tailored for all business types." 
      url="https://yourdomain.com/pricing"
      key="pricing, services, plans, affordable, your business name"
    />
    
    <section className="pricing-section">
      <h1 className="pricing-title">Our Pricing Plans</h1>
      <p className="pricing-intro">
        Choose from our flexible pricing plans designed to fit any business type and need.
      </p>
      
      <div className="pricing-plans">
        <div className="pricing-card">
          <h2 className="plan-title">Basic Plan</h2>
          <p className="plan-price">$49/month</p>
          <p className="plan-description">
            Ideal for individuals and startups looking for essential services.
          </p>
          <ul className="plan-features">
            <li>✔️ Up to 10 service hours per month</li>
            <li>✔️ Email support</li>
            <li>✔️ Access to online resources and guides</li>
            <li>✔️ Monthly performance reports</li>
          </ul>
          <button className="plan-button">Select Basic Plan</button>
        </div>

        <div className="pricing-card">
          <h2 className="plan-title">Standard Plan</h2>
          <p className="plan-price">$99/month</p>
          <p className="plan-description">
            Perfect for small businesses seeking to grow and enhance their operations.
          </p>
          <ul className="plan-features">
            <li>✔️ Up to 30 service hours per month</li>
            <li>✔️ Phone and email support</li>
            <li>✔️ Quarterly strategy sessions</li>
            <li>✔️ Access to exclusive webinars and workshops</li>
          </ul>
          <button className="plan-button">Select Standard Plan</button>
        </div>

        <div className="pricing-card">
          <h2 className="plan-title">Premium Plan</h2>
          <p className="plan-price">$199/month</p>
          <p className="plan-description">
            For established businesses requiring comprehensive support and tailored solutions.
          </p>
          <ul className="plan-features">
            <li>✔️ Up to 60 service hours per month</li>
            <li>✔️ 24/7 priority support</li>
            <li>✔️ Custom service solutions tailored to your needs</li>
            <li>✔️ Marketing and outreach support</li>
            <li>✔️ Detailed analytics and reporting</li>
          </ul>
          <button className="plan-button">Select Premium Plan</button>
        </div>

        <div className="pricing-card">
          <h2 className="plan-title">Enterprise Plan</h2>
          <p className="plan-price">Custom Pricing</p>
          <p className="plan-description">
            Tailored solutions for large organizations with specialized needs.
          </p>
          <ul className="plan-features">
            <li>✔️ Unlimited service hours</li>
            <li>✔️ Dedicated account manager</li>
            <li>✔️ Comprehensive market analysis</li>
            <li>✔️ Training and development programs</li>
            <li>✔️ Customizable solutions and integrations</li>
          </ul>
          <button className="plan-button">Contact Sales</button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Pricing;