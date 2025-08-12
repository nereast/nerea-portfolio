import {useState,useEffect} from 'react'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import background from "../assets/imagen-de-fondo-para-los-projectos.jpg";
import coverImage from "../assets/errofest/imagen-del-festival.jpg";
import logo from "../assets/errofest/logo-de-errofest-con-fondo-montanosa.jpg";
import illustrations from "../assets/errofest/ilustraciones-en-fondo-verde.jpg";
import womanSmiling from "../assets/errofest/mujer-sonriendo.jpg";
import festival from "../assets/errofest/imagen-de-un-concierto.jpg";
import layoutPresentation from "../assets/errofest/presentacion-del-layout-de-la-web.jpg";
import websiteVideo from "../assets/errofest/presentacion-de-la-web.mp4";
import designSystemCoverImage from "../assets/designsystem/imagen-de-portada-del-design-system.jpg";

export const Errofest = () => {

    const { t } = useTranslation();
    const [language, setLanguage] = useState(i18next.language);

    useEffect(() => {
        const currentLang = i18next.language;
        setLanguage(currentLang)
    }, [i18next.language]);

    return (
        <div className='bg-beige'>
            <Header />
            <div className='px-[25px] md:px-[50px] pt-[200px] md:pb-[50px] xl:pt-[300px] xl:pb-[100px] flex flex-col xl:flex-row bg-cover bg-right xl:bg-top-left' style={{ backgroundImage: `url(${background})` }}>
                <div className='xl:w-6/12'>
                    <h1 className='text-[25px] md:text-[40px] xl:text-[50px] leading-[27px] md:leading-[42px] xl:leading-[52px] text-black font-bold font-title mb-[20px] md:mb-[30px]'>
                        {t("errofest.project.title")}
                    </h1>
                </div>
                <div className='xl:w-1/12'></div>
                <div className='xl:w-5/12'>
                    <p className='text-start text-[15px] md:text-[25px] md:leading-[30px] xl:text-[30px] xl:leading-[34px] text-black font-normal font-paragraph xl:mb-[25px]'>
                        {t("errofest.project.subtitle")}
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
            <img className="w-screen h-[400px] md:h-[600px] xl:h-[800px] object-cover" src={coverImage} alt={t("errofest.project.images.cover.alt")} title={t("errofest.project.images.cover.title")}/>
            <div className='flex flex-col lg:flex-row px-[25px] py-[50px] md:px-[50px] xl:py-[100px]'>
                <div className='lg:w-4/12'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] uppercase text-black font-bold font-title pb-[25px]' dangerouslySetInnerHTML={{ __html: t("errofest.project.project_overview") }}/>
                </div>
                <div className='lg:w-1/12'></div>
                <div className='lg:w-8/12'>
                    <p className='text-start text-[15px] md:text-[20px] xl:text-[25px] text-black font-normal font-paragraph mb-[20px]' dangerouslySetInnerHTML={{ __html: t("errofest.project.project_overview_text") }}/>
                   
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-[20px] px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <div className='w-full md:w-6/12'>
                    <img className="w-full h-[400px] md:h-full object-cover rounded-[10px]" src={logo} alt={t("errofest.project.images.variation_one.alt")} title={t("errofest.project.images.variation_one.title")} />
                </div>
                <div className='w-full md:w-6/12'>
                    <img className="w-full h-[400px] md:h-full object-cover rounded-[10px]" src={illustrations} alt={t("errofest.project.images.variation_two.alt")} title={t("errofest.project.images.variation_two.title")}/>
                </div>
            </div>
            <div className='flex flex-col md:flex-row px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <div className='lg:w-4/12'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] uppercase text-black font-bold font-title pb-[25px]'>{t("errofest.project.challenge")}</h2>
                </div>
                <div className='lg:w-1/12'></div>
                <div className='lg:w-8/12'>
                    <h3 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[35px] xl:leading-[37px] text-green font-bold font-title pb-[25px]'>
                        {t("errofest.project.challenge_subtitle")}
                    </h3>
                    <p className='text-start text-[15px] xl:text-[25px] text-black font-normal font-paragraph mb-[20px]'>
                        {t("errofest.project.challenge_text")}
                    </p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-[20px] px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <div className='w-full md:w-6/12'>
                    <img className="w-full h-[400px] md:h-full object-cover rounded-[10px]" src={womanSmiling} alt={t("errofest.project.images.variation_three.alt")} title={t("errofest.project.images.variation_three.title")}/>
                </div>
                <div className='w-full md:w-6/12'>
                    <img className="w-full h-[400px] md:h-full object-cover rounded-[10px]" src={festival} alt={t("errofest.project.images.variation_four.alt")} title={t("errofest.project.images.variation_four.title")}/>
                </div>
            </div>
            <div className='flex flex-col md:flex-row px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <div className='lg:w-4/12'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] uppercase text-black font-bold font-title pb-[25px]'>{t("errofest.project.solution")}</h2>
                </div>
                <div className='lg:w-1/12'></div>
                <div className='lg:w-8/12'>
                    <h3 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[35px] xl:leading-[37px] text-green font-bold font-title pb-[25px]'>
                        {t("errofest.project.solution_subtitle")}
                    </h3>
                    <p className='text-start text-[15px] xl:text-[25px] text-black font-normal font-paragraph mb-[20px]'>
                        {t("errofest.project.solution_text")}
                    </p>
                </div>
            </div>
            <div className='flex flex-col gap-[20px] md:gap-[25px] xl:gap-[50px] px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <img className="w-full h-full object-cover rounded-[10px]" src={layoutPresentation} alt={t("errofest.project.images.variation_five.alt")} title={t("errofest.project.images.variation_five.title")}/>
                <video className='w-full h-full rounded-[10px]' src={websiteVideo} width="320" height="240" autoPlay muted loop></video>
            </div>
            <div className='px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <p className='text-black font-bold font-title text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px]'>{t("errofest.project.view_project")} <Button href={t("errofest.project.project_web")} text={t("errofest.project.view_project_here")}/>.</p>
            </div>
            <div className='flex justify-start md:justify-center gap-[25px] px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <img className='w-[111px] md:w-[200px] h-[100px] rounded-[10px] object-cover' src={designSystemCoverImage} alt={t("errofest.project.images.next_project.alt")} title={t("errofest.project.images.next_project.title")}/>
                <Link className='flex items-center' to={`/${language}/${t("header.links.projects")}/designsystem`}>
                    <p className='text-black font-bold text-[40px] leading-[42px] md:text-[50px] md-xl:text-[60px] font-title'>{t("errofest.project.next_project")}</p>
                </Link>
            </div>
            <Footer />
        </div>
    )
}