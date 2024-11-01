import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Cta from "../components/Cta";
import "../styles/index.css";

const Index = () => (
  <Layout>
    <Seo 
      title="Home" 
      description="Welcome to Your Business Name. We provide top-notch services to our clients."
      url="https://yourdomain.com/"
      keywords="home, business, services, your business name"
    />
    <Hero />
    <Services />
    <Cta />
  </Layout>
);

export default Index;