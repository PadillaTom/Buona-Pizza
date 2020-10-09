import React from 'react';
import LatestCard from './LatestCard';
import { NewsContext } from '../Context/NewsContext';

// Icons:
import { TiArrowBack, TiArrowForward } from 'react-icons/ti';

const LatestNews = () => {
  const { latest } = React.useContext(NewsContext);
  return (
    <section className='section latest-section'>
      <div className='latest-news-header'>
        <h2 className='latest-news-title'>Latest News</h2>
        <div className='latest-header-arrows'>
          <TiArrowBack></TiArrowBack>
          <TiArrowForward></TiArrowForward>
        </div>
      </div>

      {latest.map((item) => {
        return (
          <LatestCard key={item.id} {...item} id='promo-card'></LatestCard>
        );
      })}
    </section>
  );
};

export default LatestNews;
