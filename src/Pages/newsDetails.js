import React from 'react';
import {useParams} from "react-router-dom"
import { NewsContext } from '../Context/NewsContext';
import Loading from "../Components/Loading"

const NewsDetails = () => {
  const { id } = useParams();
  const { news } = React.useContext(NewsContext);
   const notice = news.find((notice) => notice.id === parseInt(id));
  console.log(notice);

    if(news.length === 0){
return <Loading></Loading>
    } else {
      const {date, featured, id, imageUrl, title, info, shortInfo} = notice
  return (
    <section className='section news-section'>
        <div className='section-title'>
          <h2>News</h2>
        </div>
      <div className='section-center'>
        <div className="newsdetail-title">
  <h1>{title}</h1>
        </div>
      </div>
    </section>
  )};
};

export default NewsDetails;
