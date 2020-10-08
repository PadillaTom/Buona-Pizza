import React from 'react';
import localcart from './localcart';

const CartContext = React.createContext();

function CartProvider({ children }) {
  //State:
  const [cart, SetCart] = React.useState(localcart);
  const [total, setTotal] = React.useState(0);
  const [cartItems, setCartItems] = React.useState(0);

  // Main:
  return (
    <CartContext.Provider value={{ cart, total, cartItems }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
