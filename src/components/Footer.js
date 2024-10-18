import React from "react";
import "../styles/layout.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h4>Contact Us</h4>
            <p>
              <FaPhone /> 
              <a href="tel:+1234567890" aria-label="Phone number"> +123-456-7890</a>
            </p>
            <p>
              <FaEnvelope /> 
              <a href="mailto:info@yourbusiness.com" aria-label="Email address"> info@yourbusiness.com</a>
            </p>
          </div>
          <div className="footer-column">
            <h4>Business Hours</h4>
            <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
            <p>Sat - Sun: Closed</p>
          </div>
          <div className="footer-column">
            <h4>Follow Us</h4>
            <ul className="social-links">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Useful Links</h4>
            <ul className="footer-links">
              <li><a href="/privacy-policy" aria-label="Privacy Policy">Privacy Policy</a></li>
              <li><a href="/terms-of-service" aria-label="Terms of Service">Terms of Service</a></li>
              <li><a href="/faq" aria-label="FAQ">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Your Business Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
