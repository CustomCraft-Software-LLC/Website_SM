import React from "react";
import { Box, Typography, Link, Grid } from "@mui/material";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <Box sx={{ padding: 3, backgroundColor: '#f8f8f8' }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Contact Us</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <FaPhone />
              <Link href="tel:+1234567890" aria-label="Phone number" underline="none" sx={{ color: 'inherit' }}>
                +123-456-7890
              </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <FaEnvelope />
              <Link href="mailto:info@yourbusiness.com" aria-label="Email address" underline="none" sx={{ color: 'inherit' }}>
                info@yourbusiness.com
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Business Hours</Typography>
            <Typography variant="body2">Mon - Fri: 9:00 AM - 5:00 PM</Typography>
            <Typography variant="body2">Sat - Sun: Closed</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Follow Us</Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" sx={{ color: 'inherit' }}>
                <FaFacebook size={20} />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" sx={{ color: 'inherit' }}>
                <FaTwitter size={20} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" sx={{ color: 'inherit' }}>
                <FaLinkedin size={20} />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" sx={{ color: 'inherit' }}>
                <FaInstagram size={20} />
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Useful Links</Typography>
            <Box component="ul" sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li>
                <Link href="/privacy-policy" aria-label="Privacy Policy" underline="none" sx={{ color: 'inherit', display: 'block', mb: 0.5 }}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" aria-label="Terms of Service" underline="none" sx={{ color: 'inherit', display: 'block', mb: 0.5 }}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/Website_SM/faq" aria-label="FAQ" underline="none" sx={{ color: 'inherit', display: 'block' }}>
                  FAQ
                </Link>
              </li>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Typography variant="body2" color="textSecondary">
            © {new Date().getFullYear()} Your Business Name. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;