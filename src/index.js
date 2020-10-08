import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Context:
import MenuProvider from './Context/MenuContext';
import { CartProvider } from './Context/CartContext';

ReactDOM.render(
  <MenuProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </MenuProvider>,
  document.getElementById('root')
);
