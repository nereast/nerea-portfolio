import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom';

import background from "../assets/imagen-de-fondo-para-los-projectos.jpg";
import layout from "../assets/descubre/layout.jpg";
import layoutTwo from "../assets/descubre/layout-two.jpg";
import detail from "../assets/descubre/magazine-details.jpg";
import collage from "../assets/descubre/collage.jpg";


export const Echo = ({ coverImage }) => {

    return (

        <div className='bg-beige'>
            <Header />
            <div className='px-[25px] md:px-[50px] pt-[200px] md:pb-[50px] xl:pt-[300px] xl:pb-[100px] flex flex-col xl:flex-row bg-cover bg-right xl:bg-top-left' style={{ backgroundImage: `url(${background})` }}>
                <div className='xl:w-6/12'>
                    <h1 className='text-[25px] md:text-[40px] xl:text-[50px] leading-[27px] md:leading-[42px] xl:leading-[52px] text-black font-bold font-title mb-[20px] md:mb-[30px]'>
                        Echo: an application for listening to streaming music.
                    </h1>
                </div>
                <div className='xl:w-1/12'></div>
                <div className='xl:w-5/12'>
                    <p className='text-start text-[15px] md:text-[25px] md:leading-[30px] xl:text-[30px] xl:leading-[34px] text-black font-normal font-paragraph xl:mb-[25px]'>
                        The project focused on the user experience (UX) and user interface (UI) design of the application.
                    </p>
                    <div className="flex flex-row gap-[10px] md:gap-[20px] my-[50px] md:my-0 flex-wrap justify-start mt-[20px] md:mt-[30px] xl:mt-[60px]">
                        {["UX/UI", "Layout", "Development"].map((text) => (
                            <div key={text} className="rounded-[20px] border-green border-[2px] flex justify-center items-center p-[15px]">
                                <p className="text-green font-paragraph font-medium text-[15px] md:text-[20px]">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* <img class="w-screen h-[50vh] md:h-[100vh] object-cover" src={coverImage} alt="Imagen que muestra la portada de la revista llamada Descubre" title="Imagen de la portada de la revista" /> */}

            <div className='flex flex-col lg:flex-row px-[25px] py-[50px] md:px-[50px] xl:py-[100px]'>
                <div className='lg:w-4/12'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] text-black font-bold font-title pb-[25px]'>PROJECT <br className='hidden xl:block'></br>OVERVIEW</h2>
                </div>
                <div className='lg:w-1/12'></div>
                <div className='lg:w-8/12'>
                    <p className='text-start text-[15px] xl:text-[25px] text-black font-normal font-paragraph mb-[20px]'>
                        Echo is a music streaming platform that aims to offer a simple
                        and effective user experience, and to this end it has an intuitive and easy-to-use interface.

                        From the beginning, the app was designed to be intuitive from
                        the very first use. In addition, the music suggested had to match the user's tastes and the interface had to convey a sense of enjoyment and comfort.
                    </p>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <div className='lg:w-4/12'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] text-black font-bold font-title pb-[25px]'>CHALLENGE</h2>
                </div>
                <div className='lg:w-1/12'></div>
                <div className='lg:w-8/12'>
                    <h3 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[35px] xl:leading-[37px] text-green font-bold font-title pb-[25px]'>
                        Once the objectives had been defined and the system had been designed and documented, 
                        the design of the pages was planned and wireframes were drawn up for all the pages 
                        of the application.
                    </h3>
                    <p className='text-start text-[15px] xl:text-[25px] text-black font-normal font-paragraph mb-[20px]'>
                        For the layout of the wireframes, a 16 px grid was followed, which helped to create and link all the components that had been designed beforehand.
                    </p>
                </div>
            </div>

            
            <div className='flex flex-col lg:flex-row px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <div className='lg:w-4/12'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] text-black font-bold font-title pb-[25px]'>SOLUTION</h2>
                </div>
                <div className='lg:w-1/12'></div>
                <div className='lg:w-8/12'>
                    <h3 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[35px] xl:leading-[37px] text-green font-bold font-title pb-[25px]'>
                        After creating all the templates, it was time to add the images and colours to finalise the prototyping of the platform.
                    </h3>
                    <p className='text-start text-[15px] xl:text-[25px] text-black font-bold font-paragraph mb-[20px]'>
                        In addition, much emphasis was placed on the feature that sets this app apart from other music streaming platforms: instead of simply offering predefined playlists, it will adapt to the musical tastes of each user by means of practical questions. In this way, personalised playlists tailored to the musical interests of each user will be created.
                    </p>
                </div>
            </div>
            <div className='px-[50px] pb-[50px] md:pb-[100px]'>
                <img className="object-cover w-screen h-[350px] md:h-[800px] rounded-[50px]" src={layoutTwo} alt='Imagen que muestra la portada de unas de las secciones de la revista de Descubre' title='Imagen de una portada de las secciones' />
            </div>

            <div className='flex flex-col lg:flex-row px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <div className='lg:w-4/12'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] text-black font-bold font-title pb-[25px]'>NEXT STEPS</h2>
                </div>
                <div className='lg:w-1/12'></div>
                <div className='lg:w-8/12'>
                    <h3 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[35px] xl:leading-[37px] text-black font-bold font-title pb-[25px]'>
                        When the Figma project was completed, the Echo platform was created using React technology. 
                        On the one hand, the project can be viewed here and, on the other hand, the development project can be viewed by clicking here.
                    </h3>
                </div>
            </div>

            <div className='flex justify-start md:justify-center gap-[25px] px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <img className='bg-orange w-[111px] md:w-[200px] h-[100px] rounded-[25px]' src='' alt='Imagen que hace referencia al proyecto de Itear' title='Imagen de Itear' />
                <Link className='flex items-center' to="/projects/itear">
                    <p className='text-black font-bold text-[40px] leading-[42px] md:text-[50px] md-xl:text-[60px] font-title'>Next Project</p>
                </Link>
            </div>

            <Footer />
        </div>
    )
}