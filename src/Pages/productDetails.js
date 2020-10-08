import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { MenuContext } from '../Context/MenuContext';
import Loading from '../Components/Loading';

const ProductDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { pizze } = useContext(MenuContext);
  const pizza = pizze.find((pizza) => pizza.page === id);

  if (pizze.length === 0) {
    return <Loading></Loading>;
  } else {
    const { title, imageUrl, description, price, page } = pizza;
    return (
      <section className='section desc-section'>
        <div className='section-center'>
          <div className='section-title'>
            <h2>{title}</h2>
          </div>
          <div className='img-desc-container'>
            <img src={imageUrl} alt={page} className='description-img' />
          </div>
          <h4 className='description-info'>{description}</h4>
          <h5 className='description-price'>
            <small>$</small>
            {price}
          </h5>
          <button
            className='btn-primary btn-desc'
            onClick={() => {
              history.push('/cart');
            }}
          >
            Add to Cart
          </button>
        </div>
      </section>
    );
  }
};

export default ProductDetails;
