import React from 'react';
import Banner from '../Components/Banner';
import Discounts from '../Components/Discounts';
import LatestNews from '../Components/LatestNews';
import PromoProducts from '../Components/PromoProducts';
import Services from '../Components/Services';

// Main:
const home = () => {
  return (
    <section className='section home-sect'>
      <Banner></Banner>
      <Services></Services>
      <PromoProducts></PromoProducts>
      <Discounts></Discounts>
      <LatestNews></LatestNews>
    </section>
  );
};

export default home;
