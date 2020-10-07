import React from 'react';
import Banner from '../Components/Banner';
import Discounts from '../Components/Discounts';
import Services from '../Components/Services';
const home = () => {
  return (
    <section className='section'>
      <Banner></Banner>
      <Services></Services>
      <Discounts></Discounts>
    </section>
  );
};

export default home;
