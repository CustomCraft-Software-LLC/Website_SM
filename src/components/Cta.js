import React from "react";
import { Box, Typography, Button } from "@mui/material";
import "../styles/cta.css";

const Cta = () => (
  <section className="cta-section">
    <Box textAlign="center" sx={{ padding: 3 }}>
      <Typography variant="h4" className="cta-heading">Ready to get started?</Typography>
      <Typography variant="body1" className="cta-description">
        Contact us today to learn more about how we can help you achieve your business goals.
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        href="/Website_SM/contact" 
        className="btn-primary"
        sx={{ marginTop: 2 }}
      >
        Contact Us
      </Button>
    </Box>
  </section>
);

export default Cta;