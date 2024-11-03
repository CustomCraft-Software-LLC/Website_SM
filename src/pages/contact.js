import React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import { Box, Container, Typography, IconButton, Link, Stack } from "@mui/material";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const address = "123 Business Lane, Suite 400, City, Country";
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <Layout>
      <Seo 
        title="Contact Us" 
        description="Reach out to us for any inquiries or business opportunities. We're excited to connect with you!"
        url="https://yourdomain.com/contact"
        keywords="contact, inquiries, business, your business name"
      />

      <Container maxWidth="md" sx={{ py: 6 }}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h3" component="h1" gutterBottom>
            Let’s Connect
          </Typography>
          <Typography variant="body1">
            Whether you have a question or are interested in working with us, we're just a message away.
          </Typography>
        </Box>

        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={4}>
          <Box flex="1">
            <ContactForm />
          </Box>

          <Box flex="1">
            <Box textAlign="center" mb={2}>
              <Typography variant="h4" gutterBottom>Other Ways to Reach Us</Typography>
              <Typography variant="body2">
                Feel free to contact us through any of the methods below:
              </Typography>
            </Box>

            <Stack spacing={2} alignItems="center">
              <Box display="flex" alignItems="center" gap={1}>
                <FaEnvelope />
                <Link href="mailto:info@yourdomain.com" underline="hover" color="inherit">
                  info@yourdomain.com
                </Link>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <FaPhone />
                <Link href="tel:+1234567890" underline="hover" color="inherit">
                  +1 (234) 567-890
                </Link>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <FaMapMarkerAlt />
                <Link href={mapHref} target="_blank" rel="noopener noreferrer" underline="hover" color="inherit">
                  {address}
                </Link>
              </Box>
            </Stack>

            <Box textAlign="center" mt={4}>
              <Typography variant="h6">Follow Us:</Typography>
              <Box display="flex" justifyContent="center" gap={2} mt={1}>
                <IconButton href="https://facebook.com" target="_blank" rel="noopener noreferrer" color="primary">
                  <FaFacebook />
                </IconButton>
                <IconButton href="https://twitter.com" target="_blank" rel="noopener noreferrer" color="primary">
                  <FaTwitter />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default Contact;