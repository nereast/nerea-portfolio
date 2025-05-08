import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

import background from "../assets/imagen-de-fondo-para-los-projectos.jpg";
import layout from "../assets/descubre/layout.jpg";
import layoutTwo from "../assets/descubre/layout-two.jpg";
import detail from "../assets/descubre/magazine-details.jpg";
import collage from "../assets/descubre/collage.jpg";


export const Descubre = ({ coverImage }) => {

    return (

        <div className='bg-beige'>
            <Header />
            <div className='px-[25px] md:px-[50px] pt-[200px] md:pb-[50px] xl:pt-[300px] xl:pb-[100px] flex flex-col xl:flex-row bg-cover bg-right xl:bg-top-left' style={{ backgroundImage: `url(${background})` }}>
                <div className='xl:w-6/12'>
                    <h1 className='text-[25px] md:text-[40px] xl:text-[50px] leading-[27px] md:leading-[42px] xl:leading-[52px] text-black font-bold font-title mb-[20px] md:mb-[30px]'>
                        Descubre: Creation of a magazine.
                    </h1>
                </div>
                <div className='xl:w-1/12'></div>
                <div className='xl:w-5/12'>
                    <p className='text-start text-[15px] md:text-[25px] md:leading-[30px] xl:text-[30px] xl:leading-[34px] text-black font-normal font-paragraph xl:mb-[25px]'>
                        The project consisted of creating a new layout for a magazine.
                    </p>
                    <div className="flex flex-row gap-[10px] md:gap-[20px] my-[50px] md:my-0 flex-wrap justify-start mt-[20px] md:mt-[30px] xl:mt-[60px]">
                        {["Editorial Design"].map((text) => (
                            <div key={text} className="rounded-[20px] border-green border-[2px] flex justify-center items-center p-[15px]">
                                <p className="text-green font-paragraph font-medium text-[15px] md:text-[20px]">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <img class="w-screen h-[50vh] md:h-[100vh] object-cover" src={coverImage} alt="Imagen que muestra la portada de la revista llamada Descubre" title="Imagen de la portada de la revista" />
            <div className='flex flex-col lg:flex-row px-[25px] py-[50px] md:px-[50px] xl:py-[100px]'>
                <div className='lg:w-4/12'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] text-black font-bold font-title pb-[25px]'>PROJECT <br className='hidden xl:block'></br>OVERVIEW</h2>
                </div>
                <div className='lg:w-1/12'></div>
                <div className='lg:w-8/12'>
                    <p className='text-start text-[15px] xl:text-[25px] text-black font-normal font-paragraph mb-[20px]'>
                        Descubre is a monthly publication dedicated to exploring the rich tapestry of cultures around the world. Each issue of Descubre focuses on a different country, offering readers an in-depth look at its history, traditions, current events, and unique customs. From uncovering ancient civilizations to shedding light on modern-day developments, Descubre aims to educate and inspire curiosity about the diverse ways of life that shape our global community. With beautifully curated articles, stunning photography, and engaging stories, it serves as a window into the heart and soul of each nation, fostering understanding and appreciation of cultures from every corner of the world.
                    </p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-[20px] px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <div className='w-full md:w-6/12'>
                    <img className="object-cover h-full w-full rounded-[50px]" src={detail} alt="Imagen que muestra una de las páginas de la revista maquetada en fondo gris" title="Imagen de una de las páginas de la revista" />
                </div>
                <div className='w-full md:w-6/12'>
                    <img className="object-cover h-full w-full rounded-[50px]" src={collage} alt="Imagen de un collage que se utiliza en una de las páginas de la revista" title="Imagen de un collage" />
                </div>
            </div>
            <div className='flex flex-col lg:flex-row px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <div className='lg:w-4/12'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] text-black font-bold font-title pb-[25px]'>CHALLENGE</h2>
                </div>
                <div className='lg:w-1/12'></div>
                <div className='lg:w-8/12'>
                    <h3 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[35px] xl:leading-[37px] text-green font-bold font-title pb-[25px]'>
                        The goal of the Descubre project was to design and create a magazine that not only informs but captivates readers through a blend of thoughtful content and aesthetically appealing design.
                    </h3>
                    <p className='text-start text-[15px] xl:text-[25px] text-black font-bold font-paragraph mb-[20px]'>
                    For the layout of the texts, illustrations and images, a grid was designed according to the needs of the project so that all the information would fit together well.
                    </p>
                </div>
            </div>
            <div className='px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <img className="object-cover w-screen h-[350px] md:h-[800px] rounded-[50px]" src={layout} alt='Imagen que presenta varias páginas de la misma revista en una perspectiva diagonal' title='Imagen que presenta la revista'/>
            </div>
            <div className='flex flex-col lg:flex-row px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <div className='lg:w-4/12'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] text-black font-bold font-title pb-[25px]'>SOLUTION</h2>
                </div>
                <div className='lg:w-1/12'></div>
                <div className='lg:w-8/12'>
                    <h3 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[35px] xl:leading-[37px] text-green font-bold font-title pb-[25px]'>
                       The design process started with the grid as a guide, and from there the pages were created until a satisfactory result was achieved.
                    </h3>
                    <p className='text-start text-[15px] xl:text-[25px] text-black font-bold font-paragraph mb-[20px]'>
                        Each issue of Descubre integrates interactive and visually stimulating elements like custom illustrations, and high-quality photography, which work together to enhance the reading experience. By consistently adhering to a cohesive editorial and design structure, the project resulted in a magazine that not only serves as a source of knowledge but also as a piece of art that reflects the beauty and diversity of global cultures.
                    </p>
                </div>
            </div>
            <div className='px-[50px] pb-[50px] md:pb-[100px]'>
                <img className="object-cover w-screen h-[350px] md:h-[800px] rounded-[50px]" src={layoutTwo} alt='Imagen que muestra la portada de unas de las secciones de la revista de Descubre' title='Imagen de una portada de las secciones'/>
            </div>
            <div className='px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <p className='text-black font-bold font-title text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px]'>To see the final result, access to see the interactive magazine <Button href='https://descubre-magazine.vercel.app/' text='here'/>.</p>
            </div>
            <div className='flex justify-start md:justify-center gap-[25px] px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <img className='bg-orange w-[111px] md:w-[200px] h-[100px] rounded-[25px]' src='' alt='Imagen que hace referencia al proyecto de Errofest' title='Imagen de Errofest' />
                <Link className='flex items-center' to="/projects/kimu">
                    <p className='text-black font-bold text-[40px] leading-[42px] md:text-[50px] md-xl:text-[60px] font-title'>Next Project</p>
                </Link>
            </div>
          
            <Footer />
        </div>
    )
}