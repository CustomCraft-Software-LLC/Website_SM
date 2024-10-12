import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout";

const License = ({ pageContext }) => {
  const { licenseContent } = pageContext; 

  return (
    <Layout>
      <SEO 
        title="License" 
        description="Read the license information and terms of use for our services."
        url="https://yourdomain.com/license"
        key="license, terms, conditions, your business name"
      />
      
      <section>
        <h1>License Information</h1>
        {licenseContent ? (
          <pre>{licenseContent}</pre>  
        ) : (
          <p>Unable to load the license at this time.</p> 
        )}
      </section>
    </Layout>
  );
};

export default License;