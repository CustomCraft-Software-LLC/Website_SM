import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);

  const addItem = async (item) => {
    const updatedCart = { ...cart, items: [...cart.items, item] };
    setCart(updatedCart);
  };

  const removeItem = (itemId) => {
    const updatedCart = { ...cart, items: cart.items.filter(item => item.id !== itemId) };
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart({ items: [] });
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};