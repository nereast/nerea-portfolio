import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import background from "../assets/imagen-de-fondo-para-los-projectos.jpg";
import marketOfTolosaTwo from "../assets/kimu/market-tolosa-two.jpg";

import logo from "../assets/kimu/logotype.jpg";
import isotype from "../assets/kimu/isotype.jpg";
import icons from "../assets/kimu/icons.svg";
import illustration from "../assets/kimu/illustration.jpg";

import toteBag from "../assets/kimu/tote-bag.jpg";
import packaging from "../assets/kimu/packaging.jpg";
import packagingTwo from "../assets/kimu/packaging-two.jpg";
import packagingFour from "../assets/kimu/packaging-four.jpg";
import webiste from "../assets/kimu/website.jpg"
import mobile from "../assets/kimu/mobile-device.jpg";
import descubreCoverImage from "../assets/descubre/cover.jpg";




export const Kimu = ({ coverImage }) => {

    const { t } = useTranslation();

    return (
        <div className='bg-beige'>
            <Header />
            <div className='px-[25px] md:px-[50px] pt-[200px] md:pb-[50px] xl:pt-[300px] xl:pb-[100px] flex flex-col xl:flex-row bg-cover bg-right xl:bg-top-left' style={{ backgroundImage: `url(${background})` }}>
                <div className='xl:w-6/12'>
                    <h1 className='text-[25px] md:text-[40px] xl:text-[50px] leading-[27px] md:leading-[42px] xl:leading-[52px] text-black font-bold font-title mb-[20px] md:mb-[30px]' dangerouslySetInnerHTML={{ __html: t("kimu.project.title") }}/>
                </div>
                <div className='xl:w-1/12'></div>
                <div className='xl:w-5/12'>
                    <p className='text-start text-[15px] md:text-[25px] md:leading-[30px] xl:text-[30px] xl:leading-[34px] text-black font-normal font-paragraph xl:mb-[25px]'>
                        {t("kimu.project.subtitle")}
                    </p>
                    <div className="flex flex-row gap-[10px] md:gap-[20px] my-[50px] md:my-0 flex-wrap justify-start mt-[20px] md:mt-[30px] xl:mt-[60px]">
                        {["Branding", "Packaging", "UX/UI"].map((text) => (
                            <div key={text} className="rounded-[20px] border-green border-[2px] flex justify-center items-center p-[15px]">
                                <p className="text-green font-paragraph font-medium text-[15px] md:text-[20px]">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <img class="w-screen h-[50vh] md:h-[100vh] object-cover" src={coverImage} alt="Imagen de una persona mayor hablando con una pareja en el mercado de Tolosa" title="Imagen del mercado de Tolosa" />
            <div className='flex flex-col lg:flex-row px-[25px] py-[50px] md:px-[50px] xl:py-[100px]'>
                <div className='lg:w-4/12'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] uppercase text-black font-bold font-title pb-[25px]' dangerouslySetInnerHTML={{ __html: t("kimu.project.project_overview") }}/>
                </div>
                <div className='lg:w-1/12'></div>
                <div className='lg:w-8/12'>
                    <p className='text-start text-[15px] md:text-[20px] xl:text-[25px] text-black font-normal font-paragraph mb-[20px]'>
                        {t("kimu.project.project_overview_text")}
                    </p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-[25px] md:gap-[20px] px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <div className='w-full md:w-6/12'>
                    <img className="object-cover h-full w-full rounded-[10px]" src={logo} alt="Imagen que muestra el logotipo de Kimu blanco en fondo naranja" title="Imagen que muestra el logotipo de Kimu" />
                </div>
                <div className='w-full md:w-6/12'>
                    <img className="object-cover h-full w-full rounded-[10px]" src={isotype} alt="Imagen que muestra el isotipo de Kimu negro en fondo blanco" title="Imagen que muestra el isotipo de Kimu" />
                </div>
            </div>
            <div className='flex flex-col lg:flex-row px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <div className='lg:w-4/12'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] uppercase text-black font-bold font-title pb-[25px]'>{t("kimu.project.challenge")}</h2>
                </div>
                <div className='lg:w-1/12'></div>
                <div className='lg:w-8/12'>
                    <h3 className='text-[25px] md:text-[30px] xl:text-[35px] leading-[37px] text-green font-bold font-title pb-[25px]'>
                        {t("kimu.project.challenge_subtitle")}
                    </h3>
                    <p className='text-start text-[15px] xl:text-[25px] text-black font-bold font-paragraph mb-[20px]'>
                        {t("kimu.project.challenge_text")}
                    </p>
                </div>
            </div>
            <div className='px-[25px] pb-[25px] md:px-[50px]'>
                <img className="object-cover w-screen h-[400px] md:h-[800px] rounded-[10px]" src={marketOfTolosaTwo} alt='Imagen que muestra un detalle de una mano sosteniendo unas verduras' title='Imagen de una mano' />
            </div>
            <div className='flex flex-col md:flex-row gap-[25px] md:gap-[20px] px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <div className='w-full md:w-6/12'>
                    <img className="object-cover h-full w-full rounded-[10px]" src={icons} alt="Imagen de una ilustración de un puerro con un trazado blanco en fondo naranja" title="Imagen de una ilustración de un puerro" />
                </div>
                <div className='w-full md:w-6/12'>
                    <img className="object-cover h-full w-full rounded-[10px]" src={illustration} alt="Imagen de una ilustración de líneas orgánicas negras en fondo blanco" title="Imagen de una ilustración de líneas orgánicas" />
                </div>
            </div>
            <div className='flex flex-col lg:flex-row px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <div className='lg:w-4/12'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] uppercase text-black font-bold font-title pb-[25px]'>{t("kimu.project.solution")}</h2>
                </div>
                <div className='lg:w-1/12'></div>
                <div className='lg:w-8/12'>
                    <h3 className='text-[25px] md:text-[30px] xl:text-[35px] leading-[37px] text-green font-bold font-title pb-[25px]'>
                        {t("kimu.project.solution_subtitle")}
                    </h3>
                    <p className='text-start text-[15px] xl:text-[25px] text-black font-bold font-paragraph mb-[20px]'>
                        {t("kimu.project.solution_text")}
                    </p>
                </div>
            </div>
            <div className='px-[25px] pb-[25px] md:px-[50px]'>
                <img className="object-cover w-screen h-[400px] md:h-full rounded-[10px]" src={toteBag} alt='Imagen de una mano sosteniendo una tote bag corporativo de Kimu' title='Imagen de una tote bag'/>
            </div>
            <div className='flex flex-col md:flex-row gap-[20px] px-[25px] pb-[25px] md:px-[50px]'>
                <div className='w-full md:w-6/12'>
                    <img className="object-cover h-[400px] md:h-full w-full rounded-[10px]" src={packaging} alt="Imagen que muestra la parte delantera del packaging del frasco que se utiliza para vender los germinados de garbanzos" title="Imagen del frasco de los germinados"/>
                </div>
                <div className='w-full md:w-6/12'>
                    <img className="object-cover h-[400px] md:h-full w-full rounded-[10px]" src={packagingTwo} alt="Imagen que muestra la parte trasera del packaging del frasco que se utiliza para vender los germinados de garbanzos" title="Imagen del frasco de los germinados"/>
                </div>
            </div>
            <div className='flex flex-col gap-[20px] md:gap-[25px] px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <img className="object-cover w-screen h-[400px] md:h-full  rounded-[10px]" src={packagingFour} alt='Imagen que muestra la parte delantera del packaging del frasco que se utiliza para envasar las semillas de los germinados de alubias' title='Imagen del frasco de los germinados de alubias'/>
                <img className="object-cover w-screen h-auto rounded-[10px]" src={webiste} alt='Imagen que muestra el diseño de varias páginas del tamaño desktop en un fondo naranja corporativo' title='Imagen que presenta diferentes páginas de la web de Kimu'/>
                <img className="object-cover w-screen h-auto  rounded-[10px]" src={mobile} alt='Imagen que muestra el diseño de varias páginas del tamaño mobile en un fondo naranja corporativo ' title='Imagen que presenta diferentes páginas de la web de Kimu'/>
            </div>
            <div className='flex justify-start md:justify-center gap-[25px] px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <img className='w-[111px] md:w-[200px] h-[100px] rounded-[10px] object-cover' src={descubreCoverImage} alt='Imagen que hace referencia al proyecto de Descubre' title='Imagen de Descubre' />
                <Link className='flex items-center' to="/projects/descubre">
                    <p className='text-black font-bold text-[40px] leading-[42px] md:text-[50px] md-xl:text-[60px] font-title'>{t("kimu.project.next_project")}</p>
                </Link>
            </div>
            <Footer/>
        </div>
    )
}