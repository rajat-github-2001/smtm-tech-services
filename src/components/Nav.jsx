import React, { useContext, useState } from 'react';
import { hamburger, close } from '../assets/icons';
import headerLogo from '../assets/images/logo.png'
import { navLinks } from '../constants';
import DomainContext from '../context/DomainContext';

const Nav = () => {
  const [hidden, setHidden] = useState(false);
  const { setShowForm } = useContext(DomainContext);

  return (
    <header className='padding-x py-8 m-0 w-full bg-[#F9F9F9] rounded-t-3xl'>
      <nav className="flex justify-between items-end  max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={200} height={44} />
        </a>

        <ul className='flex-1 hidden md:flex justify-center gap-9'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='text-sm font-normal leading-4'>{item.label}</a>
            </li>
          ))}
        </ul>

        <div className='bg-[#0000FF] hover:bg-blue-700 hidden md:block text-sm font-semibold leading-3 text-white rounded-3xl px-5 py-2 mb-[-4px]'>
          <button onClick={() => setShowForm(true)}>Start Something New</button>
        </div>

        <div className="block md:hidden cursor-pointer">
          <img src={hidden ? close : hamburger} alt="hamburger" width={25} height={25} onClick={() => setHidden(prev => !prev)} />
        </div>

        {hidden &&
          <div className="flex z-30 bg-black text-white justify-center text-left rounded-lg absolute top-28 right-0 scale-up-center">
            <ul className="px-10 py-4">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className='text-sm font-normal leading-4'>{item.label}</a>
                </li>
              ))}
              <li className='bg-[#0000FF] text-sm font-semibold leading-3 text-white rounded-3xl px-5 py-2 mt-3'>
                <button onClick={() => setShowForm(true)}>Start Something New</button>
              </li>
            </ul>
          </div>
        }
      </nav>
    </header>
  )
}

export default Nav