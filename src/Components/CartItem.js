import React from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';

// Main:
const CartItem = ({ image, title, price, amount }) => {
  //Context:

  // Main:
  return (
    <article className='cart-item'>
      <img src={image} alt={title} className='cart-item-img' />
      <div className='cart-info-container'>
        <h4>{title}</h4>
        <h5>${price}</h5>
        <button className='btn-remove'>Remove</button>
      </div>
      <div className='cart-amount-container'>
        <button className='btn-amount'>
          <FaAngleUp></FaAngleUp>
        </button>
        <p className='cart-amount'>{amount}</p>
        <button className='btn-amount'>
          <FaAngleDown></FaAngleDown>
        </button>
      </div>
    </article>
  );
};

export default CartItem;
