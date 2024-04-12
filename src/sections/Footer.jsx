import React, { useContext } from 'react';
import { copyright, footerLogo, arrowLeftUp } from '../assets/icons';
import { footerText } from '../constants';
import DomainContext from '../context/DomainContext';

const Footer = () => {
  const { setShowForm } = useContext(DomainContext);

  return (
    <section id='footer'>
      <div className='flex flex-row justify-between gap-6 pt-16 pb-36 px-12 items-start bg-[#141516] rounded-t-3xl'>
        <div className="flex flex-col gap-6">
          <p className='footer-heading w-[420px]'>{footerText.title}</p>

          <p className='footer-description w-[260px] sm:w-[460px] md:w-[560px] lg:w-[760px]'>{footerText.description}</p>

          <div className='lg:hidden relative mt-10 mb-16'>
            <button className='bg-white text-sm px-6 py-3 lg:px-8 lg:py-5 rounded-3xl hover:animate-pulse' onClick={() => setShowForm(true)}>Start Something New</button>
            <img src={arrowLeftUp} alt="arrow" className='absolute w-10 left-[158px] top-[-32px]' />
          </div>

          <div className="flex flex-col mb-20">
            <p className="text-[#FEFBFBB2] font-medium text-xl">info@smtmcapital.com.np</p>
            <p className="text-[#FEFBFBB2] font-medium text-xl">+977 1 4540783</p>
          </div>

          <div className='flex flex-row items-center gap-2'>
            <img src={copyright} alt="copyright" />
            <p className='text-[#FEFBFBB2] font-medium text-xl'>smtmcapital</p>
          </div>
        </div>

        <div className='hidden lg:block relative mt-8 mr-8'>
          <button className='bg-white text-sm px-6 py-3 lg:px-8 lg:py-5 rounded-3xl hover:animate-pulse' onClick={() => setShowForm(true)}>Start Something New</button>
          <img src={arrowLeftUp} alt="arrow" className='absolute w-10 right-[-20px] top-[-32px]' />
        </div>

        <div className="absolute bottom-0 right-0">
          <img src={footerLogo} alt="footer-logo" className='w-[360px] h-[80px] md:w-[460px] md:h-[90px] lg:w-[790px] lg:h-[200px]' />
        </div>
      </div>
    </section>
  )
}

export default Footer