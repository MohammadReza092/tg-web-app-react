import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext({
  cart : [],
  isInCart : false,
  addToCart : (product) => {},
  addToCart : (product) => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(product => product.id !== productId));
  };

  const isInCart = (productId) => {
    return cart.some(product => product.id === productId);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
