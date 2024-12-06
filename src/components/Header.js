import React, { useState } from "react";
import { Link } from "gatsby";
import { FaBars, FaTimes } from "react-icons/fa";
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";

const NavLinks = ({ onLinkClick }) => (
  <List sx={{ display: "flex", gap: "16px", padding: 0, flexDirection: { xs: 'column', md: 'row' } }}>
    {[
      { text: "Home", to: "/" },
      { text: "About", to: "/about" },
      { text: "Pricing", to: "/pricing" },
      { text: "FAQ", to: "/faq" },
      { text: "Contact", to: "/contact" }
    ].map(({ text, to }) => (
      <ListItem
        button
        component={Link}
        to={to}
        onClick={onLinkClick}
        key={text}
        sx={{
          color: "#003",
          padding: "8px 16px",
          "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
        }}
      >
        <ListItemText primary={text} />
      </ListItem>
    ))}
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
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#f8f8f8",
        color: "#003",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", padding: "0 24px" }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            color: "#003",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Your Business Name
        </Typography>

        <nav sx={{ display: { xs: "none", md: "flex" } }}>
          <NavLinks onLinkClick={closeMobileMenu} />
        </nav>

        <IconButton
          edge="end"
          color="inherit"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          sx={{
            display: { xs: "inline-flex", md: "none" },
            color: "#fff",
          }}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </IconButton>

        <Drawer
          anchor="right"
          open={isMobileMenuOpen}
          onClose={closeMobileMenu}
          sx={{
            "& .MuiDrawer-paper": {
              width: "250px",
              backgroundColor: "#333",
              color: "#003",
              paddingTop: "20px",
            },
          }}
        >
          <NavLinks onLinkClick={closeMobileMenu} />
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;