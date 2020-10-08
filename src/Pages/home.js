import React from 'react';
import Banner from '../Components/Banner';
import Discounts from '../Components/Discounts';
import PromoProducts from '../Components/PromoProducts';
import Services from '../Components/Services';
const home = () => {
  return (
    <section className='section home-sect'>
      <Banner></Banner>
      <Services></Services>
      <PromoProducts></PromoProducts>
      <Discounts></Discounts>
    </section>
  );
};

export default home;
