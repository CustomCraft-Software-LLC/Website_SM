import React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import "../styles/pricing.css";

const Pricing = () => (
  <Layout>
    <Seo
      title="Membership Plans" 
      description="Choose from our flexible membership options to save on groceries and enjoy exclusive benefits." 
      url="https://yourdomain.com/membership"
      key="membership, pricing, grocery plans, savings, grocery store name"
    />
    
    <section className="pricing-section">
      <h1 className="pricing-title">Our Membership Plans</h1>
      <p className="pricing-intro">
        Sign up for a membership to enjoy exclusive discounts, free deliveries, and other benefits tailored for regular shoppers.
      </p>
      
      <div className="pricing-plans">
        <div className="pricing-card">
          <h2 className="plan-title">Basic Membership</h2>
          <p className="plan-price">Free</p>
          <p className="plan-description">
            Perfect for occasional shoppers who want access to basic savings.
          </p>
          <ul className="plan-features">
            <li>✔️ Access to weekly discounts and deals</li>
            <li>✔️ Digital coupons</li>
            <li>✔️ Monthly newsletter with recipes and tips</li>
          </ul>
          <button className="plan-button">Sign Up for Free</button>
        </div>

        <div className="pricing-card">
          <h2 className="plan-title">Plus Membership</h2>
          <p className="plan-price">$19.99/month</p>
          <p className="plan-description">
            Ideal for frequent shoppers looking to maximize savings and convenience.
          </p>
          <ul className="plan-features">
            <li>✔️ 5% off all purchases</li>
            <li>✔️ Free delivery on orders over $50</li>
            <li>✔️ Early access to seasonal items and sales</li>
            <li>✔️ Exclusive monthly recipes and cooking tips</li>
          </ul>
          <button className="plan-button">Select Plus Membership</button>
        </div>

        <div className="pricing-card">
          <h2 className="plan-title">Premium Membership</h2>
          <p className="plan-price">$49.99/month</p>
          <p className="plan-description">
            For dedicated shoppers who want maximum savings, flexibility, and perks.
          </p>
          <ul className="plan-features">
            <li>✔️ 10% off all purchases</li>
            <li>✔️ Free delivery on all orders</li>
            <li>✔️ Access to exclusive in-store events and workshops</li>
            <li>✔️ Priority customer support</li>
            <li>✔️ Personalized grocery planning assistance</li>
          </ul>
          <button className="plan-button">Select Premium Membership</button>
        </div>

        <div className="pricing-card">
          <h2 className="plan-title">Corporate Plan</h2>
          <p className="plan-price">Custom Pricing</p>
          <p className="plan-description">
            Tailored for businesses and organizations requiring bulk purchasing or customized grocery solutions.
          </p>
          <ul className="plan-features">
            <li>✔️ Bulk purchasing discounts</li>
            <li>✔️ Dedicated account manager</li>
            <li>✔️ Custom delivery scheduling</li>
            <li>✔️ Employee benefit programs</li>
            <li>✔️ Flexible payment options</li>
          </ul>
          <button className="plan-button">Contact Sales</button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Pricing;