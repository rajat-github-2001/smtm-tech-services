import React, { useState } from 'react';
import { workText, workImages } from '../constants';
import { hand, laptop1, laptop2 } from '../assets/images/index'

const Work = () => {
  const [showImgModal, setShowImgModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const expandImage = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowImgModal(true);
    document.body.style.overflow = 'hidden';
  }

  const closeModal = () => {
    setShowImgModal(false);
    document.body.style.overflow = '';
  }

  return (
    <>
      <section>
        <div className='relative'>
          <div id='process' className='flex flex-col items-center px-6 mb-9'>
            <p className='title1'>
              {workText.title}
            </p>
          </div>
          <div className='grid grid-cols-5 grid-rows-2 gap-2 place-items-center overflow-hidden'>
            {workImages.map((workImage, index) => (
              <div className='w-[302px] h-[655px]'>
                <img
                  src={workImage.image}
                  alt={index}
                  key={index}
                  onClick={() => expandImage(workImage.image)}
                  className='object-scale-down cursor-pointer'
                />
              </div>
            ))}
          </div>

          <div className="absolute bottom-0 right-1/4">
            <img src={hand} alt="hand" />
          </div>
        </div>
        <div className="flex flex-row gap-2 justify-center items-start mt-5">
          <img src={laptop1} alt="laptop1" />
          <img src={laptop2} alt="laptop2" />
        </div>
      </section>

      {showImgModal && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div className="max-w-xl p-4 bg-white rounded shadow-lg">
            <img src={selectedImage} alt="Expanded Image" className="w-full" />
            <button
              className="absolute top-0 right-0 m-4 text-white"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Work