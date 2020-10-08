import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Context:
import MenuProvider from './Context/MenuContext';
import { CartProvider } from './Context/CartContext';
import reducer, { initialState } from './Context/reducer';

ReactDOM.render(
  <MenuProvider>
    <CartProvider initialState={initialState} reducer={reducer}>
      <App />
    </CartProvider>
  </MenuProvider>,
  document.getElementById('root')
);
