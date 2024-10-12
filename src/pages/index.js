import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const Index = () => (
  <Layout>
    <SEO 
      title="Home" 
      description="Welcome to Your Business Name. We provide top-notch services to our clients."
      url="https://yourdomain.com/"
      key="home, business, services, your business name"
    />
    <section>
      <h2>Our Services</h2>
      <ul>
        <li>
          <strong>Service 1</strong>: A brief description of Service 1.
        </li>
        <li>
          <strong>Service 2</strong>: A brief description of Service 2.
        </li>
        <li>
          <strong>Service 3</strong>: A brief description of Service 3.
        </li>
      </ul>
    </section>
  </Layout>
);

export default Index;