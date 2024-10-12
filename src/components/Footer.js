import React from "react";
import "../styles/layout.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Your Business Name. All rights reserved.</p>
        <ul className="social-links">
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
