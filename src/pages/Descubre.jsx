import {useState,useEffect} from 'react';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { Loading } from '../components/Loading';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import background from "../assets/imagen-de-fondo-para-los-projectos.jpg";
import coverImage from "../assets/descubre/cover.jpg";
import layout from "../assets/descubre/layout.jpg";
import layoutTwo from "../assets/descubre/layout-two.jpg";
import detail from "../assets/descubre/magazine-details.jpg";
import collage from "../assets/descubre/collage.jpg";
import errofestCoverImage from "../assets/errofest/imagen-de-montana-que-hace-referencia-a-errofest.jpg";


export const Descubre = () => {

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
        return <Loading title="DESCUBRE" background="bg-yellow" onFinish={() => setLoading(false)}/>
    }

    return (

        <div className='bg-beige'>
            <Nav />
            <div className='px-[25px] md:px-[50px] pt-[200px] md:pb-[50px] xl:pt-[300px] xl:pb-[100px] flex flex-col xl:flex-row bg-cover bg-right xl:bg-top-left' style={{ backgroundImage: `url(${background})` }}>
                <div className='xl:w-6/12'>
                    <h1 className='text-[25px] md:text-[40px] xl:text-[50px] leading-[27px] md:leading-[42px] xl:leading-[52px] text-black font-bold font-title mb-[20px] md:mb-[30px]'>
                        {t("descubre.project.title")}
                    </h1>
                </div>
                <div className='xl:w-1/12'></div>
                <div className='xl:w-5/12'>
                    <p className='text-start text-[15px] md:text-[25px] md:leading-[30px] xl:text-[30px] xl:leading-[34px] text-black font-normal font-paragraph xl:mb-[25px]'>
                        {t("descubre.project.subtitle")}
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
            <img class="w-screen h-[50vh] md:h-[100vh] object-cover" src={coverImage} alt={t("descubre.project.images.cover.alt")} title={t("descubre.project.images.cover.title")}/>
            <div className='flex flex-col lg:flex-row px-[25px] py-[50px] md:px-[50px] xl:py-[100px]'>
                <div className='lg:w-4/12'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] uppercase text-black font-bold font-title pb-[25px]' dangerouslySetInnerHTML={{ __html: t("descubre.project.project_overview") }} />
                </div>
                <div className='lg:w-1/12'></div>
                <div className='lg:w-8/12'>
                    <p className='text-start text-[15px] xl:text-[25px] text-black font-normal font-paragraph mb-[20px]'>
                        {t("descubre.project.project_overview_text")}
                    </p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-[20px] px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <div className='w-full md:w-6/12'>
                    <img className="object-cover h-full w-full rounded-[10px]" src={detail} alt={t("descubre.project.images.variation_one.alt")} title={t("descubre.project.images.variation_one.title")} />
                </div>
                <div className='w-full md:w-6/12'>
                    <img className="object-cover h-full w-full rounded-[10px]" src={collage} alt={t("descubre.project.images.variation_two.alt")} title={t("descubre.project.images.variation_two.title")}/>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <div className='lg:w-4/12'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] uppercase text-black font-bold font-title pb-[25px]'>{t("descubre.project.challenge")}</h2>
                </div>
                <div className='lg:w-1/12'></div>
                <div className='lg:w-8/12'>
                    <h3 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[35px] xl:leading-[37px] text-green font-bold font-title pb-[25px]'>
                        {t("descubre.project.challenge_subtitle")}
                    </h3>
                    <p className='text-start text-[15px] xl:text-[25px] text-black font-bold font-paragraph mb-[20px]'>
                        {t("descubre.project.challenge_text")}
                    </p>
                </div>
            </div>
            <div className='px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <img className="object-cover w-screen h-[350px] md:h-[800px] rounded-[10px]" src={layout} alt={t("descubre.project.images.variation_three.alt")} title={t("descubre.project.images.variation_three.title")}/>
            </div>
            <div className='flex flex-col lg:flex-row px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <div className='lg:w-4/12'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] uppercase text-black font-bold font-title pb-[25px]'>{t("descubre.project.solution")}</h2>
                </div>
                <div className='lg:w-1/12'></div>
                <div className='lg:w-8/12'>
                    <h3 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[35px] xl:leading-[37px] text-green font-bold font-title pb-[25px]'>
                        {t("descubre.project.solution_subtitle")}
                    </h3>
                    <p className='text-start text-[15px] xl:text-[25px] text-black font-bold font-paragraph mb-[20px]'>
                        {t("descubre.project.solution_text")}
                    </p>
                </div>
            </div>
            <div className='px-[25px] md:px-[50px] pb-[50px] md:pb-[100px]'>
                <img className="object-cover w-screen h-[350px] md:h-[800px] rounded-[10px]" src={layoutTwo} alt={t("descubre.project.images.variation_four.alt")} title={t("descubre.project.images.variation_four.title")}/>
            </div>
            <div className='px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <p className='text-black font-bold font-title text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px]'>{t("descubre.project.view_project")} <Button href='https://descubre-magazine.vercel.app/' text={t("descubre.project.view_project_here")}/>.</p>
            </div>
            <div className='flex justify-start md:justify-center gap-[25px] px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <img className='w-[111px] md:w-[200px] h-[100px] rounded-[10px] object-cover' src={errofestCoverImage} alt={t("descubre.project.images.next_project.alt")} title={t("descubre.project.images.next_project.title")}/>
                <Link className='flex items-center' to={`/${language}/${t("header.links.projects")}/errofest`}>
                    <p className='text-black font-bold text-[40px] leading-[42px] md:text-[50px] md-xl:text-[60px] font-title'>{t("descubre.project.next_project")}</p>
                </Link>
            </div>
          
            <Footer />
        </div>
    )
}