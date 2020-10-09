import React, { useContext } from 'react';
import ProductCard from '../Components/ProductCard';
import { MenuContext } from '../Context/MenuContext';
// Products llevan PROPS!

const Menu = () => {
  // USE CONTEXT ----->
  const { pizze } = useContext(MenuContext);

  // Main:
  return (
    <section className='section menu-section'>
      <div className='section-center'>
        <div className='section-title'>
          <h2>Our Menu</h2>
        </div>
        <div className='products-container'>
          {pizze.map((pizza) => (
            <ProductCard key={pizza.id} {...pizza}></ProductCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
