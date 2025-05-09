import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Card } from './Card';

import Nerea from '../assets/mujer-sonriendo.jpg';
import itearCoverImage from '../assets/itear/itear-rodete-gray-image-of-cover.jpg';
import kimuCoverImage from "../assets/kimu/market-tolosa.jpg";
import descubreCoverImage from "../assets/descubre/cover.jpg";
import errofestCoverImage from "../assets/errofest/imagen-de-montana-que-hace-referencia-a-errofest.jpg";
import designSystemCoverImage from "../assets/designsystem/imagen-de-portada-del-design-system.jpg";
import echoCoverImage from "../assets/echo/imagen-de-la-pantalla-principal-en-miniatura.jpg";


export const Layout = () => {
  return (
    <div className='bg-beige'>
      <Header />
      <div id="home" className="relative flex flex-col md:flex-row px-[25px] md:px-[50px] items-center justify-center h-screen">
        <div className='absolute w-full h-screen overflow-hidden'>
          <div className="absolute w-[500px] h-[500px] right-[-300px] top-[-250px] bg-[linear-gradient(0deg,_#3D9277,_#3D9277)] filter blur-[100px] z-0"></div>
        </div>
        <div className="w-full xl:w-10/12 absolute z-[1] px-[25px] md:px-[50px]">
          <h1 className="text-[40px] md:text-[60px] xl:text-[80px] leading-[42px] md:leading-[62px] xl:leading-[82px] text-black font-bold font-title text-center">
            Kaixo! Nerea Sarasola naiz, Front-end garatzailea, eta UX/UI Diseinatzailea.
          </h1>
        </div>
        <div className='absolute w-full h-screen'>
          <div className="absolute w-[200px] h-[200px] left-[-100px] top-[521px] bg-[#F1D02D] filter blur-[100px] z-0"></div>
        </div>
      </div>
      <div id="about" className='flex flex-col px-[25px] md:px-[50px] pb-[50px] md:pb-[100px]'>
        <h2 className='text-[30px] md:text-[40px] xl:text-[60px] text-black font-title font-bold mb-[50px] text-center'>Niri buruz</h2>
        <div className='flex md:items-start xl:items-start justify-center flex-col md:flex-row gap-[25px] md:gap-[20px]'>
          <div className='xl:w-1/12'></div>
          <div className='w-full md:w-6/12 xl:w-4/12'>
            <img className="rounded-[10px] w-screen h-full object-cover" src={Nerea} alt='Imagen de una mujer con gafas sonriendo a la cámara' title='Imagen de una mujer sonriente' />
          </div>
          <div className='w-full md:w-6/12'>
            <h3 className='text-[20px] leading-[22px] md:text-[25px] md:leading-[27px] xl:text-[40px] xl:leading-[42px] text-black font-bold font-title mb-[20px]'>
              26 urte dauzkat eta gaur egun diseinatzaile grafiko modura egiten dut lan Vicenzako Bizzart kooperatiba sozialean.
            </h3>
            <p className='md:text-[15px] xl:text-[20px] text-black font-regular font-paragraph mb-[20px]'>
              Orain arte, Wordpress erabiliz, web orriak kudeatzeko eta horiek maketatzeko aukera izan dut. Gainera, garapeneko proiektu ezberdinetan, front-end-eko zatia egiten ere egon naiz.
            </p>
            <p className='md:text-[15px] xl:text-[20px] text-black font-regular font-paragraph mb-[20px]'>
              Nire helburu nagusiena egun hauetan, teknologia berrietan formatzen jarraitzea da eta horregatik, nire aisialdiaren zati bati, artikuluak, bideoak edo tutorialak ikusten pasatzen dut.
            </p>
            <p className='md:text-[15px] xl:text-[20px] text-black font-regular font-paragraph mb-[20px]'>
              Nitaz gehiago jakin nahi baduzu, nire <a href='' className='font-bold'>curriculum vitaea</a> kontsulta dezakezu.
            </p>
          </div>
          <div className='xl:w-1/12'></div>
        </div>
      </div>
      <div id="projects" className='px-[25px] md:px-[50px] py-[50px] md:pb-[100px] xl:pb-[150px]'>
        <h2 className='text-[30px] md:text-[40px] xl:text-[60px] md:leading-[42px] xl:leading-[62px] text-black font-title font-bold mb-[50px] text-center'>Proiektuak</h2>
        <div className='flex flex-col xl:flex-row xl:gap-[20px]'>
          <div className='w-full xl:w-5/12 mb-[25px] xl:mb-[20px]'>
            <Card projectName="ITEAR" category="Branding eta UX/UI Diseinua" coverImage={itearCoverImage} href="/projects/itear" width="480" height="480" color="green" />
          </div>
          <div className='w-full xl:w-8/12 mb-[25px] xl:mb-[20px]'>

            <Card projectName="KIMU" category="Branding, Packaging eta UX/UI Diseinua" coverImage={kimuCoverImage} href="/projects/kimu" width="680" height="480" color="red" />
          </div>
        </div>
        <div className='flex flex-col xl:flex-row xl:gap-[20px]'>
          <div className='w-full xl:w-8/12 mb-[25px] xl:mb-[20px]'>
            <Card projectName="DESCUBRE" category="Diseinu editoriala" coverImage={descubreCoverImage} href="/projects/descubre" width="680" height="480" color="yellow" />
          </div>
          <div className='w-full xl:w-5/12 mb-[25px] xl:mb-[20px]'>
            <Card projectName="ERROFEST" category="Branding, UX/UI Diseinua eta Garapanea" coverImage={errofestCoverImage} href="/projects/errofest" width="480" height="480" color="orange" />
          </div>
        </div>
        <div className='flex flex-col xl:flex-row xl:gap-[20px]'>
          <div className='w-full xl:w-5/12 mb-[25px] xl:mb-[20px]'>
            <Card projectName="DESIGN SYSTEM" category="UX/UI Diseinua" coverImage={designSystemCoverImage} href="/projects/designsystem" width="480" height="480" color="green" />
          </div>
          <div className='w-full xl:w-8/12'>
            <Card projectName="ECHO" category="UX/UI Diseinua eta Garapena" coverImage={echoCoverImage} href="/projects/echo" width="680" height="480" color="red" />
          </div>
        </div>
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  )
}
