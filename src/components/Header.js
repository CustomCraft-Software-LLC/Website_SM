import React from "react";
import { Link } from "gatsby";
import "../styles/layout.css"; // Import styles for header

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          Your Business Name
        </Link>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;