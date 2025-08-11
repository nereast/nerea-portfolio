import React from 'react'
import { Link } from 'react-router-dom';

export const Card = ({ projectName, category, coverImage, href, color }) => {

  const bgColors = {
    green: "bg-green",
    orange: "bg-orange",
    red: "bg-red",
    yellow: "bg-yellow",
  };
  
  let bgColorClass = bgColors[color] || "bg-gray-500"; 

  return (
    <Link to={href} className='group'>
      <section
        className="rounded-[10px] bg-cover h-[300px] md:h-[240px] xl:h-[480px] group-hover:bg-green flex items-end"
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${coverImage})`,
        }}
      >
        <section className={`${bgColorClass} w-full rounded-[0_0_10px_10px] p-[20px]`}>
          <h3 className='font-title text-white group-hover:text-black text-[25px] md:text-[30px] xl:text-[40px] font-bold'>
            {projectName}
          </h3>
          <p className='font-paragraph text-white group-hover:text-black text-[15px] xl:text-[20px] font-bold'>
            {category}
          </p>
        </section>
      </section>
    </Link>
  );
}
