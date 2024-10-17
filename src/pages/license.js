import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import "../styles/license.css";

const License = ({ pageContext }) => {
  const { licenseContent } = pageContext;

  return (
    <Layout>
      <SEO 
        title="License" 
        description="Read the license information and terms of use for our services."
        url="https://yourdomain.com/license"
        keywords={["license", "terms", "conditions", "your business name"]}
      />
      
      <section className="license-section">
        <h1 className="license-title">License Information</h1>
        <div className="license-content-wrapper">
          {licenseContent ? (
            <pre className="license-content">{licenseContent}</pre>
          ) : (
            <p className="license-error">Unable to load the license at this time.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default License;