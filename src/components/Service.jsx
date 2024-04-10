import React from 'react'

const Service = ({ data, isFirst, isLast }) => {
  return (
    <div className={`flex flex-col justify-start gap-12 p-6 bg-[#F9F9F9] rounded-3xl ${isFirst && 'lg:row-span-2'} ${isLast && 'lg:col-span-2'}`}>
      <p className='title2'>
        {data.title}
      </p>

      <p className='description w-full'>
        {data.description}
      </p>

      <div className='flex flex-wrap gap-2'>
        {data.tags.map((tag) => (
          <p key={tag} className="px-4 py-2 text-[8px] sm:text-sm rounded-3xl border-[0.5px] border-black">{tag}</p>
        ))}
      </div>
    </div>
  )
}

export default Service