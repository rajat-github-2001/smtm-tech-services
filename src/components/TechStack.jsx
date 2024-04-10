import React from 'react'

const TechStack = ({ data }) => {
  return (
    <div className='grid grid-cols-2 gap-10 md:flex-row md:gap-20'>
      <p className='title4'>
        {data.title}
      </p>

      <div className="flex flex-wrap justify-start items-center gap-4">
        {data.list.map((item) => (
          <p key={item} className='stack-text py-2 px-5 bg-[#F2F0F0] rounded-3xl'>{item}</p>
        ))}
      </div>
    </div>
  )
}

export default TechStack