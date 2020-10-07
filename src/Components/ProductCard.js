import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ title, description, imageUrl, price, page }) => {
  // Main:
  return (
    <article className='single-product'>
      <img src={imageUrl} alt={page} className='product-img' />
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
