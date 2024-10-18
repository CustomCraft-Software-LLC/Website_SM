import React, { useState } from "react";
import { Link } from "gatsby";
import "../styles/layout.css";
import { FaBars, FaTimes } from "react-icons/fa";

const NavLinks = ({ onLinkClick }) => (
  <div className="header__nav-links">
    <Link to="/" onClick={onLinkClick} className="header__nav-link">Home</Link>
    <Link to="/about" onClick={onLinkClick} className="header__nav-link">About</Link>
    <Link to="/pricing" onClick={onLinkClick} className="header__nav-link">Pricing</Link>
    <Link to="/faq" onClick={onLinkClick} className="header__nav-link">FAQ</Link>
    <Link to="/contact" onClick={onLinkClick} className="header__nav-link">Contact</Link>
  </div>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">Your Business Name</Link>
        
        {/* Navigation Links */}
        <nav className={`header__nav ${isMobileMenuOpen ? "header__nav--mobile-open" : ""}`}>
          <NavLinks onLinkClick={closeMobileMenu} />
        </nav>
        
        {/* Mobile Menu Toggle Button */}
        <button
          className="header__mobile-menu-btn"
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

