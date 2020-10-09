import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Context:
import MenuProvider from './Context/MenuContext';
import { CartProvider } from './Context/CartContext';
import reducer, { initialState } from './Context/reducer';
import NewsProvider from './Context/NewsContext';

ReactDOM.render(
  <NewsProvider>
    <MenuProvider>
      <CartProvider initialState={initialState} reducer={reducer}>
        <App />
      </CartProvider>
    </MenuProvider>
  </NewsProvider>,
  document.getElementById('root')
);
