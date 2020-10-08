import React from 'react';
import localcart from './localcart';

const CartContext = React.createContext();

function CartProvider({ children }) {
  //State:
  const [cart, setCart] = React.useState(localcart);
  const [total, setTotal] = React.useState(0);
  const [cartItems, setCartItems] = React.useState(0);

  // Remove Item:
  const removeItem = (id) => {};
  // Increase Amount:
  const increaseAmount = (id) => {};
  // Decrease Amount:
  const decreaseAmount = (id) => {};
  // Add to Cart:
  const addToCart = (id) => {};
  // Clear Cart:
  const clearCart = (id) => {};

  // Main:
  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        cartItems,
        removeItem,
        increaseAmount,
        decreaseAmount,
        clearCart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
