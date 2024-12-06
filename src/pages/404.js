import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../components/Layout";

const NotFoundPage = () => (
  <Layout>
    <Seo 
      title="404 - Page Not Found" 
      description="The page you are looking for does not exist. Learn more about our business, mission, and team."
      url="https://yourdomain.com/404"
      key="404-page-not-found"
    />
    <Container maxWidth="sm" sx={{ textAlign: 'center', py: 8 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        Oops! The page you are looking for does not exist.
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        component={Link} 
        to="/" 
        sx={{ mt: 3 }}
      >
        Go to Homepage
      </Button>
    </Container>
  </Layout>
);

export default NotFoundPage;