import React from 'react';

const Discounts = () => {
  const url =
    'https://firebasestorage.googleapis.com/v0/b/buona-pizza-b85d5.appspot.com/o/Discounts%2Ffridays.jpg?alt=media&token=65a4f768-d106-423a-9728-cd6f6108dc4c';

  return (
    <div className='discounts'>
      <div className='single-discount'>
        <div className='img-overlay'></div>
        <img src={url} alt='discount' className='discount-img'></img>
        <div className='discount-info'>
          <h3> It's Friday!</h3>
          <h5>25% Off</h5>
        </div>
      </div>
    </div>
  );
};

export default Discounts;
