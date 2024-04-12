import React, { useContext, useState } from 'react';
import DomainContext from '../context/DomainContext';
import { close2, arrowRight } from '../assets/icons';

const ContactForm = () => {
  const { showForm, setShowForm } = useContext(DomainContext);

  const [formData, setFormData] = useState({
    // help: '',
    name: '',
    company: '',
    email: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      company: '',
      email: '',
      description: '',
    });
  };

  if (showForm) {
    return (
      <div className='fixed top-0 left-0 w-full h-full flex justify-center p-5 md:p-0 md:justify-end items-center bg-white md:bg-opacity-70 z-50'>
        <div className={`relative bg-[#F9F9F9] rounded-l-2xl h-full w-full md:w-1/2 p-8 shadow-lg ${showForm ? 'slide-left' : ''}`}>
          <div className='absolute right-4 top-4 bg-white rounded-full p-2'>
            <img
              src={close2}
              alt="close"
              className='cursor-pointer'
              onClick={() => setShowForm(false)}
            />
          </div>

          <form onSubmit={handleSubmit} className='flex flex-col gap-12'>

            <div className="flex flex-col">
              <label htmlFor="help" className='label'>How can we help?</label>
            </div>

            <div className='flex flex-col'>
              <label htmlFor="name" className='label'>NAME *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className='bg-transparent border-b-2 border-[#DCDCDC] outline-none focus:border-black'
                required
              />
            </div>

            <div className='flex flex-col'>
              <label htmlFor="company" className='label'>COMPANY *</label>
              <input
                type="company"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className='bg-transparent border-b-2 border-[#DCDCDC] outline-none focus:border-black'
                required
              />
            </div>

            <div className='flex flex-col'>
              <label htmlFor="email" className='label'>EMAIL *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className='bg-transparent border-b-2 border-[#DCDCDC] outline-none focus:border-black'
                required
              />
            </div>

            <div className='flex flex-col'>
              <label htmlFor="description" className='label mb-2'>A brief description of your project:</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder='tell us your idea'
                className='bg-[#FFFFFF] rounded-2xl p-4'
                rows="6"
              />
            </div>

            <div className='flex justify-end'>
              <button className='flex gap-3 items-center bg-[#0000FF] text-white px-10 py-4 rounded-3xl text-[18px] font-normal'>
                SUBMIT 
                <img src={arrowRight} alt="arrow" />
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default ContactForm;
