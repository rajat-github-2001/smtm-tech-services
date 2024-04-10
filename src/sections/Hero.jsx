import React from 'react';
import { heroText } from '../constants';
import { arrowLeft } from '../assets/icons';
import heroImage from '../assets/images/hero-image.png';
import shadow from '../assets/images/shadow.svg';

const Hero = () => {
  return (
    <section className='w-full bg-[#F9F9F9] rounded-b-3xl px-8 py-9'>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
          <p className="flex flex-col gap-8 w-full sm:w-[65%] xl:w-[50%]">
            <p className="flex flex-col heading">
              <p>{heroText.heading1}</p>
              <p>{heroText.heading2}</p>
            </p>
            <p className='description'>
              {heroText.description}
            </p>
          </p>

          <div className='flex flex-col gap-14 items-center'>
            <img src={heroImage} alt="heroImage" className="w-[223px] h-[205px] md:w-[323px] md:h-[305px] xl:w-[423px] xl:h-[405px] 2xl:w-[523px] 2xl:h-[505px]" />

            <img src={shadow} alt="shadow" />
          </div>
        </div>

        <div className='flex flex-row justify-start items-center gap-6'>
          <p className='text-[16px] lg:text-[24px]  font-medium leading-normal'>{heroText.share}</p>

          <img src={arrowLeft} alt="arrow" className='w-[30px] h-[27px] cursor-pointer hover:translate-y-[-4px] transition ease-in-out'/>
        </div>
      </div>
    </section>
  )
}
export default Hero 