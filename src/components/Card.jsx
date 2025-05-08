import React from 'react'
import { Link } from 'react-router-dom';

export const Card = ({ projectName, category, coverImage, href, color }) => {

    return (
        <Link to={href} className='group'>
            <section className="rounded-[20px] bg-cover h-[300px] md:h-[240px] xl:h-[480px] group-hover:bg-green flex items-end" style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url(${coverImage})` }}>
                <section className={`bg-${color} w-full rounded-[0_0_20px_20px] p-[20px]`}>
                    <h3 className='font-title text-white group-hover:text-black text-[25px] md:text-[30px] xl:text-[40px] font-bold'>{projectName}</h3>
                    <p className='font-paragraph text-white group-hover:text-black text-[15px] xl:text-[20px] font-bold'>{category}</p>
                </section>
            </section>
        </Link>
    )
}
