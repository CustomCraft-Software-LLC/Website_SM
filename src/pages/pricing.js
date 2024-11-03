import React from "react";
import { Container, Box, Typography, Button, Card, CardContent, Stack } from "@mui/material";
import Seo from "../components/Seo";
import Layout from "../components/Layout";

const ItemCard = ({ title, price, description, buttonText, onButtonClick }) => (
  <Card sx={{ maxWidth: 320, textAlign: 'center', borderRadius: 2, boxShadow: 3, mx: 'auto' }}>
    <CardContent>
      <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold', mb: 2 }}>
        {price}
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
        {description}
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        fullWidth 
        onClick={onButtonClick}
        sx={{ fontWeight: 'bold', mt: 2 }}
      >
        {buttonText}
      </Button>
    </CardContent>
  </Card>
);

const Pricing = () => (
  <Layout>
    <Seo
      title="Grocery Store Pricing"
      description="Explore a selection of popular grocery items at affordable prices."
      url="https://yourdomain.com/grocery-pricing"
      keywords={["grocery items", "apples", "chips", "milk", "noodles", "grocery store pricing"]}
    />
    <Container maxWidth="lg" sx={{ textAlign: 'center', py: 8 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Grocery Store Pricing
        </Typography>
        <Typography variant="body1">
          Browse our selection of fresh produce, snacks, and essentials, available at great prices.
        </Typography>
      </Box>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{ flexWrap: 'wrap', gap: 4 }}
      >
        <ItemCard
          title="Apples"
          price="$1.99/lb"
          description="Crisp, fresh apples perfect for snacking or baking."
          buttonText="Buy Now"
          onButtonClick={() => alert("Apples added to cart")}
        />
        <ItemCard
          title="Chips"
          price="$2.99"
          description="Classic potato chips with a satisfying crunch."
          buttonText="Buy Now"
          onButtonClick={() => alert("Chips added to cart")}
        />
        <ItemCard
          title="Noodles"
          price="$1.50"
          description="Instant noodles for a quick and tasty meal."
          buttonText="Buy Now"
          onButtonClick={() => alert("Noodles added to cart")}
        />
        <ItemCard
          title="Milk"
          price="$3.49/gallon"
          description="Fresh milk, ideal for cereal, coffee, and more."
          buttonText="Buy Now"
          onButtonClick={() => alert("Milk added to cart")}
        />
      </Stack>
    </Container>
  </Layout>
);

export default Pricing;