import React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import "../styles/pricing.css";

const Plan = ({ title, price, description, features, buttonText, onButtonClick }) => (
  <div className="pricing-card">
    <h2 className="plan-title">{title}</h2>
    <p className="plan-price">{price}</p>
    <p className="plan-description">{description}</p>
    <ul className="plan-features">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <button className="plan-button" onClick={onButtonClick}>{buttonText}</button>
  </div>
);

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
        <Plan
          title="Basic Membership"
          price="Free"
          description="Perfect for occasional shoppers who want access to basic savings."
          features={[
            "✔️ Access to weekly discounts and deals",
            "✔️ Digital coupons",
            "✔️ Monthly newsletter with recipes and tips",
          ]}
          buttonText="Sign Up for Free"
          onButtonClick={() => alert("Basic Membership selected")}
        />

        <Plan
          title="Plus Membership"
          price="$19.99/month"
          description="Ideal for frequent shoppers looking to maximize savings and convenience."
          features={[
            "✔️ 5% off all purchases",
            "✔️ Free delivery on orders over $50",
            "✔️ Early access to seasonal items and sales",
            "✔️ Exclusive monthly recipes and cooking tips",
          ]}
          buttonText="Select Plus Membership"
          onButtonClick={() => alert("Plus Membership selected")}
        />

        <Plan
          title="Premium Membership"
          price="$49.99/month"
          description="For dedicated shoppers who want maximum savings, flexibility, and perks."
          features={[
            "✔️ 10% off all purchases",
            "✔️ Free delivery on all orders",
            "✔️ Access to exclusive in-store events and workshops",
            "✔️ Priority customer support",
            "✔️ Personalized grocery planning assistance",
          ]}
          buttonText="Select Premium Membership"
          onButtonClick={() => alert("Premium Membership selected")}
        />

        <Plan
          title="Corporate Plan"
          price="Custom Pricing"
          description="Tailored for businesses and organizations requiring bulk purchasing or customized grocery solutions."
          features={[
            "✔️ Bulk purchasing discounts",
            "✔️ Dedicated account manager",
            "✔️ Custom delivery scheduling",
            "✔️ Employee benefit programs",
            "✔️ Flexible payment options",
          ]}
          buttonText="Contact Sales"
          onButtonClick={() => alert("Corporate Plan selected")}
        />
      </div>
    </section>
  </Layout>
);

export default Pricing;