import React from "react";
import { graphql } from "gatsby";
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const Products = ({ data }) => {
  const products = data.allShopifyProduct.nodes;

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>Our Products</Typography>
      <Grid container spacing={4}>
        {products.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={product.images[0]?.localFile.childImageSharp.gatsbyImageData.images.fallback.src}
                alt={product.title}
              />
              <CardContent>
                <Typography variant="h6">{product.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {product.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href={`/product/${product.handle}`}
                  sx={{ mt: 2 }}
                >
                  View Product
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export const query = graphql`
  {
    allShopifyProduct {
      nodes {
        id
        title
        description
        handle
        images {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 300)
            }
          }
        }
      }
    }
  }
`;

export default Products;