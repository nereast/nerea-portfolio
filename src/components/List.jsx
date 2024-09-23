import React from 'react'

export const List = ({text}) => {
  return (
    
    <li className='p-[30px_15px_30px_15px] rounded-[15px] h-[90px] basis-1/2 md:w-4/12 xl:w-2/12 mb-[20px] md:mr-[20px] bg-green flex items-center justify-center'>
        <p className='md:text-[15px] xl:text-[20px] text-center text-white font-bold font-paragraph m-0'>{text}</p>
    </li>
  )
}
