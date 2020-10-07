import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, title, description, imageUrl, price }) => {
  // Main:
  return (
    <article className='single-product'>
      <img src={imageUrl} alt={title} className='product-img' />
      <div className='product-info'>
        <h2 className='product-title'>{title}</h2>
        <p className='product-price'>
          <small>$</small> {price}
        </p>
        <Link to={`menu/${id}`} className='btn-primary btn-card'>
          Details
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;
