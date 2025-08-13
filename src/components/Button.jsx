import React from 'react'

export const Button = ({ href, text }) => {
  return (
    <a href={href} target="_blank"  class="relative inline-block h-auto">
      <span className='after:absolute after:bottom-0 after:left-0 after:h-[5px] after:w-full after:origin-bottom-left after:scale-x-100 after:bg-yellow lg:after:transition-transform lg:after:duration-150 lg:after:ease-in-out lg:hover:after:origin-bottom-right lg:hover:after:scale-x-0'>{text}</span>
    </a>
  )
}


