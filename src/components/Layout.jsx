import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { List } from './List';
import { Card } from './Card';
import { technologies_list } from '../arrays/technologies';

import Nerea from '../assets/nereasarasola.jpg';
import itearCoverImage from '../assets/itear/itear-rodete-gray-image-of-cover.jpg';
import kimuCoverImage from "../assets/kimu/market-tolosa.jpg";
import descubreCoverImage from "../assets/descubre/cover.jpg";
import errofestCoverImage from "../assets/errofest/imagen-de-montana-que-hace-referencia-a-errofest.jpg";


export const Layout = () => {
  return (
    <div>
      <Header />
      <div id="hello" className='flex flex-col md:flex-row px-[50px] h-[80vh] items-center justify-center'>
        
        <div className='w-full xl:w-10/12'>
          <h1 className='text-[40px] md:text-[60px] xl:text-[80px] leading-[42px] md:leading-[62px] xl:leading-[82px] text-black font-bold font-title text-center'>Kaixo! Nerea Sarasola naiz, Front-end garatzailea eta UX/UI Diseinatzailea.</h1>
        </div>

      </div>

      <div id="about" className='flex flex-col px-[50px] py-[50px] md:py-[100px]'>
        <div>
          <h2 className='text-[30px] md:text-[40px] xl:text-[60px] text-black font-title font-bold mb-[50px] text-center'>Niri buruz</h2>
        </div>
        <div className='md:flex md:items-start xl:items-start  justify-center flex-row'>
          <div className='w-full md:w-6/12 xl:w-4/12 mb-[50px] xl:mb-0'>
            <img className="rounded-[50px] w-screen h-[340px] md:w-[90%] xl:w-full md:h-[342px] xl:h-[400px] object-cover xl:pr-[20px]" src={Nerea} />
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
        </div>
      </div>


      <div id="projects" className='px-[50px] py-[50px] md:pb-[100px] xl:pb-[150px]'>
        <h2 className='text-[30px] md:text-[40px] xl:text-[60px] md:leading-[42px] xl:leading-[62px] text-black font-title font-bold mb-[50px] text-center'>Proiektuak</h2>
        <div className='flex flex-col xl:flex-row'>
          <div className='w-full xl:w-5/12 pb-[50px] xl:pr-[20px]'>
            <Card projectName="ITEAR" category="Branding eta UX/UI Diseinua" coverImage={itearCoverImage} href="/projects/itear" width="480" height="480" color="green" />
          </div>
          <div className='w-full xl:w-8/12 mt-[20px] md:mt-0'>
            <Card projectName="KIMU" category="Branding, Packaging eta UX/UI Diseinua" coverImage={kimuCoverImage} href="/projects/kimu" width="680" height="480" color="red" />
          </div>
        </div>
        <div className='flex flex-col xl:flex-row mt-[50px]'>
          <div className='w-full xl:w-8/12 pb-[50px] xl:pr-[20px]'>
            <Card projectName="DESCUBRE" category="Diseinu editoriala" coverImage={descubreCoverImage} href="/projects/descubre" width="680" height="480" color="yellow" />
          </div>
          <div className='w-full xl:w-5/12 mt-[20px] md:mt-0'>
            <Card projectName="ERROFEST" category="Branding, UX/UI Diseinua eta Garapanea" coverImage={errofestCoverImage} href="/projects/errofest" width="480" height="480" color="orange" />
          </div>
        </div>
        <div className='flex flex-col xl:flex-row'>
          <div className='w-full xl:w-5/12 pb-[50px] xl:pr-[20px]'>
            <Card projectName="DESIGN SYSTEM" category="UX/UI Diseinua" coverImage={itearCoverImage} href="/projects/designsystem" width="480" height="480" color="green" />
          </div>
          <div className='w-full xl:w-8/12 mt-[20px] md:mt-0'>
            <Card projectName="KIMU" category="Branding, Packaging eta UX/UI Diseinua" coverImage={kimuCoverImage} href="/projects/kimu" width="680" height="480" color="red" />
          </div>
        </div>
        
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  )
}
