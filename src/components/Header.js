import React, { useState } from "react";
import { Link } from "gatsby";
import { FaBars, FaTimes } from "react-icons/fa";
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import "../styles/layout.css";

const NavLinks = ({ onLinkClick }) => (
  <List>
    <ListItem button component={Link} to="/" onClick={onLinkClick}>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button component={Link} to="/about" onClick={onLinkClick}>
      <ListItemText primary="About" />
    </ListItem>
    <ListItem button component={Link} to="/pricing" onClick={onLinkClick}>
      <ListItemText primary="Pricing" />
    </ListItem>
    <ListItem button component={Link} to="/faq" onClick={onLinkClick}>
      <ListItemText primary="FAQ" />
    </ListItem>
    <ListItem button component={Link} to="/contact" onClick={onLinkClick}>
      <ListItemText primary="Contact" />
    </ListItem>
  </List>
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
    <AppBar position="static" className="header">
      <Toolbar className="header-container">
        <Typography variant="h6" component={Link} to="/" className="header-logo" sx={{ flexGrow: 1 }}>
          Your Business Name
        </Typography>

        <nav className="header-nav">
          <NavLinks onLinkClick={closeMobileMenu} />
        </nav>

        <IconButton
          edge="end"
          color="inherit"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </IconButton>

        <Drawer anchor="right" open={isMobileMenuOpen} onClose={closeMobileMenu}>
          <div className="drawer-content">
            <NavLinks onLinkClick={closeMobileMenu} />
          </div>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
