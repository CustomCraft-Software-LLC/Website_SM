import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter } from "react-icons/fa";
import "../styles/contact.css";

const Contact = () => {
  const address = "123 Business Lane, Suite 400, City, Country";

  const mapLink = (address) => {
    const encodedAddress = encodeURIComponent(address);
    const userAgent = navigator.userAgent.toLowerCase();

    if (userAgent.includes("android")) {
      return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    } else if (userAgent.includes("iphone") || userAgent.includes("ipad")) {
      return `http://maps.apple.com/?q=${encodedAddress}`;
    } else if (userAgent.includes("windows")) {
      return `https://www.bing.com/maps?q=${encodedAddress}`;
    }

    return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  };

  return (
    <Layout>
      <SEO 
        title="Contact Us" 
        description="Reach out to us for any inquiries or business opportunities. We're excited to connect with you!"
        url="https://yourdomain.com/contact"
        keywords={["contact", "inquiries", "business", "your business name"]}
      />

      <section className="contact-section">
        <div className="contact-wrapper">
          <div className="contact-header">
            <h1 className="contact-title">Let’s Connect</h1>
            <p className="contact-description">
              Whether you have a question or are interested in working with us, we're just a message away.
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-form-area">
              <ContactForm />
            </div>

            <div className="contact-details">
              <h2 className="contact-subtitle">Other Ways to Reach Us</h2>
              <p>Feel free to contact us through any of the methods below:</p>
              <div className="contact-info">
                <p><FaEnvelope aria-hidden="true" /> Email: <a href="mailto:info@yourdomain.com">info@yourdomain.com</a></p>
                <p><FaPhone aria-hidden="true" /> Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
                <p>
                  <FaMapMarkerAlt aria-hidden="true" /> Address: 
                  <a href={mapLink(address)} target="_blank" rel="noopener noreferrer"> {address}</a>
                </p>
              </div>
              <div className="contact-social">
                <h3 className="social-title">Follow Us:</h3>
                <a href="https://facebook.com" className="social-link" target="_blank" rel="noopener noreferrer"><FaFacebook aria-hidden="true" /> Facebook</a>
                <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer"><FaTwitter aria-hidden="true" /> Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;