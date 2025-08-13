import {useEffect,useState} from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Loading } from '../components/Loading'
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import background from "../assets/imagen-de-fondo-para-los-projectos.jpg";
import marketOfTolosaTwo from "../assets/kimu/market-tolosa-two.jpg";
import coverImage from "../assets/kimu/market-tolosa.jpg";

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




export const Kimu = () => {

    const { t } = useTranslation();
    const [language, setLanguage] = useState(i18next.language);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const currentLang = i18next.language;
        setLanguage(currentLang)
    }, [i18next.language]);

    useEffect(() => {
        setTimeout(() => setLoading(false), 3300)
    }, [])
    if (loading) {
        return <Loading title="KIMU" background="bg-red" onFinish={() => setLoading(false)}/>
    }


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
            <img className="w-screen h-[50vh] md:h-[100vh] object-cover" src={coverImage} alt={t("kimu.project.images.cover.alt")} title={t("kimu.project.images.cover.title")} />
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
                    <img className="object-cover h-full w-full rounded-[10px]" src={logo} alt={t("kimu.project.images.variation_one.alt")} title={t("kimu.project.images.variation_one.title")} />
                </div>
                <div className='w-full md:w-6/12'>
                    <img className="object-cover h-full w-full rounded-[10px]" src={isotype} alt={t("kimu.project.images.variation_two.alt")} title={t("kimu.project.images.variation_two.title")} />
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
                <img className="object-cover w-screen h-[400px] md:h-[800px] rounded-[10px]" src={marketOfTolosaTwo} alt={t("kimu.project.images.variation_three.alt")} title={t("kimu.project.images.variation_three.title")} />
            </div>
            <div className='flex flex-col md:flex-row gap-[25px] md:gap-[20px] px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <div className='w-full md:w-6/12'>
                    <img className="object-cover h-full w-full rounded-[10px]" src={icons} alt={t("kimu.project.images.variation_four.alt")} title={t("kimu.project.images.variation_four.title")}/>
                </div>
                <div className='w-full md:w-6/12'>
                    <img className="object-cover h-full w-full rounded-[10px]" src={illustration} alt={t("kimu.project.images.variation_five.alt")} title={t("kimu.project.images.variation_five.title")}/>
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
                <img className="object-cover w-screen h-[400px] md:h-full rounded-[10px]" src={toteBag} alt={t("kimu.project.images.variation_six.alt")} title={t("kimu.project.images.variation_six.title")}/>
            </div>
            <div className='flex flex-col md:flex-row gap-[20px] px-[25px] pb-[25px] md:px-[50px]'>
                <div className='w-full md:w-6/12'>
                    <img className="object-cover h-[400px] md:h-full w-full rounded-[10px]" src={packaging} alt={t("kimu.project.images.variation_seven.alt")} title={t("kimu.project.images.variation_seven.title")}/>
                </div>
                <div className='w-full md:w-6/12'>
                    <img className="object-cover h-[400px] md:h-full w-full rounded-[10px]" src={packagingTwo} alt={t("kimu.project.images.variation_eight.alt")} title={t("kimu.project.images.variation_eight.title")}/>
                </div>
            </div>
            <div className='flex flex-col gap-[20px] md:gap-[25px] px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <img className="object-cover w-screen h-[400px] md:h-full  rounded-[10px]" src={packagingFour} alt={t("kimu.project.images.variation_nine.alt")} title={t("kimu.project.images.variation_nine.title")}/>
                <img className="object-cover w-screen h-auto rounded-[10px]" src={webiste} alt={t("kimu.project.images.variation_ten.alt")} title={t("kimu.project.images.variation_ten.title")}/>
                <img className="object-cover w-screen h-auto  rounded-[10px]" src={mobile} alt={t("kimu.project.images.variation_eleven.alt")} title={t("kimu.project.images.variation.eleven.title")}/>
            </div>
            <div className='flex justify-start md:justify-center gap-[25px] px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <img className='w-[111px] md:w-[200px] h-[100px] rounded-[10px] object-cover' src={descubreCoverImage} alt={t("kimu.project.images.next_project.alt")} title={t("kimu.project.images.next_project.title")}/>
                <Link className='flex items-center' to={`/${language}/${t("header.links.projects")}/descubre`}>
                    <p className='text-black font-bold text-[40px] leading-[42px] md:text-[50px] md-xl:text-[60px] font-title'>{t("kimu.project.next_project")}</p>
                </Link>
            </div>
            <Footer/>
        </div>
    )
}