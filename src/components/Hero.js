import React from "react";
import { Typography, Box, Button } from '@mui/material';
import "../styles/hero.css";

const Hero = () => (
  <header className="hero">
    <Box className="hero-content">
      <Typography variant="h1" className="hero-title">
        Welcome to Your Business Name
      </Typography>
      <Typography variant="body1" className="hero-description">
        We provide top-notch services to our clients with a focus on quality and customer satisfaction.
      </Typography>
      <Button
        href="/contact"
        className="btn-primary"
      >
        Get in Touch
      </Button>
    </Box>
  </header>
);

export default Hero;