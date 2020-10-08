import React from 'react';
import { MenuContext } from '../Context/MenuContext';
import PromoCard from './PromoCard';

const PromoProducts = () => {
  const { promo } = React.useContext(MenuContext);
  // console.log(promo); // Testeamos
  return (
    <React.Fragment>
      <div className='promo-title'>
        <h2>Most Wanted!</h2>
      </div>
      <div className='promo-container'>
        {promo.map((item) => {
          return (
            <PromoCard key={item.page} {...item} id='promo-card'></PromoCard>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default PromoProducts;
