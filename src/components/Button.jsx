import React from 'react'

export const Button = ({ href, text }) => {
  return (
    <a href={href} target="_blank" className="relative after:absolute after:bottom-[10px] after:left-0 after:h-[5px] after:w-full after:origin-bottom-left after:scale-x-100 after:bg-yellow after:transition-transform after:duration-150 after:ease-in-out hover:after:origin-bottom-right hover:after:scale-x-0">
      {text}
    </a>
  )
}
