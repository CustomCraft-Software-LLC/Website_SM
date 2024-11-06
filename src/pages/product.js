import React from 'react';
import { graphql } from 'gatsby';
import { Container, Typography, Button, Box } from '@mui/material';

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct;

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4">{product.title}</Typography>
        <img src={product.images[0].originalSrc} alt={product.title} style={{ maxWidth: '100%' }} />
        <Typography variant="body1" my={2}>{product.description}</Typography>
        <Typography variant="h5" color="secondary">${product.priceRange.minVariantPrice.amount}</Typography>
        <Button variant="contained" color="primary">Add to Cart</Button>
      </Box>
    </Container>
  );
};

export const query = graphql`
  query ProductQuery($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      title
      description
      images {
        originalSrc
      }
      priceRange {
        minVariantPrice {
          amount
        }
      }
    }
  }
`;

export default ProductPage;