import React from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
// Context:
import { useStateValue } from '../Context/CartContext';
// Main:
const CartItem = ({ imageUrl, title, price, amount, id }) => {
  //Context:
  const [{ basket }, dispatch] = useStateValue();

  // Add Amount:
  const increaseAmount = () => {
    dispatch({
      type: 'INCREASE_AMOUNT',
      id: id,
    });
  };
  // Remove:
  const removeItem = () => {
    dispatch({
      type: 'REMOVE_BASKET',
      id: id,
    });
  };

  // Decrease Amount:
  const decreaseAmount = () => {
    if (amount === 1) {
      dispatch({
        type: 'REMOVE_BASKET',
        id: id,
      });
    } else {
      dispatch({
        type: 'DECREASE_AMOUNT',
        id: id,
      });
    }
  };

  // Main:
  return (
    <article className='cart-item'>
      <img src={imageUrl} alt={title} className='cart-item-img' />
      <div className='cart-info-container'>
        <h4>{title}</h4>
        <h5>${price}</h5>
        <button className='btn-remove' onClick={removeItem}>
          Remove
        </button>
      </div>
      <div className='cart-amount-container'>
        <button className='btn-amount' onClick={increaseAmount}>
          <FaAngleUp></FaAngleUp>
        </button>
        <p className='cart-amount'>{amount}</p>
        <button className='btn-amount' onClick={decreaseAmount}>
          <FaAngleDown></FaAngleDown>
        </button>
      </div>
    </article>
  );
};

export default CartItem;
