import React from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
const PromoCard = ({ title, imageUrl, price, page }) => {
  const history = useHistory();
  // Main:
  return (
    <article className='promo-card'>
      <div className='promo-img-container'>
        <div className='promo-card-overlay'></div>
        <img src={imageUrl} alt={page} className='promo-img' />
        <AiOutlineShoppingCart
          className='promo-cart-icon'
          onClick={() => {
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
