import React, { useContext, useState, useEffect } from 'react';
import DomainContext from '../context/DomainContext';
import { close2, arrowRight } from '../assets/icons';
import CustomRadioButton from '../components/CustomRadioButton';
import { options } from '../constants';
import { Slide, toast } from 'react-toastify';

const ContactForm = () => {
  const { showForm, setShowForm } = useContext(DomainContext);
  const [selectedOption, setSelectedOption] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [showForm]);

  const [formData, setFormData] = useState({
    services: selectedOption,
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleOptionChange = (event) => {
    const { value } = event.target;

    setSelectedOption(value);
    setFormData(prevState => ({
      ...prevState,
      services: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = 'post-contact-form';
    setLoading(true);
    try {
      const response = await fetch('https://smtmcapital.com.np/contactus/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setLoading(false);
        toast.success("Email sent successfully", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          transition: Slide,
          toastId
        });
      } else {
        setLoading(false);
        toast.error('Could not submit the form, please try again later', {
          position: "top-left",
          toastId
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    setSelectedOption('');
    setFormData({
      services: '',
      name: '',
      company: '',
      phone: '',
      email: '',
      message: '',
    });
  };

  if (showForm) {
    return (
      <div className='fixed top-0 left-0 w-full h-full flex justify-center p-5 md:p-0 md:justify-end items-center bg-white md:bg-opacity-70 z-50'>
        <div className={`relative overflow-y-scroll bg-[#F9F9F9] rounded-l-2xl h-full w-full md:w-1/2 p-8 shadow-lg ${showForm ? 'slide-left' : ''}`}>
          <div className='absolute right-4 top-4 bg-white rounded-full p-2'>
            <img
              src={close2}
              alt="close"
              className='cursor-pointer'
              onClick={() => setShowForm(false)}
            />
          </div>

          <form onSubmit={handleSubmit} className='flex flex-col gap-12'>

            <div className="flex flex-col gap-4">
              <label htmlFor="services" className='label'>How can we help?</label>
              <div className='flex flex-wrap gap-3'>
                {options.map((option, index) => (
                  <CustomRadioButton
                    id={option.label}
                    key={index}
                    name="services"
                    label={option.label}
                    value={option.value}
                    checked={selectedOption === option.value}
                    onChange={handleOptionChange}
                  />
                ))}
              </div>
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
              <label htmlFor="phone" className='label'>PHONE *</label>
              <input
                type="number"
                id="phone"
                name="phone"
                value={formData.phone}
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
              <label htmlFor="message" className='label mb-2'>A brief description of your project:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder='tell us your idea'
                className='bg-[#FFFFFF] rounded-2xl p-4'
                rows="4"
              />
            </div>

            <div className='flex justify-end'>
              <button className='flex gap-3 items-center bg-[#0000FF] text-white px-10 py-4 rounded-3xl text-[18px] font-normal'>
                {loading ? 'LOADING...' :
                  (
                    <>
                      SUBMIT
                      <img src={arrowRight} alt="arrow" />
                    </>
                  )
                }
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
