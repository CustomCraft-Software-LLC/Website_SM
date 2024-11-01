import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from "@mui/material";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import "../styles/products.css";

const productData = [
    { 
      category: "Fruits", 
      items: [
        { name: "Apple", price: "$1.00", image: "https://images.unsplash.com/photo-1571047405277-7217d4d1e104" },
        { name: "Banana", price: "$0.50", image: "https://images.unsplash.com/photo-1582491447388-3f6704b965f1" }
      ] 
    },
    { 
      category: "Vegetables", 
      items: [
        { name: "Carrot", price: "$0.70", image: "https://images.unsplash.com/photo-1542826438-8e3f44e6ec26" },
        { name: "Broccoli", price: "$1.20", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c0f" }
      ] 
    },
    { 
      category: "Dairy", 
      items: [
        { name: "Milk", price: "$2.00", image: "https://images.unsplash.com/photo-1581868167762-30f9c7c37832" },
        { name: "Cheese", price: "$3.50", image: "https://images.unsplash.com/photo-1622825686007-cd6c9abf569d" }
      ] 
    },
    { 
      category: "Snacks", 
      items: [
        { name: "Chips", price: "$1.50", image: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a" },
        { name: "Cookies", price: "$2.00", image: "https://images.unsplash.com/photo-1599815200769-4b9cfb58e994" }
      ] 
    },
  ];

const Products = () => (
  <Layout>
    <Seo 
      title="Our Products" 
      description="Explore a wide range of fresh and quality grocery products at our store."
      url="https://yourdomain.com/products"
      keywords="products, grocery, fruits, vegetables, dairy, snacks"
    />
    
    <Box sx={{ padding: "32px 24px", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Our Products
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "24px" }}>
        Discover a variety of fresh and high-quality grocery items.
      </Typography>

      {productData.map(({ category, items }) => (
        <Box key={category} sx={{ marginBottom: "32px" }}>
          <Typography variant="h5" sx={{ margin: "16px 0", fontWeight: "bold" }}>
            {category}
          </Typography>
          
          <Grid container spacing={3} justifyContent="center">
            {items.map(({ name, price, image }) => (
              <Grid item xs={12} sm={6} md={3} key={name}>
                <Card sx={{ maxWidth: 250, mx: "auto" }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt={name}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="h6">{name}</Typography>
                    <Typography color="textSecondary">{price}</Typography>
                    <Button variant="contained" color="primary" sx={{ marginTop: "8px" }}>
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  </Layout>
);

export default Products;