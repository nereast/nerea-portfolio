import React from 'react'
import { Link } from 'react-router-dom';

export const Card = ({ projectName, category, coverImage, href }) => {

    return (


        <Link to={href} className='group'>
            <section className="rounded-[20px] p-[50px] bg-cover h-[300px] md:h-[240px] xl:h-[480px] group-hover:bg-green" style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url(${coverImage})` }}></section>
            <section className='mt-[25px]'>
                <h3 className='font-title text-black group-hover:text-green text-[25px] md:text-[30px] xl:text-[40px] font-bold'>{projectName}</h3>
                <p className='font-paragraph text-black group-hover:text-green text-[15px] xl:text-[20px] font-regular'>{category}</p>
            </section>
        </Link>



    )
}
