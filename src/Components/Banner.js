import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <React.Fragment>
      <section className='section banner-section'>
        <div className='banner-info'>
          <h2>La vera pizza Italiana!</h2>
          <br />
          <Link to='/menu' className='btn-primary btn-banner'>
            Menu
          </Link>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Banner;
