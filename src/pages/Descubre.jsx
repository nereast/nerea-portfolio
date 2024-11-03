import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom';


import layout from "../assets/descubre/layout.jpg";
import layoutTwo from "../assets/descubre/layout-two.jpg";
import detail from "../assets/descubre/magazine-details.jpg";
import collage from "../assets/descubre/collage.jpg";


export const Descubre = ({ coverImage }) => {

    return (

        <div>
            <Header />
            <div className=''>

                <div className='px-[50px] pt-[150px] md:pt-[100px] md:pb-[100px] xl:pb-[100px] grid grid-rows-[10vh_1fr] md:grid-rows-1 md:grid-cols-[40%_60%]'>
                    <h1 className='text-[25px] md:text-[40px] xl:text-[50px] leading-[27px] md:leading-[42px] xl:leading-[52px] text-black font-bold font-title	pb-[25px]'>
                        Descubre: <br></br> Creation of a magazine.
                    </h1>
                    <div className=''>
                        <p className='text-start text-[15px] md:text-[25px] md:leading-[30px] xl:text-[30px] xl:leading-[34px] text-black font-normal font-paragraph mb-[25px]'>

                            The project consisted of creating <br></br> a new layout for a magazine.

                        </p>
                        <div className='grid grid-cols-[180px] grid-rows-1 gap-[20px] my-[50px] md:md-0'>
                            <span className='rounded-full border-green border-[2px] flex justify-center'>
                                <p className='text-green font-paragraph font-medium text-[20px]'>Editorial Design</p>
                            </span>
                        </div>
                    </div>
                </div>

                <img class="w-screen h-[50vh] md:h-[100vh] object-cover" src={coverImage} alt="Cover of the project" title="Cover image" />





                <div className='p-[50px] md:pt-[100px] md:pb-[100px] xl:pb-[100px] grid grid-rows-[8vh_1fr] md:grid-rows-1 md:grid-cols-[30%_70%]'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] text-black font-bold font-title pb-[25px]'>PROJECT <br></br>OVERVIEW</h2>
                    <p className='text-start text-[15px] xl:text-[25px] text-black font-bold font-paragraph mb-[20px]'>
                        Descubre is a monthly publication dedicated to exploring the rich tapestry of cultures around the world. Each issue of Descubre focuses on a different country, offering readers an in-depth look at its history, traditions, current events, and unique customs. From uncovering ancient civilizations to shedding light on modern-day developments, Descubre aims to educate and inspire curiosity about the diverse ways of life that shape our global community. With beautifully curated articles, stunning photography, and engaging stories, it serves as a window into the heart and soul of each nation, fostering understanding and appreciation of cultures from every corner of the world.
                    </p>
                </div>


                <div className='p-[50px] md:pt-[100px] md:pb-[100px] xl:pb-[100px] grid grid-rows-[8vh_1fr] md:grid-rows-1 md:grid-cols-[30%_70%]'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] text-black font-bold font-title pb-[25px]'>CHALLENGE <br></br>& SOLUTION</h2>
                    <div>
                        <h3 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[35px] xl:leading-[37px] text-green font-bold font-title pb-[25px]'>
                        The goal of the Descubre project was to design and create a magazine that not only informs but captivates readers through a blend of thoughtful content and aesthetically appealing design. 
                        </h3>
                        <p className='text-start text-[15px] xl:text-[25px] text-black font-bold font-paragraph mb-[20px]'>

                            Each issue of Descubre integrates interactive and visually stimulating elements like custom illustrations, and high-quality photography, which work together to enhance the reading experience. By consistently adhering to a cohesive editorial and design structure, the project resulted in a magazine that not only serves as a source of knowledge but also as a piece of art that reflects the beauty and diversity of global cultures.
                        </p>
                    </div>
                </div>



                <div className='px-[50px] pb-[50px] md:pb-[100px]'>
                    <img className="object-cover w-screen h-[350px] md:h-[600px] rounded-[20px]" src={layout} />
                </div>


                <div className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-[60%_40%] gap-[25px] px-[50px] pb-[50px] md:pb-[100px]'>
                    <img className="object-cover h-[350px] md:h-auto w-[600px] rounded-[20px]" src={detail} />
                    <img className="object-cover h-[320px] md:h-[450px] w-[450px] rounded-[20px]" src={collage} />
                </div>


                <div className='px-[50px] pb-[50px] md:pb-[100px]'>
                    <img className="object-cover w-screen h-[350px] md:h-[600px] rounded-[20px]" src={layoutTwo} />
                </div>


               


                



                


                
              


               

                
                








            </div>
            <div className='p-[50px] flex justify-center'>
                <Link to="/projects/mika">
                    <p className='text-black font-bold text-[60px] leading-[62px] font-title'>Next Project</p>
                </Link>
            </div>
            <Footer/>
        </div>
    )
}