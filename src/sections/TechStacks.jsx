import React from 'react';
import { ourTechStacksText, techStacksData } from '../constants';
import TechStack from '../components/TechStack';

const TechStacks = () => {
  return (
    <section>
      <div id='process' className='flex flex-col items-center px-6 mb-9'>
        <p className='title1'>
          {ourTechStacksText.title}
        </p>
      </div>

      <div className='flex flex-col gap-10 bg-[#FAFAF9] p-12 rounded-3xl'>
        {techStacksData.map((data) => (
          <TechStack kay={data} data={data} />
        ))}
      </div>
    </section>
  )
}

export default TechStacks