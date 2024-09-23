import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom';
import marketOfTolosa from "../assets/kimu/market-tolosa.jpg";
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



export const Kimu = ({ coverImage }) => {

    return (

        <div>
            <Header />
            <div className='container'>
                <div className='px-[50px] pt-[150px] md:pt-[100px] md:pb-[100px] xl:pb-[100px] grid grid-rows-[10vh_1fr] md:grid-rows-1 md:grid-cols-[40%_60%]'>
                    <h1 className='text-[30px] md:text-[40px] xl:text-[50px] leading-[27px] md:leading-[42px] xl:leading-[52px] text-black font-bold font-title	md:pb-[25px]'>
                        Kimu: <br></br> New identity <br className='block md:hidden'></br>and packaging.
                    </h1>
                    <div className=''>
                        <p className='text-start text-[25px] md:leading-[30px] xl:text-[30px] xl:leading-[34px] text-black font-normal font-paragraph mb-[25px]'>
                            The project consisted of creating a new corporate identity, creating a new packaging design and promoting and guaranteeing the company's values through a website.
                        </p>
                        <div className='grid grid-rows-3 grid-cols-[120px] md:grid-cols-[120px_120px_100px] md:grid-rows-1 gap-[20px] my-[50px] md:m-0'>
                            <span className='rounded-full border-green border-[2px] flex justify-center'>
                                <p className='text-green font-paragraph font-medium text-[20px]'>Branding</p>
                            </span>
                            <span className='rounded-full border-green border-[2px] flex justify-center'>
                                <p className='text-green font-paragraph font-medium text-[20px]'>Packaging</p>
                            </span>
                            <span className='rounded-full border-green border-[2px] flex justify-center'>
                                <p className='text-green font-paragraph font-medium text-[20px]'>UX/UI</p>
                            </span>
                        </div>
                    </div>
                </div>

                <img class="w-screen h-[50vh] md:h-[100vh] object-cover" src={marketOfTolosa} alt="Cover of the project" title="Cover image" />


                <div className='p-[50px] md:pt-[100px] md:pb-[100px] xl:pb-[100px] grid grid-rows-[8vh_1fr] md:grid-rows-1 md:grid-cols-[30%_70%]'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] text-black font-bold font-title pb-[25px]'>PROJECT <br></br>OVERVIEW</h2>
                    <p className='text-start text-[15px] xl:text-[25px] text-black font-bold font-paragraph mb-[20px]'>
                        Germinados Kimuak, located in a small village in Bizkaia, is the only local company specialised in growing and marketing sprouts in the Basque Country and sells its products in small shops. 
                        Kimu differentiates itself from other entities by the wide variety of products it offers to local people. Not only does it sell fresh, ready-to-eat sprouts, but it also sells seeds so that people can produce the sprouts in their own homes. 
                    </p>
                </div>


                

               
                <div className='px-[50px] pb-[25px] md:pt-[100px] md:pb-[100px] grid grid-rows-[8vh_1fr] md:grid-rows-1 md:grid-cols-[30%_70%]'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] text-black font-bold font-title pb-[25px]'>CHALLENGE</h2>



                    <div>
                        <h3 className='text-[25px] md:text-[30px] xl:text-[35px] leading-[37px] text-green font-bold font-title pb-[25px]'>
                            The aim of the project was to create a new brand and generate packaging in line with the principles <br></br>of sustainability and reuse.
                        </h3>
                        <p className='text-start text-[15px] xl:text-[25px] text-black font-bold font-paragraph mb-[20px]'>

                        In this way, the terms that define the brand are on the one hand that it is a transparent entity, it is enriching and that it is approachable and finally, it is a brand that focuses on the concept of DIY.

                        </p>
                    </div>

                </div>


                <div className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-[60%_40%] gap-[25px] px-[50px] pb-[50px] md:pb-[100px]'>
                    <img className="object-cover h-[350px] md:h-auto w-[600px] rounded-[20px]" src={logo} />
                    <img className="object-cover h-[350px] md:h-auto w-[450px] rounded-[20px]" src={isotype} />
                </div>

                <div className='px-[50px] pb-[50px] md:pb-[100px]'>
                    <img className="object-cover w-screen h-[350px] md:h-auto rounded-[20px]" src={marketOfTolosaTwo} />
                </div>

                <div className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-[40%_60%] gap-[25px] px-[50px] pb-[50px] md:pb-[100px]'>
                    <img className="object-cover h-[350px] md:h-auto w-[450px] rounded-[20px]" src={icons} />
                    <img className="object-cover h-[350px] md:h-auto w-[680px] rounded-[20px]" src={illustration} />
                </div>


                <div className='p-[50px] md:pt-[100px] md:pb-[100px] xl:pb-[100px] grid grid-rows-[8vh_1fr] md:grid-rows-1 md:grid-cols-[30%_70%]'>
                    <h2 className='text-[25px] md:text-[30px] xl:text-[40px] leading-[42px] text-black font-bold font-title pb-[25px]'>SOLUTION</h2>

                    <div>
                        <h3 className='text-[25px] md:text-[30px] xl:text-[35px] leading-[37px] text-green font-bold font-title pb-[25px]'>

Mark based on a single variation.
It follows a simple structure, which is created through the distance between the letters of the mark itself.
                        </h3>
                        <p className='text-start text-[15px] xl:text-[25px] text-black font-bold font-paragraph mb-[20px]'>
                        To create the identity and the packaging, a design in relation and coherence with the three elements was proposed,
which were the typography, always using Franklin Gothic,
in different sizes or hierarchies, on the other hand, the colours and the illustration,
which was done taking as a reference the orchards of the farmhouses.
                        </p>
                    </div>

                </div>
                

                

                <div className='px-[50px] pb-[50px] md:pb-[100px]'>
                    <img className="object-cover w-screen h-[350px] md:h-auto rounded-[20px]" src={toteBag} />
                </div>

                <div className='px-[50px] pb-[50px] md:pb-[100px] grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-[25px]'>
                    <img className="object-cover w-screen h-[350px] md:h-[600px] rounded-[20px]" src={packaging} />
                    <img className="object-cover w-screen h-[350px] md:h-[600px] rounded-[20px]" src={packagingTwo} />
                </div>

                

                <div className='px-[50px] pb-[50px] md:pb-[100px]'>
                    <img className="object-cover w-screen h-[350px] md:h-[100vh]  rounded-[20px]" src={packagingFour} />
                </div>


                <div className='px-[50px] pb-[50px] md:pb-[100px]'>
                    <img className="object-cover w-screen h-auto rounded-[20px]" src={webiste} />
                </div>

                <div className='px-[50px] pb-[50px] md:pb-[100px]'>
                    <img className="object-cover w-screen h-auto  rounded-[20px]" src={mobile} />
                </div>

                
                

                



               

                
                
            </div>
            <div className='p-[50px] flex justify-center'>
                <Link to="/projects/descubre">
                    <p className='text-black font-bold text-[60px] font-title'>Next Project</p>
                </Link>
            </div>
            <Footer/>
        </div>
    )
}