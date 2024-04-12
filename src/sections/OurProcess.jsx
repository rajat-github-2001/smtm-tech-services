import React from 'react';
import { ourProcessText, processes } from '../constants';
import Process from '../components/Process';
import { bgImage5 } from '../assets/images';

const OurProcess = () => {
  return (
    <section>
      <div id='our-process' className='flex flex-col px-6 mb-9'>
        <p className='title1'>
          {ourProcessText.title}
        </p>
        <p className='description'>
          {ourProcessText.description}
        </p>
      </div>

      <div className='relative bg-[#F8F5F2] rounded-3xl py-12 px-14 lg:grid lg:grid-cols-2 lg:grid-row-3 lg:gap-10'>
        {processes.map((process, index) => (
          <Process data={process} isLast={index === 4} />
        ))}

        <img
          src={bgImage5}
          alt="bgImage"
          className='md:absolute md:-bottom-10 md:right-16'
        />
      </div>
    </section>
  )
}

export default OurProcess