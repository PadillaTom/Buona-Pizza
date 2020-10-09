import React, { useContext, useReducer } from 'react';

// Main Context:
export const CartContext = React.createContext();

export function CartProvider({ children, reducer, initialState }) {
  // Main:
  return (
    <CartContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </CartContext.Provider>
  );
}

// Function to use inside Components, to acces data.
export const useStateValue = () => useContext(CartContext);
