import React from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import "../styles/products.css";

// Updated product data with descriptions and alternative placeholder images
const productData = [
  {
    category: "Fruits",
    items: [
      { name: "Apple", price: "$1.00", description: "Crisp and juicy apples.", image: "https://via.placeholder.com/150?text=Apple" },
      { name: "Banana", price: "$0.50", description: "Sweet and ripe bananas.", image: "https://via.placeholder.com/150?text=Banana" }
    ]
  },
  {
    category: "Vegetables",
    items: [
      { name: "Carrot", price: "$0.70", description: "Fresh and crunchy carrots.", image: "https://via.placeholder.com/150?text=Carrot" },
      { name: "Broccoli", price: "$1.20", description: "Healthy green broccoli.", image: "https://via.placeholder.com/150?text=Broccoli" }
    ]
  },
  {
    category: "Dairy",
    items: [
      { name: "Milk", price: "$2.00", description: "Fresh cow's milk.", image: "https://via.placeholder.com/150?text=Milk" },
      { name: "Cheese", price: "$3.50", description: "Delicious cheddar cheese.", image: "https://via.placeholder.com/150?text=Cheese" }
    ]
  },
  {
    category: "Snacks",
    items: [
      { name: "Chips", price: "$1.50", description: "Crispy potato chips.", image: "https://via.placeholder.com/150?text=Chips" },
      { name: "Cookies", price: "$2.00", description: "Sweet chocolate cookies.", image: "https://via.placeholder.com/150?text=Cookies" }
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
          
          <Box 
            sx={{ 
              display: "flex", 
              flexWrap: "wrap", 
              gap: 3, 
              justifyContent: "center" 
            }}
          >
            {items.map(({ name, description, image }) => (
              <Box key={name} sx={{ maxWidth: 250 }}>
                <Card sx={{ maxWidth: 250, mx: "auto", borderRadius: "8px", boxShadow: 3 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt={name}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="h6" component="div" gutterBottom>
                      {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  </Layout>
);

export default Products;