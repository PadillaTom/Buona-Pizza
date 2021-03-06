import React from 'react';
import Banner from '../Components/Banner';
import Discounts from '../Components/Discounts';
import LatestNews from '../Components/LatestNews';
import Newsletter from '../Components/Newsletter';
import PromoProducts from '../Components/PromoProducts';
import Services from '../Components/Services';
import SliderMain from '../Slider/SliderMain';

// Main:
const home = () => {
  return (
    <section className='section home-sect'>
      <Banner></Banner>
      <Services></Services>
      <PromoProducts></PromoProducts>
      <SliderMain></SliderMain>
      <Discounts></Discounts>
      <LatestNews></LatestNews>
      <Newsletter></Newsletter>
    </section>
  );
};

export default home;
