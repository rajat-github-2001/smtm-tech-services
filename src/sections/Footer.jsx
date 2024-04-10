import React from 'react';
import { copyright, footerLogo, arrowLeftUp } from '../assets/icons';
import { footerText } from '../constants';

const Footer = () => {
  return (
    <div className='flex flex-col xl:flex-row-reverse xl:justify-between gap-6 pt-16 pb-36 px-12 items-start bg-[#141516] rounded-t-3xl'>
      <div className='relative mt-6 lg:mt-8 lg:mr-8'>
        <a className='bg-white text-sm px-6 py-3 lg:px-8 lg:py-5 rounded-3xl hover:animate-pulse' href="">Start Something New</a>
        <img src={arrowLeftUp} alt="arrow" className='absolute w-10 right-[-24px] top-[-38px]' />
      </div>

      <div className="flex flex-col gap-6">
        <p className='footer-heading w-[420px]'>{footerText.title}</p>

        <p className='footer-description w-[260px] sm:w-[460px] md:w-[560px] lg:w-[760px]'>{footerText.description}</p>

        <div className='flex flex-row items-center gap-2'>
          <img src={copyright} alt="copyright" />
          <p className='text-[#FEFBFBB2] font-medium text-xl'>smtmcapital</p>
        </div>
      </div>

      <div className="absolute bottom-0 right-0">
        <img src={footerLogo} alt="footer-logo" className='w-[260px] h-[60px] sm:w-[360px] sm:h-[80px] md:w-[460px] md:h-[90px] lg:w-[790px] lg:h-[200px]' />
      </div>
    </div>
  )
}

export default Footer