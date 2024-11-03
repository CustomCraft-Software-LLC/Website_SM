import React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import { Box, Container, Typography, Grid, IconButton, Link, Stack } from "@mui/material";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const address = "123 Business Lane, Suite 400, City, Country";

  const mapLink = (address) => {
    const encodedAddress = encodeURIComponent(address);
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("android")) {
      return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    } else if (userAgent.includes("iphone") || userAgent.includes("ipad")) {
      return `http://maps.apple.com/?q=${encodedAddress}`;
    } else if (userAgent.includes("windows")) {
      return `https://www.bing.com/maps?q=${encodedAddress}`;
    }
    return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  };

  return (
    <Layout>
      <Seo 
        title="Contact Us" 
        description="Reach out to us for any inquiries or business opportunities. We're excited to connect with you!"
        url="https://yourdomain.com/contact"
        keywords={["contact", "inquiries", "business", "your business name"]}
      />

      <Container maxWidth="md" sx={{ py: 6 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Let’s Connect
          </Typography>
          <Typography variant="body1">
            Whether you have a question or are interested in working with us, we're just a message away.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <ContactForm />
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: "center", mb: 2 }}>
              <Typography variant="h4" component="h2" gutterBottom>
                Other Ways to Reach Us
              </Typography>
              <Typography variant="body2">
                Feel free to contact us through any of the methods below:
              </Typography>
            </Box>

            <Stack spacing={2} sx={{ alignItems: "center" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <FaEnvelope />
                <Link href="mailto:info@yourdomain.com" underline="hover" color="inherit">
                  info@yourdomain.com
                </Link>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <FaPhone />
                <Link href="tel:+1234567890" underline="hover" color="inherit">
                  +1 (234) 567-890
                </Link>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <FaMapMarkerAlt />
                <Link href={mapLink(address)} target="_blank" rel="noopener noreferrer" underline="hover" color="inherit">
                  {address}
                </Link>
              </Box>
            </Stack>

            <Box sx={{ textAlign: "center", mt: 4 }}>
              <Typography variant="h6">Follow Us:</Typography>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 1 }}>
                <IconButton component="a" href="https://facebook.com" target="_blank" rel="noopener noreferrer" color="primary">
                  <FaFacebook />
                </IconButton>
                <IconButton component="a" href="https://twitter.com" target="_blank" rel="noopener noreferrer" color="primary">
                  <FaTwitter />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Contact;