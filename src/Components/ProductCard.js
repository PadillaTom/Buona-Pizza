import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ key, title, description, imageUrl, price, page }) => {
  // Main:
  return (
    <article className='single-product'>
      <div className='img-container-firebase'>
        <img src={imageUrl} alt={page} className='product-img' />
      </div>
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
