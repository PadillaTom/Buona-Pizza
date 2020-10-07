import React, { useEffect, useState } from 'react';
import ProductCard from '../Components/ProductCard';
import db from '../firebase';

// Products llevan PROPS!

const Menu = () => {
  // State:
  const [pizze, setPizze] = useState([]);

  // useEffect to fetch Pizzas:
  // 1) Collection --> Menu
  // 2) DOCS --> Each Pizza
  // 3) DATA --> Pizza Info
  useEffect(() => {
    db.collection('menu').onSnapshot((snapshot) => {
      setPizze(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  // Main:
  return (
    <section className='section menu-section'>
      <div className='section-center'>
        <div className='section-title'>
          <h2>Our Menu</h2>
        </div>
        <div className='products-container'>
          {pizze.map(({ id, page, title, price, description, imageUrl }) => (
            <ProductCard
              key={id}
              id={page}
              title={title}
              price={price}
              description={description}
              imageUrl={imageUrl}
            ></ProductCard>
          ))}

          {/* Capresse */}
        </div>
      </div>
    </section>
  );
};

export default Menu;
