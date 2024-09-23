import React from 'react'

export const Button = ({href, text}) => {
  return (
      <a href={href} className='border-[3px] border-white rounded-[25px]'>
          <p className='p-[15px] text-center font-paragraph font-regular text-[20px] text-white'>{text}</p>
      </a>
  )
}
