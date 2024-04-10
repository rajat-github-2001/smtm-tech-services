import React from 'react';
import { clientIcons } from '../constants';

const Clients = () => {
  return (
    <section className="px-6">
      <div className='flex flex-col xl:flex-row justify-center items-center gap-12'>
        <p className="text-base xl:w-32">Amazing people we partner with</p>

        <div className='flex flex-wrap justify-center lg:flex-row gap-16'>
          {clientIcons.map((clientIcon) => (
            <img src={clientIcon.icon} alt={clientIcon.name} className='object-scale-down' />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Clients