import React from 'react';
import { back } from '../assets/icons';

const Process = ({ data, isLast }) => {
  return (
    <div className={`flex flex-col justify-start items-start md:flex-row md:justify-start md:items-start gap-6 ${isLast && 'lg:col-span-2 lg:justify-center lg:items-start'}`}>
      <div className='flex flex-row gap-6 items-center'>
        <img src={back} alt="back"  className='w-5 h-5 sm:w-6 sm:h-6'/>

        <p className='title3 w-46 md:w-36'>
          {data.title}
        </p>
      </div>


      <div className='description'>
        <p className='text-justify w-[240px] sm:w-full md:w-[500px] lg:w-[240px] xl:w-[340px] 2xl:w-[400px]'>{data.description}</p>

        <ul role='list' className='marker:text-black list-disc pl-5 pt-3 mb-6'>
          {data.points &&
            data.points.map((point) => (
              <li>{point}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Process