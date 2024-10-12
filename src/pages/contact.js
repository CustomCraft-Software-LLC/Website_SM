import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";

const Contact = () => (
  <Layout>
    <SEO 
      title="Contact Us" 
      description="Get in touch with us to learn more about our services or to start working together."
      url="https://yourdomain.com/contact"
      key="contact us, inquiries, business, your business name"
    />
    
    <section>
      <h1>Contact Us</h1>
      <p>
        Have any questions or inquiries? We're here to help! Fill out the form below, 
        and we'll get back to you as soon as possible.
      </p>

      <ContactForm />

      <h2>Other Ways to Reach Us</h2>
      <p>Email: <a href="mailto:info@yourdomain.com">info@yourdomain.com</a></p>
      <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
    </section>
  </Layout>
);

export default Contact;