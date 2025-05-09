import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom';

import background from "../assets/imagen-de-fondo-para-los-projectos.jpg";
import logos from "../assets/itear/itear-branding.jpg";
import icons from "../assets/itear/icons.jpg";

import pieceOne from "../assets/itear/piece-of-itear.jpg";
import pieceFour from "../assets/itear/itear-piece-four.jpg";
import pieceFive from "../assets/itear/piece-five.jpg";
import welding from "../assets/itear/welding.jpg";

import brandingOne from "../assets/itear/branding-itear.jpg";
import brandingTwo from "../assets/itear/branding-itear-two.jpg";
import brandingThree from "../assets/itear/branding-itear-three.jpg";
import websiteDetail from "../assets/itear/website-detail.jpg";
import websiteVideo from "../assets/itear/web-presentation.mov"

export const Itear = ({ coverImage }) => {

    return (

        <div className='bg-beige'>
            <Header/>
            <div className='px-[25px] md:px-[50px] pt-[200px] md:pb-[50px] xl:pt-[300px] xl:pb-[100px] flex flex-col xl:flex-row bg-cover bg-right xl:bg-top-left' style={{ backgroundImage: `url(${background})` }}>
                <div className='xl:w-6/12'>
                    <h1 className='text-[25px] md:text-[40px] xl:text-[50px] leading-[27px] md:leading-[42px] xl:leading-[52px] text-black font-bold font-title mb-[20px] md:mb-[30px]'>
                        Itear: New identity for small and family businesses.
                    </h1>
                </div>
                <div className='xl:w-1/12'></div>
                <div className='xl:w-5/12'>
                    <p className='text-start text-[15px] md:text-[25px] md:leading-[30px] xl:text-[30px] xl:leading-[34px] text-black font-normal font-paragraph xl:mb-[25px]'>
                        The project consisted of creating a new identity, updating the corporate stationery and adding value to the company through a new website.
                    </p>
                    <div className="flex flex-row gap-[10px] md:gap-[20px] my-[50px] md:my-0 flex-wrap justify-start mt-[20px] md:mt-[30px] xl:mt-[60px]">
                        {["Branding", "UX/UI"].map((text) => (
                            <div key={text} className="rounded-[20px] border-green border-[2px] flex justify-center items-center p-[15px]">
                                <p className="text-green font-paragraph font-medium text-[15px] md:text-[20px]">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <img class="w-screen h-[50vh] md:h-[100vh] object-cover" src={coverImage} alt="Imagen de una pieza de Itear en un fondo blanco" title="Imagen de una pieza de Itear"/>
            <div className='flex flex-col lg:flex-row px-[25px] py-[50px] md:px-[50px] xl:py-[100px]'>
                <div className='lg:w-4/12'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] text-black font-bold font-title pb-[25px]'>PROJECT <br className='hidden xl:block'></br>OVERVIEW</h2>
                </div>
                <div className='lg:w-1/12'></div>
                <div className='lg:w-8/12'>
                    <p className='text-start text-[15px] md:text-[20px] xl:text-[25px] text-black font-normal font-paragraph mb-[20px]'>
                        Itear is a small company located in Tolosa, Basque Country which since the 1980s has been dedicated to the manufacture and repair of industrial machinery.
                        Its services include centrifugal pumps, whose function is to transform mechanical energy into hydraulic energy. For the company, it is important to maintain the quality, the essence and the functioning of the parts. In addition, it is a company that collaborates with different suppliers focused on metallurgy to carry out its work.
                    </p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-[25px] md:gap-[20px] px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <div className='w-full md:w-6/12'> 
                    <img className="object-cover h-full w-full rounded-[10px]" src={logos} alt="Imagen que muestra las variaciones que puede tener un logo de Itear" title="Imagen que muestra el logo de Itear"/>
                </div>
                <div className='w-full md:w-6/12'>
                    <img className="object-cover h-full w-full rounded-[10px]" src={icons} alt="Imagen que muestra uno de los iconos del branding de Itear" title="Imagen de un icono"/>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <div className='w-full lg:w-4/12'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] text-black font-bold font-title pb-[25px]'>CHALLENGE</h2>
                </div>
                <div className='w-full lg:w-1/12'></div>
                <div className='w-full lg:w-8/12'>
                    <h3 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[35px] xl:leading-[37px] text-green font-bold font-title pb-[25px]'>
                        The aim of the project was to generate a solid content network where an industrial entity was identified. Within the content network, the visual identity of the company and the website.
                    </h3>
                    <p className='text-start text-[15px] xl:text-[25px] text-black font-normal font-paragraph mb-[20px]'>
                    Within these means, the work process followed in the company, the services offered and the values that characterise the entity were studied in depth.
                    Within the project, it was taken into account that the work was carried out within the values of sustainability and circular economy.
                    </p>
                </div>
            </div>
            <div className='flex flex-col gap-[25px] px-[25px] md:px-[50px]'>
                <img className="object-cover w-screen h-[350px] md:h-[800px] rounded-[10px]" src={pieceOne} alt='Imagen de un detalle de una pieza de Itear en un fondo blanco' title='Imagen del detalle de una pieza'/>
                <img className="object-cover w-screen h-[350px] md:h-[800px] rounded-[10px]" src={welding} alt='Imagen del detalle de una mano soldando y mejorando una pieza' title='Imagen de una mano soldando'/>
            </div>
            <div className='flex flex-col lg:flex-row px-[25px] py-[50px] md:px-[50px] xl:py-[100px]'>
                <div className='w-full lg:w-4/12'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] text-black font-bold font-title pb-[25px]'>SOLUTION</h2>
                </div>
                <div className='w-full lg:w-1/12'></div>
                <div className='w-full lg:w-8/12'>
                    <h3 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[35px] xl:leading-[37px] text-green font-bold font-title pb-[25px]'>
                        Sinter as a typeface in its Demi version, with the purpose of showing tradition and modernisation in the industrial sector.
                    </h3>
                    <p className='text-start text-[15px] xl:text-[25px] text-black font-normal font-paragraph mb-[20px]'>
                        Precisely thanks to the art direction of the images of the pieces and the new identity, the company's new universe was born.
                    </p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-[20px] px-[25px] pb-[25px] md:px-[50px]'>
                <div className='w-full md:w-6/12'> 
                    <img className="object-cover h-full w-full rounded-[10px]" src={pieceFour} alt="Imagen de una pieza con fondo blanco que tiene un filtro azul" title="Imagen de una pieza de Itear" />
                </div>
                <div className='w-full md:w-6/12'>
                    <img className="object-cover h-full w-full rounded-[10px]" src={pieceFive} alt="Imagen de una pieza de Itear con fondo blanco" title="Imagen de una pieza de Itear" />
                </div>
            </div>
            <div className='px-[25px] pb-[25px] md:px-[50px]'>
                <img className="object-cover w-screen h-[350px] md:h-[800px] rounded-[10px]" src={brandingThree} alt='Imagen que muestra la papelería corporativa de la empresa Itear' title='Imagen de la papelería corporativa de Itear'/>
            </div>
            <div className='flex flex-col gap-[25px] px-[25px] md:px-[50px]'>
                <img className="object-cover w-screen h-[350px] md:h-[800px] rounded-[10px]" src={brandingOne} alt='Imagen de un detalle de una pieza de Itear en un fondo blanco' title='Imagen del detalle de una pieza'/>
                <img className="object-cover w-screen h-[350px] md:h-[800px] rounded-[10px]" src={brandingTwo} alt='Imagen del detalle de una mano soldando y mejorando una pieza' title='Imagen de una mano soldando'/>
                <video className='w-screen rounded-[10px]' src={websiteVideo} width="320" height="240" autoPlay muted loop></video>
                <img className="object-cover w-screen h-auto rounded-[10px]" src={websiteDetail} alt='Imagen que presenta el diseño de la nueva web corporativa de Itear' title='Imagen presentando la web de Itear'/>
            </div>
            <div className='flex justify-start md:justify-center gap-[25px] px-[25px] md:px-[50px] py-[50px] xl:py-[100px]'>
                <img className='bg-orange w-[111px] md:w-[200px] h-[100px] rounded-[10px]' src='' alt='Imagen que hace referencia al proyecto de Kimu' title='Imagen de Kimu' />
                <Link className='flex items-center' to="/projects/kimu">
                    <p className='text-black font-bold text-[40px] leading-[42px] md:text-[50px] md-xl:text-[60px] font-title'>Next Project</p>
                </Link>
            </div>
            <Footer/>
        </div>
    )
}