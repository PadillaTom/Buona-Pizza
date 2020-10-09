import React from 'react';

import { NewsContext } from '../Context/NewsContext';

const NewsDetails = () => {
  const { news } = React.useContext(NewsContext);
  console.log(news);
  return (
    <section className='section news-section'>
      <div className='section-center'>
        <div className='section-title'>
          <h2>News</h2>
        </div>
      </div>
    </section>
  );
};

export default NewsDetails;
