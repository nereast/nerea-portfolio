import React from 'react'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import background from "../assets/imagen-de-fondo-para-los-projectos.jpg";
import logo from "../assets/errofest/logo-de-errofest-con-fondo-montanosa.jpg";
import illustrations from "../assets/errofest/ilustraciones-en-fondo-verde.jpg";
import womanSmiling from "../assets/errofest/mujer-sonriendo.jpg";
import festival from "../assets/errofest/imagen-de-un-concierto.jpg";
import layoutPresentation from "../assets/errofest/presentacion-del-layout-de-la-web.jpg";
import websiteVideo from "../assets/errofest/presentacion-de-la-web.mp4";
import designSystemCoverImage from "../assets/designsystem/imagen-de-portada-del-design-system.jpg";

export const Errofest = ({ coverImage }) => {

    const { t } = useTranslation();

    return (
        <div className='bg-beige'>
            <Header />
            <div className='px-[25px] md:px-[50px] pt-[200px] md:pb-[50px] xl:pt-[300px] xl:pb-[100px] flex flex-col xl:flex-row bg-cover bg-right xl:bg-top-left' style={{ backgroundImage: `url(${background})` }}>
                <div className='xl:w-6/12'>
                    <h1 className='text-[25px] md:text-[40px] xl:text-[50px] leading-[27px] md:leading-[42px] xl:leading-[52px] text-black font-bold font-title mb-[20px] md:mb-[30px]'>
                        {t("errofest.title")}
                    </h1>
                </div>
                <div className='xl:w-1/12'></div>
                <div className='xl:w-5/12'>
                    <p className='text-start text-[15px] md:text-[25px] md:leading-[30px] xl:text-[30px] xl:leading-[34px] text-black font-normal font-paragraph xl:mb-[25px]'>
                        The project consisted of creating the identity and landing page to promote the festival in the best possible way.
                    </p>
                    <div className="flex flex-row gap-[10px] md:gap-[20px] my-[50px] md:my-0 flex-wrap justify-start mt-[20px] md:mt-[30px] xl:mt-[60px]">
                        {["Branding", "UX/UI", "Development"].map((text) => (
                            <div key={text} className="rounded-[20px] border-green border-[2px] flex justify-center items-center p-[15px]">
                                <p className="text-green font-paragraph font-medium text-[15px] md:text-[20px]">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <img className="w-screen h-[400px] md:h-[600px] xl:h-[800px] object-cover" src={coverImage} alt="Cover of the project" title="Cover image" />
            <div className='flex flex-col lg:flex-row px-[25px] py-[50px] md:px-[50px] xl:py-[100px]'>
                <div className='lg:w-4/12'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] text-black font-bold font-title pb-[25px]'>PROJECT <br className='hidden xl:block'></br>OVERVIEW</h2>
                </div>
                <div className='lg:w-1/12'></div>
                <div className='lg:w-8/12'>
                    <p className='text-start text-[15px] md:text-[20px] xl:text-[25px] text-black font-normal font-paragraph mb-[20px]'>
                        Errofest is a cultural festival that includes different activities, such as local gastronomy, music and painting. It has been held in Itsasondo, a village in Gipuzkoa, since 2019 and every year it generates more and more interest among the locals and people from other villages in the region.
                    </p>
                    <p className='text-start text-[15px] md:text-[20px] xl:text-[25px] text-black font-normal font-paragraph mb-[20px]'>
                        In 2025, the event will celebrate its fifth anniversary, so the organisers decided to improve its identity and landing page.
                    </p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-[20px] px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <div className='w-full md:w-6/12'>
                    <img className="w-full h-[400px] md:h-full object-cover rounded-[10px]" src={logo} alt="Imagen de un paisaje con una montaña al fondo" title="Imagen con una montaña" />
                </div>
                <div className='w-full md:w-6/12'>
                    <img className="w-full h-[400px] md:h-full object-cover rounded-[10px]" src={illustrations} alt="Imagen que muestra diferentes ilustraciones que tienen relación con el evento" title="Imagen con ilustraciones" />
                </div>
            </div>
            <div className='flex flex-col md:flex-row px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <div className='lg:w-4/12'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] text-black font-bold font-title pb-[25px]'>CHALLENGE</h2>
                </div>
                <div className='lg:w-1/12'></div>
                <div className='lg:w-8/12'>
                    <h3 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[35px] xl:leading-[37px] text-green font-bold font-title pb-[25px]'>
                        The project had two objectives: to create a new identity that reflected the local spirit of the festival and to design
                        a simple landing page that briefly explained the aspects
                        to be taken into account when attending the festival.
                    </h3>
                    <p className='text-start text-[15px] xl:text-[25px] text-black font-normal font-paragraph mb-[20px]'>
                        The environment, the colours of the landscape and the local culture were the aspects that were taken into account when creating the new identity of the festival. In addition, an attempt was made to reflect the fusion between tradition and new cultural trends.
                    </p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-[20px] px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <div className='w-full md:w-6/12'>
                    <img className="w-full h-[400px] md:h-full object-cover rounded-[10px]" src={womanSmiling} alt="Imagen de una mujer sonriendo que está en un concierto" title="Imagen de una mujer sonriendo" />
                </div>
                <div className='w-full md:w-6/12'>
                    <img className="w-full h-[400px] md:h-full object-cover rounded-[10px]" src={festival} alt="Imagen de uno de los conciertos del año pasado" title="Imagen de uno de los conciertos" />
                </div>
            </div>
            <div className='flex flex-col md:flex-row px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <div className='lg:w-4/12'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] text-black font-bold font-title pb-[25px]'>SOLUTION</h2>
                </div>
                <div className='lg:w-1/12'></div>
                <div className='lg:w-8/12'>
                    <h3 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[35px] xl:leading-[37px] text-green font-bold font-title pb-[25px]'>
                        The logo was handcrafted to show the curved, organic lines of nature itself.
                    </h3>
                    <p className='text-start text-[15px] xl:text-[25px] text-black font-normal font-paragraph mb-[20px]'>
                        Thanks to the colours reminiscent of nature, the images collected from other years when the festival was held and the exercise carried out on the needs of the new landing page, a new page was created.
                    </p>
                </div>
            </div>
            <div className='flex flex-col gap-[20px] md:gap-[25px] xl:gap-[50px] px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <img className="w-full h-full object-cover rounded-[10px]" src={layoutPresentation} alt="Imagen en fondo verde que muestra el diseño de la página web en diferentes formatos" title="Imagen en fondo verde" />
                <video className='w-full h-full rounded-[10px]' src={websiteVideo} width="320" height="240" autoPlay muted loop></video>
            </div>
            <div className='px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <p className='text-black font-bold font-title text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px]'>To see the final result, access the website <Button href='https://errofest.vercel.app/eu' text='here' />.</p>
            </div>
            <div className='flex justify-start md:justify-center gap-[25px] px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <img className='w-[111px] md:w-[200px] h-[100px] rounded-[10px] object-cover' src={designSystemCoverImage} alt='Imagen que hace referencia al proyecto del Design System' title='Imagen del Design System' />
                <Link className='flex items-center' to="/projects/designsystem">
                    <p className='text-black font-bold text-[40px] leading-[42px] md:text-[50px] md-xl:text-[60px] font-title'>Next Project</p>
                </Link>
            </div>
            <Footer />
        </div>
    )
}