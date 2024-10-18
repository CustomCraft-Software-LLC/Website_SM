import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import "../styles/faq.css";

const Faq = () => (
  <Layout>
    <SEO 
      title="FAQ" 
      description="Frequently asked questions about our services, pricing, and more."
      url="https://yourdomain.com/faq"
      keywords="faq, questions, help, support"
    />
    <section className="faq-section">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-item">
        <h3>What services do you offer?</h3>
        <p>We offer a variety of services, including consulting, implementation, and ongoing support. Please visit our Services page for more details.</p>
      </div>
      <div className="faq-item">
        <h3>How can I contact you?</h3>
        <p>You can reach us through our Contact page or by emailing us at info@yourdomain.com.</p>
      </div>
      <div className="faq-item">
        <h3>What are your pricing plans?</h3>
        <p>We offer flexible pricing plans to suit different business needs. Check out our Pricing page for more information.</p>
      </div>
      <div className="faq-item">
        <h3>Do you offer support?</h3>
        <p>Yes, we provide full support to our clients. You can contact us anytime for assistance with your service needs.</p>
      </div>
    </section>
  </Layout>
);

export default Faq;