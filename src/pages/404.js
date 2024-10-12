import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout";

const NotFoundPage = () => (
  <Layout>
    <SEO 
      title="404 - Page Not Found" 
      description="The page you are looking for does not exist. Learn more about our business, mission, and team."
      url="https://yourdomain.com/404"
      key="404, page not found, error"
    />
    <h1>404 - Page Not Found</h1>
    <p>Oops! The page you are looking for does not exist.</p>
  </Layout>
);

export default NotFoundPage;