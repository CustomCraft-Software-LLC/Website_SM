import React from "react";
import "../styles/layout.css";
// Import icons from react-icons
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Your Business Name. All rights reserved.</p>
        <ul className="social-links">
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook /> Facebook
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter /> Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
