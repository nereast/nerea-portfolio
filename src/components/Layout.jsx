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
import mikaCoverImage from "../assets/mika/cover.jpg";


export const Layout = () => {
  return (
    <div>
      <Header />
      <div id="hello" className='flex flex-col md:flex-row px-[50px] bg-green h-screen'>
        <div className='w-full h-screen md:w-6/12 flex flex-col justify-center'>
          <h1 className='text-[40px] md:text-[60px] xl:text-[80px] leading-[40px] md:leading-[62px] xl:leading-[82px] text-white font-bold font-title	pb-[25px]'>
            <span className='flex'>Designer <span className='text-[15px] z-0 font-title pl-[5px] relative top-[4px] md:top-[7px] xl:top-[10px]'>&</span></span>
            Developer
          </h1>
          <p className='text-[15px] xl:text-[20px] font-paragraph text-black font-regular'>Hi! I'm Nerea Sarasola, Graphic Designer <br className='hidden md:block'></br>and Front-end Developer.</p>
        </div>
        <div className='xl:w-1/12'></div>

      </div>

      <div id="about" className='flex flex-col px-[50px] py-[50px] md:py-[100px] xl:py-[150px]'>
        <div className='md:flex md:items-center xl:items-start flex-row'>
          <h2 className='block md:hidden text-[30px] text-black text-bold font-title font-bold text-center'>About Me</h2>
          <div className='w-full md:w-6/12 xl:w-4/12 py-[50px] md:p-0'>
            <img className="rounded-[50px] w-screen h-[340px] md:w-[90%] xl:w-[380px] md:h-[342px] xl:h-[400px] object-cover" src={Nerea} />
          </div>
          <div className='xl:w-1/12'></div>
          <div className='w-full md:w-6/12 xl:w-7/12'>
            <h2 className='hidden md:block md:text-[40px] xl:text-[60px] text-black text-bold font-title font-bold xl:pb-[25px]'>About Me</h2>
            <p className='md:text-[15px] xl:text-[20px] text-black font-regular font-paragraph mb-[20px]'>
              I am 25 years old and currently working at the Fidenet company, located in Donosti, as a Front-end Developer and UX/UI Designer.
            </p>
            <p className='md:text-[15px] xl:text-[20px] text-black font-regular font-paragraph mb-[20px]'>
              So far, using Wordpress, I have had the opportunity to manage and layout websites. In addition, I have been making the Front-end part of different development projects.
            </p>
            <p className='md:text-[15px] xl:text-[20px] text-black font-regular font-paragraph mb-[20px]'>
              My main goal these days is to continue learning new technologies and new design or development skills.
              That's why I spend my time watching a part of my spare time, articles, videos or tutorials.
            </p>
          </div>
        </div>
        <h3 className='text-[25px] md:text-[30px] xl:text-[40px] font-title text-black font-bold text-center my-[50px]'>Skills</h3>
        <ul className='flex flex-wrap justify-center md:gap-y-[20px]'>
          <div className='hidden md:flex flex-row justify-center w-full'>
            {technologies_list.slice(0, 3).map(function (name) {
              return (
                <List text={name.name} key={name.id} />
              )
            })}
          </div>
          <div className='grid grid-cols-2 gap-[20px] md:hidden w-screen'>
            {technologies_list.slice(0, 2).map(function (name) {
              return (
                <List text={name.name} key={name.id} />
              )
            })}
          </div>
          <div className='w-full hidden md:flex flex-row justify-center'>
            {technologies_list.slice(3, 6).map(function (name) {

              return (
                <List text={name.name} key={name.id} />
              )
            })}
          </div>
          <div className='grid grid-cols-2 gap-[20px] md:hidden w-screen'>
            {technologies_list.slice(2, 4).map(function (name) {

              return (
                <List text={name.name} key={name.id} />
              )
            })}
          </div>
          <div className='w-full hidden md:flex flex-row justify-center'>
            {technologies_list.slice(6, 9).map(function (name) {

              return (
                <List text={name.name} key={name.id} />
              )
            })}
          </div>
          <div className='grid grid-cols-2 gap-[20px] md:hidden w-screen'>
            {technologies_list.slice(4, 6).map(function (name) {

              return (
                <List text={name.name} key={name.id} />
              )
            })}
          </div>
          <div className='grid grid-cols-2 gap-[20px] md:hidden w-screen'>
            {technologies_list.slice(6, 8).map(function (name) {

              return (
                <List text={name.name} key={name.id} />
              )
            })}
          </div>
          <div className='grid grid-cols-2 gap-[20px] md:hidden w-screen'>
            {technologies_list.slice(8, 9).map(function (name) {

              return (
                <List text={name.name} key={name.id} />
              )
            })}
          </div>
        </ul>
      </div>


      <div id="projects" className='px-[50px] py-[50px] md:pb-[100px] xl:pb-[150px]'>
        <h2 className='text-[30px] md:text-[40px] xl:text-[60px] md:leading-[42px] xl:leading-[62px] text-black font-title font-bold mb-[50px] text-center'>Projects</h2>
        <div className='flex flex-col xl:flex-row'>
          <div className='w-full xl:w-5/12 pb-[50px] xl:pr-[20px]'>
            <Card projectName="ITEAR" category="Branding and UX/UI Design" coverImage={itearCoverImage} href="/projects/itear" width="480" height="480" />
          </div>
          <div className='w-full xl:w-8/12 mt-[20px] md:mt-0'>
            <Card projectName="KIMU" category="Branding, Packaging and UX/UI Design" coverImage={kimuCoverImage} href="/projects/kimu" width="680" height="480" />
          </div>
        </div>
        <div className='flex flex-col xl:flex-row mt-[50px]'>
          <div className='w-full xl:w-8/12 pb-[50px] xl:pr-[20px]'>
            <Card projectName="DESCUBRE" category="Editorial Design" coverImage={descubreCoverImage} href="/projects/descubre" width="680" height="480" />
          </div>
          <div className='w-full xl:w-5/12 mt-[20px] md:mt-0'>
            <Card projectName="MIKA" category="Experimetal" coverImage={mikaCoverImage} href="/projects/mika" width="480" height="480" />
          </div>
        </div>
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  )
}
