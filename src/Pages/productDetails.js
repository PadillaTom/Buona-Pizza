import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Loading from '../Components/Loading';
// Context:
import { MenuContext } from '../Context/MenuContext';
import { useStateValue } from '../Context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { pizze } = useContext(MenuContext);
  const pizza = pizze.find((pizza) => pizza.page === id);
  const [{ basket }, dispatch] = useStateValue();

  if (pizze.length === 0) {
    return <Loading></Loading>;
  } else {
    const { title, imageUrl, description, price, page, amount, id } = pizza;
    // Add
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
              addToBasket();
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
