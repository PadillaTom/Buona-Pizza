import React from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useStateValue } from '../Context/CartContext';

// Main:
const PromoCard = ({ id, title, imageUrl, price, page, amount }) => {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_BASKET',
      item: {
        title,
        imageUrl,
        price,
        page,
        amount,
        id,
      },
    });
  };
  // Main:
  return (
    <article className='promo-card'>
      <div className='promo-img-container'>
        <div className='promo-card-overlay'></div>
        <img src={imageUrl} alt={page} className='promo-img' />
        <AiOutlineShoppingCart
          className='promo-cart-icon'
          onClick={() => {
            addToBasket();
            history.push('/cart');
          }}
        ></AiOutlineShoppingCart>
      </div>
      <div className='promo-info'>
        <h2 className='promo-pizza-title'>{title}</h2>
        <p className='promo-price'>
          <small>$</small> {price}
        </p>
      </div>
    </article>
  );
};

export default PromoCard;
