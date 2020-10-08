import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <section className='section empty-sect'>
      <div className='section-center'>
        <div className='empty-container'>
          <h2>Empty Cart...</h2>
          <Link to='/menu' className='btn-primary btn-empty'>
            Fill it!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmptyCart;
