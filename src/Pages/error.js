import React from 'react';
import { Link } from 'react-router-dom';

const error = () => {
  return (
    <section className='section error-sect'>
      <div className='error-container'>
        <h1>Oops! its a dead end.</h1>
        <Link to='/' className='btn-primary error-btn'>
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default error;
