import React from "react";
import SEO from "../components/Seo";
import Layout from "../components/Layout";
import "../styles/404.css";

const NotFoundPage = () => (
  <Layout>
    <SEO 
      title="404 - Page Not Found" 
      description="The page you are looking for does not exist. Learn more about our business, mission, and team."
      url="https://yourdomain.com/404"
      key="404-page-not-found"
    />
    <section className="not-found-section">
      <h1 className="not-found-title">404 - Page Not Found</h1>
      <p className="not-found-message">Oops! The page you are looking for does not exist.</p>
    </section>
  </Layout>
);

export default NotFoundPage;