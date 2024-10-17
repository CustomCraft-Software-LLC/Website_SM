import React, { useState } from "react";
import { Link } from "gatsby";
import "../styles/layout.css";
import { FaBars, FaTimes } from "react-icons/fa";

const NavLinks = ({ onLinkClick }) => (
  <ul className="nav-links">
    <li><Link to="/" onClick={onLinkClick}>Home</Link></li>
    <li><Link to="/about" onClick={onLinkClick}>About</Link></li>
    <li><Link to="/pricing" onClick={onLinkClick}>Pricing</Link></li>
    <li><Link to="/contact" onClick={onLinkClick}>Contact</Link></li>
    <li><Link to="/license" onClick={onLinkClick}>License</Link></li>
  </ul>
);

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const closeMenuOnLinkClick = () => {
    setIsMobile(false);
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">Your Business Name</Link>
        <nav className={isMobile ? "nav-links-mobile" : "nav-links"}>
          <NavLinks onLinkClick={closeMenuOnLinkClick} />
        </nav>
        <button
          className="mobile-menu-icon"
          onClick={toggleMobileMenu}
          aria-label={isMobile ? "Close menu" : "Open menu"}
        >
          {isMobile ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;

