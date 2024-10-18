import React, { useState } from "react";
import { Link } from "gatsby";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/layout.css";

const NavLinks = ({ onLinkClick }) => (
  <div className="nav-links">
    <Link to="/" onClick={onLinkClick} className="nav-link">Home</Link>
    <Link to="/about" onClick={onLinkClick} className="nav-link">About</Link>
    <Link to="/pricing" onClick={onLinkClick} className="nav-link">Pricing</Link>
    <Link to="/faq" onClick={onLinkClick} className="nav-link">FAQ</Link>
    <Link to="/contact" onClick={onLinkClick} className="nav-link">Contact</Link>
  </div>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">Your Business Name</Link>
        
        <nav className={`header-nav ${isMobileMenuOpen ? "header-nav--open" : ""}`}>
          <NavLinks onLinkClick={closeMobileMenu} />
        </nav>
        
        <button
          className="header-mobile-btn"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;
