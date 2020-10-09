import React from 'react';
import {Link} from "react-router-dom"

const LatestCard = ({
  id,
  featured,
  date,
  imageUrl,
  title,
  info,
  shortinfo,
}) => {
 
  return (
    <article className='latest-card'>
      <img src={imageUrl} alt='news' className='latest-img' />
      <div className='latest-info'>
        <p>{date}</p>
        <h4>{title}</h4>
        <h6>{info}</h6>
         <Link to={`news/${id}`} >
       <button className='btn-latest'>Read More...</button>
        </Link> 
      </div>
    </article>
  );
};

export default LatestCard;
