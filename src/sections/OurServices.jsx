import React from 'react';
import Service from '../components/Service';
import { ourServicesText, services } from '../constants';

const OurServices = () => {
  return (
    <section id='services'>
      <div className='flex flex-col px-6 mb-9'>
        <p className='title1'>
          {ourServicesText.title}
        </p>
        <p className='description'>
          {ourServicesText.description}
        </p>
      </div>

      <div className='grid grid-cols-1 grid-row-4 lg:grid-cols-3 gap-4'>
        {services.map((service, index) => (
          <Service 
            key={service.title} 
            data={service} 
            isFirst={index === 0}
            isLast={index === 3}
            />
        ))}
      </div>

    </section>
  )
}

export default OurServices