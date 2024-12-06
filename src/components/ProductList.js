import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const ProductList = () => {
  /*
  const data = useStaticQuery(graphql`
    query {
      allShopifyProduct {
        nodes {
          id
          title
          description
          images {
            originalSrc
          }
          variants {
            price
          }
        }
      }
    }
  `);
  */

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {data.allShopifyProduct.nodes.map(product => (
        <Card key={product.id} sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={product.images[0].originalSrc}
            alt={product.title}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <Typography variant="body1" color="text.primary">
              Price: ${product.variants[0].price}
            </Typography>
          </CardContent>
          <Button variant="contained" color="primary">
            Add to Cart
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;