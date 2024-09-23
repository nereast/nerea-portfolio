import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom';
import logos from "../assets/itear/itear-branding.jpg";
import icons from "../assets/itear/icons.jpg";

import pieceOne from "../assets/itear/piece-of-itear.jpg";
import pieceFour from "../assets/itear/itear-piece-four.jpg";
import pieceFive from "../assets/itear/piece-five.jpg";
import welding from "../assets/itear/welding.jpg";

import brandingOne from "../assets/itear/branding-itear.jpg";
import brandingTwo from "../assets/itear/branding-itear-two.jpg";
import brandingThree from "../assets/itear/branding-itear-three.jpg";
import websiteVideo from "../assets/itear/website-itear.jpg";

export const Itear = ({ coverImage }) => {

    return (

        <div>
            <Header />
            <div className='container'>

                <div className='px-[50px] pt-[150px] md:pt-[100px] md:pb-[100px] xl:pb-[100px] grid grid-rows-[10vh_1fr] md:grid-rows-1 md:grid-cols-[40%_60%]'>
                    <h1 className='text-[30px] md:text-[40px] xl:text-[50px] leading-[27px] md:leading-[42px] xl:leading-[52px] text-black font-bold font-title	md:pb-[25px]'>
                        Itear: <br></br> New identity for small and family businesses.
                    </h1>
                    <div>
                        <p className='text-start md:text-[25px] md:leading-[30px] xl:text-[30px] xl:leading-[34px] text-black font-normal font-paragraph mb-[25px]'>
                            The project consisted of creating a new identity, updating the corporate stationery and adding value to the company through a new website.
                        </p>
                        <div className='grid grid-cols-[120px_100px] grid-rows-1 gap-[20px] my-[50px] md:m-0'>
                            <span className='rounded-full border-green border-[2px] flex justify-center'>
                                <p className='text-green font-paragraph font-medium text-[20px]'>Branding</p>
                            </span>
                            <span className='rounded-full border-green border-[2px] flex justify-center'>
                                <p className='text-green font-paragraph font-medium text-[20px]'>UX/UI</p>
                            </span>
                        </div>
                    </div>
                </div>

                <img class="w-screen h-[50vh] md:h-[100vh] object-cover" src={coverImage} alt="Cover of the project" title="Cover image" />





                <div className='p-[50px] md:pt-[100px] md:pb-[100px] xl:pb-[100px] grid grid-rows-[8vh_1fr] md:grid-rows-1 md:grid-cols-[30%_70%]'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] text-black font-bold font-title pb-[25px]'>PROJECT <br></br>OVERVIEW</h2>
                    <p className='text-start text-[15px] xl:text-[25px] text-black font-bold font-paragraph mb-[20px]'>
                        Itear is a small company located in Tolosa, Basque Country which since the 1980s has been dedicated to the manufacture and repair of industrial machinery.
                        Its services include centrifugal pumps, whose function is to transform mechanical energy into hydraulic energy. For the company, it is important to maintain the quality, <br className='hidden md:block'></br> the essence and the functioning of the parts. In addition, it is a company that collaborates with different suppliers focused on metallurgy to carry out its work.
                    </p>
                </div>


                <div className='px-[50px] pb-[25px] md:pt-[100px] md:pb-[100px] xl:pb-[100px] grid grid-rows-[8vh_1fr] md:grid-rows-1 md:grid-cols-[30%_70%]'>
                    <h2 className='text-[25px] md:text-[30px] xl:text-[40px] leading-[42px] text-black font-bold font-title pb-[25px]'>CHALLENGE</h2>
                    <div>
                        <h3 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[35px] xl:leading-[37px] text-green font-bold font-title pb-[25px]'>
                            The aim of the project was to generate a solid content network where an industrial entity was identified. Within the content network, the visual identity of the company and the website.
                        </h3>
                        <p className='text-start text-[15px] xl:text-[25px] text-black font-bold font-paragraph mb-[20px]'>
                            Within these means, the work process followed in the company, <br className='hidden md:block'></br>the services offered and the values that characterise the entity were studied in depth.
                            Within the project, it was taken into <br className='hidden md:block'></br>account that the work was carried out within the values of sustainability and circular economy.
                        </p>
                    </div>

                </div>


                <div className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-[60%_40%] gap-[25px] px-[50px] pb-[50px] md:pb-[100px]'>
                    <img className="object-cover h-[350px] w-auto md:h-auto md:w-[600px] rounded-[20px]" src={logos} />
                    <img className="object-cover h-[350px] w-auto md:h-auto md:w-[450px] rounded-[20px]" src={icons} />
                </div>


                <div className='px-[50px] pb-[50px] md:pb-[100px]'>
                    <img className="object-cover w-screen h-[350px] md:h-[600px] rounded-[20px]" src={pieceOne} />
                </div>


                <div className='px-[50px] pb-[50px] md:pb-[100px]'>
                    <img className="object-cover w-screen h-[350px] md:h-[600px] rounded-[20px]" src={welding} />
                </div>



                <div className='p-[50px] md:pt-[100px] md:pb-[100px] xl:pb-[100px] grid grid-rows-[8vh_1fr] md:grid-rows-1 md:grid-cols-[30%_70%]'>
                    <h2 className='text-[25px] md:text-[30px] xl:text-[40px] leading-[42px] text-black font-bold font-title pb-[25px]'>SOLUTION</h2>
                    <div>
                        <h3 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[35px] xl:leading-[37px] text-green font-bold font-title pb-[25px]'>
                        Sinter as a typeface in its Demi version, with the purpose of showing tradition and modernisation in the industrial sector.
                        </h3>
                        <p className='text-start text-[15px] xl:text-[25px] text-black font-bold font-paragraph mb-[20px]'>

                        Precisely thanks to the art direction of the images of the pieces <br></br>and the new identity, the company's new universe was born.
                        </p>
                    </div>
                </div>



                


                
                <div className='px-[50px] pb-[50px] md:pb-[100px] grid grid-rows-3 md:grid-rows-1 md:grid-cols-2 gap-[25px]'>
                    <img className="object-cover w-screen h-[350px] md:h-[600px] rounded-[20px]" src={pieceFour} />
                    <img className="object-cover w-screen h-[350px] md:h-[600px] rounded-[20px]" src={pieceFive} />
                </div> 

                

                <div className='px-[50px] pb-[50px] md:pb-[100px]'>
                    <img className="object-cover w-screen h-[350px] md:h-[100vh] rounded-[20px]" src={brandingThree} />
                </div>


                <div className='px-[50px] pb-[50px] md:pb-[100px] grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-[25px]'>
                    <img className="object-cover w-screen h-[350px] md:h-[100vh] rounded-[20px]" src={brandingOne} />
                    <img className="object-cover w-screen h-[350px] md:h-[100vh] rounded-[20px]" src={brandingTwo} />
                </div>



                <div className='px-[50px] pb-[50px] md:pb-[100px]'>
                <img className="object-cover w-screen h-[350px] md:h-auto rounded-[20px]" src={websiteVideo} />
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