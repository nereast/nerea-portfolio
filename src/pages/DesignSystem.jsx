import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { useTranslation } from "react-i18next";

import background from "../assets/imagen-de-fondo-para-los-projectos.jpg";
import coverImage from "../assets/designsystem/imagen-que-muestra-los-componentes.png";
import coverImageTablet from "../assets/designsystem/imagen-que-muestra-los-componentes-para-tablets.png";
import coverImageMobile from "../assets/designsystem/imagen-que-muestra-los-componentes-para-moviles.png";
import components from "../assets/designsystem/imagen-de-los-componentes.png";
import typographies from "../assets/designsystem/imagen-de-las-tipografias.png";
import colours from "../assets/designsystem/imagen-de-los-colores.png";
import icon from "../assets/designsystem/imagen-de-un-icono-en-fondo-amarillo.jpg";
import icons from "../assets/designsystem/imagen-de-varios-iconos-en-fondo-morado.jpg";
import presentation from "../assets/designsystem/imagen-que-muestra-diferentes-categorias-de-componentes.jpg";
import echoCoverImage from "../assets/echo/imagen-de-la-pantalla-principal-en-miniatura.jpg";

export const DesignSystem = () => {

    const { t } = useTranslation();

    return (

        <div className='bg-beige'>
            <Header />
            <div className='px-[25px] md:px-[50px] pt-[200px] md:pb-[50px] xl:pt-[300px] xl:pb-[100px] flex flex-col xl:flex-row bg-cover bg-right xl:bg-top-left' style={{ backgroundImage: `url(${background})` }}>
                <div className='xl:w-6/12'>
                    <h1 className='text-[25px] md:text-[40px] xl:text-[50px] leading-[27px] md:leading-[42px] xl:leading-[52px] text-black font-bold font-title mb-[20px] md:mb-[30px]'>
                        {t("design_system.project.title")}
                    </h1>
                </div>
                <div className='xl:w-1/12'></div>
                <div className='xl:w-5/12'>
                    <p className='text-start text-[15px] md:text-[25px] md:leading-[30px] xl:text-[30px] xl:leading-[34px] text-black font-normal font-paragraph xl:mb-[25px]'>
                        {t("design_system.project.subtitle")}
                    </p>
                    <div className="flex flex-row gap-[10px] md:gap-[20px] mt-[50px] md:my-0 flex-wrap justify-start mt-[20px] md:mt-[30px] xl:mt-[60px]">
                        {["UX/UI", "Documentation", "Development"].map((text) => (
                            <div key={text} className="rounded-[20px] border-green border-[2px] flex justify-center items-center p-[15px]">
                                <p className="text-green font-paragraph font-medium text-[15px] md:text-[20px]">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <img class="w-screen h-auto object-cover hidden xl:block px-[50px] xl:py-[100px]" src={coverImage} alt={t("design_system.project.images.cover.alt")} title={t("design_system.project.images.cover.title")}/>
            <img class="w-screen h-auto object-cover hidden md:block xl:hidden p-[50px]" src={coverImageTablet} alt={t("design_system.project.images.cover.alt")} title={t("design_system.project.images.cover.title")}/>
            <img class="w-screen h-auto object-cover block md:hidden px-[25px] py-[50px]" src={coverImageMobile} alt={t("design_system.project.images.cover.alt")} title={t("design_system.project.images.cover.title")}/>
            <div className='flex flex-col lg:flex-row px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <div className='lg:w-4/12'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] uppercase text-black font-bold font-title pb-[25px]' dangerouslySetInnerHTML={{ __html: t("design_system.project.project_overview") }}/>
                </div>
                <div className='lg:w-1/12'></div>
                <div className='lg:w-8/12'>
                    <p className='text-start text-[15px] xl:text-[25px] text-black font-normal font-paragraph mb-[20px]'>
                        {t("design_system.project.project_overview_text")}
                    </p>
                </div>
            </div>
            <div className='px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <img class="w-screen h-auto object-cover" src={components} alt={t("design_system.project.images.variation_one.alt")} title={t("design_system.project.images.variation_one.title")}/>
            </div>
            <div className='flex flex-col lg:flex-row px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <div className='lg:w-4/12'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] uppercase text-black font-bold font-title pb-[25px]'>{t("design_system.project.challenge")}</h2>
                </div>
                <div className='lg:w-1/12'></div>
                <div className='lg:w-8/12'>
                    <h3 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[35px] xl:leading-[37px] text-green font-bold font-title pb-[25px]'>
                        {t("design_system.project.challenge_subtitle")}
                    </h3>
                    <p className='text-start text-[15px] xl:text-[25px] text-black font-normal font-paragraph mb-[20px]'>
                        {t("design_system.project.challenge_text")}
                    </p>
                </div>
            </div>
            <div className='px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px] flex justify-center'>
                <div className='w-8/12'>
                   <hr className='border-black border-[2px]'></hr>
                </div>
            </div>
            <div className='px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px] flex justify-center'>
                <div className='xl:w-8/12 text-center'>
                   <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] uppercase text-black font-bold font-title pb-[25px]'>{t("design_system.project.typefaces")}</h2>
                   <p className='text-[15px] xl:text-[25px] text-black font-normal font-paragraph mb-[20px]'>
                        {t("design_system.project.typefaces_text")}
                   </p>
                </div>
            </div>
            <div className='px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px] flex justify-center'>
                <img className='w-auto h-auto object-cover' src={typographies} alt={t("design_system.project.images.variation_two.alt")} title={t("design_system.project.images.variation_two.title")}/>
            </div>
            <div className='px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px] flex justify-center'>
                <div className='w-8/12'>
                   <hr className='border-black border-[2px]'></hr>
                </div>
            </div>
            <div className='px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px] flex justify-center'>
                <div className='xl:w-8/12 text-center'>
                   <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] uppercase text-black font-bold font-title pb-[25px]'>{t("design_system.project.colours")}</h2>
                   <p className='text-[15px] xl:text-[25px] text-black font-normal font-paragraph mb-[20px]'>
                        {t("design_system.project.colours_text")}
                   </p>
                </div>
            </div>
            <div className='px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <img className='w-auto h-auto object-cover' src={colours} alt={t("design_system.project.images.variation_three.alt")} title={t("design_system.project.images.variation_three.title")}/>
            </div>
            <div className='px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px] flex justify-center'>
                <div className='w-8/12'>
                   <hr className='border-black border-[2px]'></hr>
                </div>
            </div>
            <div className='px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px] flex justify-center'>
                <div className='xl:w-8/12 text-center'>
                   <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] uppercase text-black font-bold font-title pb-[25px]'>{t("design_system.project.iconography")}</h2>
                   <p className='text-[15px] xl:text-[25px] text-black font-normal font-paragraph mb-[20px]'>
                        {t("design_system.project.iconography_text")}
                   </p>
                </div>
            </div>
            <div className='px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px] flex flex-col md:flex-row gap-[20px]'>
                <div className='xl:w-6/12'>
                   <img className='w-full h-[400px] md:h-auto object-cover rounded-[10px]' src={icon} alt={t("design_system.project.images.variation_four.alt")} title={t("design_system.project.images.variation_four.title")}/>
                </div>
                <div className='xl:w-6/12'>
                  <img className='w-full h-[400px] md:h-auto object-cover rounded-[10px]' src={icons} alt={t("design_system.project.images.variation_five.alt")} title={t("design_system.project.images.variation_five.title")}/>
                </div>
            </div>
            <div className='px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px] flex justify-center'>
                <div className='w-8/12'>
                   <hr className='border-black border-[2px]'></hr>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <div className='lg:w-4/12'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] uppercase text-black font-bold font-title pb-[25px]'>{t("design_system.project.solution")}</h2>
                </div>
                <div className='lg:w-1/12'></div>
                <div className='lg:w-8/12'>
                    <h3 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[35px] xl:leading-[37px] text-green font-bold font-title pb-[25px]'>
                        {t("design_system.project.solution_subtitle")}
                    </h3>
                    <p className='text-start text-[15px] xl:text-[25px] text-black font-normal font-paragraph mb-[20px]'>
                        {t("design_system.project.title")}
                    </p>
                </div>
            </div>
            <div className='px-[25px] md:px-[50px] pb-[50px] md:pb-[100px]'>
                <img className="object-cover w-screen h-full rounded-[10px]" src={presentation} alt={t("design_system.project.images.variation_six.alt")} title={t("design_system.project.images.variation_six.title")}/>
            </div>

            <div className='flex flex-col lg:flex-row px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <div className='lg:w-4/12'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] uppercase text-black font-bold font-title pb-[25px]'>{t("design_system.project.next_steps")}</h2>
                </div>
                <div className='lg:w-1/12'></div>
                <div className='lg:w-8/12'>
                    <h3 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[35px] xl:leading-[37px] text-black font-bold font-title pb-[25px]' dangerouslySetInnerHTML={{ __html: t("design_system.project.next_steps_text") }}/>
                </div>
            </div>
            <div className='flex justify-start md:justify-center gap-[25px] px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <img className='w-[111px] md:w-[200px] h-[100px] rounded-[10px] object-cover' src={echoCoverImage} alt={t("design_system.project.images.next_project.alt")} title={t("design_system.project.images.next_project.title")}/>
                <Link className='flex items-center' to="/projects/echo">
                    <p className='text-black font-bold text-[40px] leading-[42px] md:text-[50px] md-xl:text-[60px] font-title'>{t("design_system.project.next_project")}</p>
                </Link>
            </div>
            <Footer/>
        </div>
    )
}