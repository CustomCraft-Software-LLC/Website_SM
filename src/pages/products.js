import React from 'react';
import { graphql } from 'gatsby';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const Products = ({ data }) => {
  const products = data.allShopifyProduct.nodes;

  return (
    <Grid container spacing={4}>
      {products.map(product => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={product.images[0].originalSrc}
              alt={product.title}
            />
            <CardContent>
              <Typography variant="h6">{product.title}</Typography>
              <Typography variant="body2" color="textSecondary">
                {product.description}
              </Typography>
              <Button variant="contained" color="primary" href={`/product/${product.handle}`}>
                View Product
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export const query = graphql`
  query ProductsQuery {
    allShopifyProduct {
      nodes {
        id
        title
        handle
        description
        images {
          originalSrc
        }
      }
    }
  }
`;

export default Products;