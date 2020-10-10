import React from 'react';
import {useParams, Link} from "react-router-dom"
import { NewsContext } from '../Context/NewsContext';
import Loading from "../Components/Loading"

const NewsDetails = () => {
  const { id } = useParams();
  const { news } = React.useContext(NewsContext);
  const notice = news.find((notice) => notice.id === parseInt(id));

    if(news.length === 0){
return <Loading></Loading>
    } else {
      const {date,  imageUrl, title, shortInfo} = notice
  return (
    <section className='section news-section'>
        <div className='section-title'>
          <h2>News</h2>
        </div>
      <div className='section-center'>
        <div className="newsdetails-container">
          <h1>{title}</h1>
          <img src={imageUrl} alt="" className="newsdetails-img"/>
          <h6>{date}</h6>
          <p>{shortInfo}</p>
                  </div>
        <div className="newsdetails-link">
          <Link to="/" >Back to Home</Link>
          </div>
      </div>
    </section>
  )};
};

export default NewsDetails;
