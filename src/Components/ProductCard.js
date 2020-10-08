import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useStateValue } from '../Context/CartContext';

// Main:
const ProductCard = ({ title, imageUrl, price, page }) => {
  // Add to cart:
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  const addToBasket = () => {
    dispatch({
      type: 'ADD_BASKET',
      item: {
        title,
        imageUrl,
        price,
        page,
      },
    });
  };

  const history = useHistory();
  // Main:
  return (
    <article className='single-product'>
      <img src={imageUrl} alt={page} className='product-img' />
      <AiOutlineShoppingCart
        className='single-prod-cart'
        onClick={() => {
          addToBasket();
          history.push('/cart');
        }}
      ></AiOutlineShoppingCart>
      <div className='product-info'>
        <h2 className='product-title'>{title}</h2>
        <p className='product-price'>
          <small>$</small> {price}
        </p>
        <Link to={`menu/${page}`} className='btn-primary btn-card'>
          Details
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;
