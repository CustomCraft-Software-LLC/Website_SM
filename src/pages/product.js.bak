import React, { useState } from "react";
import { graphql, navigate } from "gatsby";
import { Container, Typography, Button, CardMedia, Box, CircularProgress } from "@mui/material";

const Product = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const product = data.shopifyProduct;

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch('/.netlify/functions/create-checkout', {
        method: 'POST',
        body: JSON.stringify({
          items: [{ variantId: product.variants[0].shopifyId, quantity: 1 }],
        }),
      });

      const { checkoutUrl } = await response.json();
      window.location.href = checkoutUrl;
    } catch (error) {
      console.error("Checkout error:", error);
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>{product.title}</Typography>
      <CardMedia
        component="img"
        height="400"
        image={product.images[0]?.localFile.childImageSharp.gatsbyImageData.images.fallback.src}
        alt={product.title}
      />
      <Typography variant="body1" paragraph>{product.description}</Typography>
      <Box mt={3}>
        <Button variant="contained" color="primary" onClick={handleCheckout} disabled={loading}>
          {loading ? <CircularProgress size={24} color="inherit" /> : "Buy Now"}
        </Button>
      </Box>
    </Container>
  );
};

export const query = graphql`
  query ($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      title
      description
      images {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 600)
          }
        }
      }
      variants {
        shopifyId
      }
    }
  }
`;

export default Product;