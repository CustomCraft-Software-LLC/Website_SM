import React, { useState } from 'react';
import client from '../functions/checkout';
import { Button } from '@mui/material';

const Checkout = () => {
  const [checkout, setCheckout] = useState(null);

  const createCheckout = async () => {
    const newCheckout = await client.checkout.create();
    setCheckout(newCheckout);
  };

  const addItemToCheckout = async (variantId, quantity) => {
    const lineItemsToAdd = [{ variantId, quantity }];
    const updatedCheckout = await client.checkout.addLineItems(
      checkout.id,
      lineItemsToAdd
    );
    setCheckout(updatedCheckout);
  };

  const redirectToCheckout = () => {
    if (checkout) {
      window.location.href = checkout.webUrl;
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={() => createCheckout()}>
        Create Checkout
      </Button>
      <Button
        variant="contained"
        onClick={() => addItemToCheckout('variant-id', 1)}
      >
        Add Item to Cart
      </Button>
      <Button variant="contained" onClick={redirectToCheckout}>
        Proceed to Checkout
      </Button>
    </div>
  );
};

export default Checkout;