import React from 'react';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';
import { FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
const Services = () => {
  return (
    <section className='section'>
      <div className='services-container'>
        {/* Single Service */}
        <article className='single-service'>
          <GiFullMotorcycleHelmet></GiFullMotorcycleHelmet>
          <h4>Delivery</h4>
        </article>
        {/* End Single Serviec */}
        {/* Single Service */}
        <article className='single-service'>
          <FiMapPin></FiMapPin>
          <h4>
            Multiple <br /> Stores
          </h4>
        </article>
        {/* End Single Serviec */}
        {/* Single Service */}
        <article className='single-service'>
          <FaWhatsapp></FaWhatsapp>
          <h4>Order by Text!</h4>
        </article>
        {/* End Single Serviec */}
      </div>
    </section>
  );
};

export default Services;
