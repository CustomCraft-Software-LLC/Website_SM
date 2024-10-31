import React from "react";
import { Box, Typography, Link, Grid } from "@mui/material";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";
import "../styles/layout.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Box className="container" sx={{ padding: 3, backgroundColor: '#f8f8f8' }}>
        <Grid container spacing={2} className="footer-content">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Contact Us</Typography>
            <Typography>
              <FaPhone />
              <Link href="tel:+1234567890" aria-label="Phone number"> +123-456-7890</Link>
            </Typography>
            <Typography>
              <FaEnvelope />
              <Link href="mailto:info@yourbusiness.com" aria-label="Email address"> info@yourbusiness.com</Link>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Business Hours</Typography>
            <Typography>Mon - Fri: 9:00 AM - 5:00 PM</Typography>
            <Typography>Sat - Sun: Closed</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Follow Us</Typography>
            <Box component="ul" className="social-links" sx={{ listStyle: 'none', padding: 0 }}>
              <li>
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </Link>
              </li>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Useful Links</Typography>
            <Box component="ul" className="footer-links" sx={{ listStyle: 'none', padding: 0 }}>
              <li><Link href="/privacy-policy" aria-label="Privacy Policy">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" aria-label="Terms of Service">Terms of Service</Link></li>
              <li><Link href="/faq" aria-label="FAQ">FAQ</Link></li>
            </Box>
          </Grid>
        </Grid>

        <Box className="footer-bottom" sx={{ marginTop: 2, textAlign: 'center' }}>
          <Typography variant="body2">© {new Date().getFullYear()} Your Business Name. All rights reserved.</Typography>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
