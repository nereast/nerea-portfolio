import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom';

import numberZero from "../assets/mika/mika-zero.svg";
import numberOne from "../assets/mika/mika-one.svg";
import numberTwo from "../assets/mika/mika-two.svg";
import numberThree from "../assets/mika/mika-three.svg";
import numberFour from "../assets/mika/mika-four.svg";
import numberFive from "../assets/mika/mika-five.svg";
import numberSix from "../assets/mika/mika-six.svg";
import numberSeven from "../assets/mika/mika-seven.svg";
import numberEight from "../assets/mika/mika-eight.svg";
import numberNine from "../assets/mika/mika-nine.svg";


export const Mika = ({ coverImage }) => {

    return (

        <div>
            <Header />
            <div className=''>

                <div className='px-[50px] pt-[150px] md:pt-[100px] md:pb-[100px] xl:pb-[100px] grid grid-rows-[15vh_1fr] md:grid-rows-1 md:grid-cols-[40%_60%]'>
                    <h1 className='text-[25px] md:text-[40px] xl:text-[50px] leading-[27px] md:leading-[42px] xl:leading-[52px] text-black font-bold font-title	pb-[25px]'>
                        Typographic Rhythms: <br></br>A Bold Exploration Inspired by Mika's Musical World
                    </h1>
                    <div className=''>
                        <p className='text-start text-[15px] md:text-[25px] md:leading-[30px] xl:text-[30px] xl:leading-[34px] text-black font-normal font-paragraph mb-[25px]'>
                            This typography project explores the intersection of music and design by creating a set of custom numerals inspired by the vibrant world of pop artist Mika. Drawing from the circular forms of vinyl records and Mika’s eclectic musical aesthetic, the project aimed to develop a playful yet functional typeface.
                        </p>
                        <div className='grid grid-cols-[150px] grid-rows-1 gap-[20px] my-[50px] md:m-0'>
                            <span className='rounded-full border-green border-[2px] flex justify-center'>
                                <p className='text-green font-paragraph font-medium text-[20px]'>Experimental</p>
                            </span>
                        </div>
                    </div>
                </div>

                <img class="w-screen h-[50vh] md:h-[100vh] object-cover" src={coverImage} alt="Cover of the project" title="Cover image" />





                <div className='p-[50px] md:pt-[100px] md:pb-[100px] xl:pb-[100px] grid grid-rows-[8vh_1fr] md:grid-rows-1 md:grid-cols-[30%_70%]'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] text-black font-bold font-title pb-[25px]'>PROJECT <br></br>OVERVIEW</h2>

                    
                    <p className='text-start text-[15px] xl:text-[25px] text-black font-bold font-paragraph mb-[20px]'>
                        This experimental typography project involved designing numbers inspired by vinyl records and the playful, eclectic style of pop artist Mika. The goal was to capture the energy and aesthetic of his music through bold, colorful, and dynamic numerals that reflect his whimsical yet structured approach.
                    </p>
                </div>


                <div className='p-[50px] md:pt-[100px] md:pb-[100px] xl:pb-[100px] grid grid-rows-[8vh_1fr] md:grid-rows-1 md:grid-cols-[30%_70%]'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] text-black font-bold font-title pb-[25px]'>CHALLENGE <br></br>& SOLUTION</h2>



                    <div>
                        <h3 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[35px] xl:leading-[37px] text-green font-bold font-title pb-[25px]'>
                            The challenge was to create numerals that reflected the lively and rhythmic feel of Mika's music while maintaining clarity and function.
                        </h3>
                        <p className='text-start text-[15px] xl:text-[25px] text-black font-bold font-paragraph mb-[20px]'>
                            The solution involved blending circular, fluid shapes reminiscent of vinyl records with Mika's bold color palette, resulting in a set of numbers that are playful, energetic, and visually striking but still legible and usable as a typeface.
                        </p>
                    </div>

                </div>



                

                <div className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-[50%_50%] gap-[25px] px-[50px] pb-[50px] md:pb-[100px]'>
                    <img className="object-cover h-[350px] md:h-auto w-auto rounded-[20px]" src={numberZero} />
                    <img className="object-cover h-[350px] md:h-auto w-auto rounded-[20px]" src={numberOne} />
                </div>


                <div className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-[50%_50%] gap-[25px] px-[50px] pb-[50px] md:pb-[100px]'>
                    <img className="object-cover h-[350px] md:h-auto w-auto rounded-[20px]" src={numberTwo} />
                    <img className="object-cover h-[350px] md:h-auto w-auto rounded-[20px]" src={numberThree} />
                </div>


                <div className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-[50%_50%] gap-[25px] px-[50px] pb-[50px] md:pb-[100px]'>
                    <img className="object-cover h-[350px] md:h-auto w-auto rounded-[20px]" src={numberFour} />
                    <img className="object-cover h-[350px] md:h-auto w-auto rounded-[20px]" src={numberFive} />
                </div>


                <div className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-[50%_50%] gap-[25px] px-[50px] pb-[50px] md:pb-[100px]'>
                    <img className="object-cover h-[350px] md:h-auto w-auto rounded-[20px]" src={numberSix} />
                    <img className="object-cover h-[350px] md:h-auto w-auto rounded-[20px]" src={numberSeven} />
                </div>


                <div className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-[50%_50%] gap-[25px] px-[50px] pb-[50px] md:pb-[100px]'>
                    <img className="object-cover h-[350px] md:h-auto w-auto rounded-[20px]" src={numberEight} />
                    <img className="object-cover h-[350px] md:h-auto  w-auto rounded-[20px]" src={numberNine} />
                </div>

            </div>
            <div className='p-[50px] flex justify-center'>
                <Link to="/projects/itear">
                    <p className='text-black font-bold text-[60px] leading-[62px] font-title'>Next Project</p>
                </Link>
            </div>
            <Footer/>
        </div>
    )
}