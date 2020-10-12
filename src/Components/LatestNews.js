import React , {useState} from 'react';
import LatestCard from './LatestCard';
import { NewsContext } from '../Context/NewsContext';

// Icons:
import { TiArrowBack, TiArrowForward } from 'react-icons/ti';

const LatestNews = () => {
  const { latest } = React.useContext(NewsContext);
  const [sliderItem, setSliderItem] = useState(latest)
 
   return (
    <section className='section latest-section'>
      <div className='latest-news-header'>
        <h2 className='latest-news-title'>Latest News</h2>
     
      </div>
<div className="latest-cards-container">
      {latest.map((item) => {
        return (
          <div className="latest-card-container" key={item.id}>
          <LatestCard key={item.id} {...item}></LatestCard>
          </div>
        );
      })}
      </div>
    </section>
  );
};

export default LatestNews;
