import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

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

export const DesignSystem = () => {

    return (

        <div className='bg-beige'>
            <Header />
            <div className='px-[25px] md:px-[50px] pt-[200px] md:pb-[50px] xl:pt-[300px] xl:pb-[100px] flex flex-col xl:flex-row bg-cover bg-right xl:bg-top-left' style={{ backgroundImage: `url(${background})` }}>
                <div className='xl:w-6/12'>
                    <h1 className='text-[25px] md:text-[40px] xl:text-[50px] leading-[27px] md:leading-[42px] xl:leading-[52px] text-black font-bold font-title mb-[20px] md:mb-[30px]'>
                        Creation of a design system adapted to a music application.
                    </h1>
                </div>
                <div className='xl:w-1/12'></div>
                <div className='xl:w-5/12'>
                    <p className='text-start text-[15px] md:text-[25px] md:leading-[30px] xl:text-[30px] xl:leading-[34px] text-black font-normal font-paragraph xl:mb-[25px]'>
                       The project consisted of designing the system to be used in the new music platform called Echo.
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
            <img class="w-screen h-auto object-cover hidden xl:block px-[50px] xl:py-[100px]" src={coverImage} alt="Imagen que muestra las variaciones de los botones y las listas que se han diseñado para el Sistema de Diseño" title="Imagen de los botones y las listas del Sistema de Diseño"/>
            <img class="w-screen h-auto object-cover hidden md:block xl:hidden p-[50px]" src={coverImageTablet} alt="Imagen que muestra las variaciones de los botones y las listas que se han diseñado para el Sistema de Diseño" title="Imagen de los botones y las listas del Sistema de Diseño"/>
            <img class="w-screen h-auto object-cover block md:hidden px-[25px] py-[50px]" src={coverImageMobile} alt="Imagen que muestra las variaciones de los botones y las listas que se han diseñado para el Sistema de Diseño" title="Imagen de los botones y las listas del Sistema de Diseño"/>
            <div className='flex flex-col lg:flex-row px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <div className='lg:w-4/12'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] text-black font-bold font-title pb-[25px]'>PROJECT <br className='hidden xl:block'></br>OVERVIEW</h2>
                </div>
                <div className='lg:w-1/12'></div>
                <div className='lg:w-8/12'>
                    <p className='text-start text-[15px] xl:text-[25px] text-black font-normal font-paragraph mb-[20px]'>
                      The Echo app aims to provide an intuitive and convenient user experience for easy listening to music. 
                      Therefore, the starting point was arrived at after listing the functionalities that the app would have, which allowed the principles, functions and components to be better developed.
                    </p>
                </div>
            </div>
            <div className='px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <img class="w-screen h-auto object-cover" src={components} alt="Imagen que muestra colores y diferentes componentes que forman parte del Sistema de Diseño" title="Imagen de los componentes del Sistema de Diseño"/>
            </div>
            <div className='flex flex-col lg:flex-row px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <div className='lg:w-4/12'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] text-black font-bold font-title pb-[25px]'>CHALLENGE</h2>
                </div>
                <div className='lg:w-1/12'></div>
                <div className='lg:w-8/12'>
                    <h3 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[35px] xl:leading-[37px] text-green font-bold font-title pb-[25px]'>
                       After thinking about the complete list of elements that would complement the design system, development began on the main elements.
                    </h3>
                    <p className='text-start text-[15px] xl:text-[25px] text-black font-normal font-paragraph mb-[20px]'>
                       The first elements to be developed were typefaces, colours, graphic elements, iconography and structure.
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
                   <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] text-black font-bold font-title pb-[25px]'>TYPEFACES</h2>
                   <p className='text-[15px] xl:text-[25px] text-black font-normal font-paragraph mb-[20px]'>
                     The IBM Plex Mono typeface is used for headings and the Inter typeface for texts. The scales of the typefaces have been defined for use on different device sizes,which change and follow the order established according to the size of the devices.
                   </p>
                </div>
            </div>
            <div className='px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px] flex justify-center'>
                <img className='w-auto h-auto object-cover' src={typographies} alt='Imagen que muestra las dos tipografías que se utilizan dentro del Sistema de Diseño' title='Tipografías del Sistema de Diseño'/>
            </div>
            <div className='px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px] flex justify-center'>
                <div className='w-8/12'>
                   <hr className='border-black border-[2px]'></hr>
                </div>
            </div>
            <div className='px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px] flex justify-center'>
                <div className='xl:w-8/12 text-center'>
                   <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] text-black font-bold font-title pb-[25px]'>COLOURS</h2>
                   <p className='text-[15px] xl:text-[25px] text-black font-normal font-paragraph mb-[20px]'>
                   The colour palette has been established with a total of five secondary colours, which together with the main colours (black and white) help to combine colours to generate different compositions. On the other hand, there are the semantic colours, which have been chosen to inform the user. Different types of colour transparency will also be used to create new compositions.
                   </p>
                </div>
            </div>
            <div className='px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <img className='w-auto h-auto object-cover' src={colours} alt='Imagen que muestra la gama crómatica de colores que se usa para el Sistema de Diseño' title='Colores del Sistema de Diseño'/>
            </div>
            <div className='px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px] flex justify-center'>
                <div className='w-8/12'>
                   <hr className='border-black border-[2px]'></hr>
                </div>
            </div>
            <div className='px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px] flex justify-center'>
                <div className='xl:w-8/12 text-center'>
                   <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] text-black font-bold font-title pb-[25px]'>ICONOGRAPHY</h2>
                   <p className='text-[15px] xl:text-[25px] text-black font-normal font-paragraph mb-[20px]'>
                   Icon sizes have been set following the same logic as column sizes and page layouts. 
                   </p>
                </div>
            </div>
            <div className='px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px] flex flex-col md:flex-row gap-[20px]'>
                <div className='xl:w-6/12'>
                   <img className='w-full h-[400px] md:h-auto object-cover rounded-[10px]' src={icon} alt='Imagen que muestra un icono de un CD que se ha diseñado para formar parte del Sistema de Diseño' title='Icono del Sistema de Diseño'/>
                </div>
                <div className='xl:w-6/12'>
                  <img className='w-full h-[400px] md:h-auto object-cover rounded-[10px]' src={icons} alt='Imagen que muestra los iconos que forman parte del Sistema de Diseño' title='Iconos del Sistema de Diseño'/>
                </div>
            </div>
            <div className='px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px] flex justify-center'>
                <div className='w-8/12'>
                   <hr className='border-black border-[2px]'></hr>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <div className='lg:w-4/12'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] text-black font-bold font-title pb-[25px]'>SOLUTION</h2>
                </div>
                <div className='lg:w-1/12'></div>
                <div className='lg:w-8/12'>
                    <h3 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[35px] xl:leading-[37px] text-green font-bold font-title pb-[25px]'>
                    After fine-tuning the principles of the design system, it was time to create the components.
                    </h3>
                    <p className='text-start text-[15px] xl:text-[25px] text-black font-normal font-paragraph mb-[20px]'>
                    The library components were created with the idea that they would be used on different device and screen sizes. In addition, a clear and simple design was used to create them, in order to make the execution of the design and layout of the screens more effective.
                    </p>
                </div>
            </div>
            <div className='px-[25px] md:px-[50px] pb-[50px] md:pb-[100px]'>
                <img className="object-cover w-screen h-full rounded-[10px]" src={presentation} alt='Imagen que muestra diferentes tipos componentes que forman parte del Sistema de Diseño' title='Imagen de los componentes del Sistema de Diseño'/>
            </div>

            <div className='flex flex-col lg:flex-row px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <div className='lg:w-4/12'>
                    <h2 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[40px] xl:leading-[42px] text-black font-bold font-title pb-[25px]'>NEXT STEPS</h2>
                </div>
                <div className='lg:w-1/12'></div>
                <div className='lg:w-8/12'>
                    <h3 className='text-[25px] leading-[27px] md:text-[30px] md:leading-[32px] xl:text-[35px] xl:leading-[37px] text-black font-bold font-title pb-[25px]'>
                    After all the work process, the next step was 
                    to think about the screens that the Echo app would have. If you want to know more about this, you can check it out through this project <Button href='https://www.figma.com/design/DviDdC0Vn7GTRyGWuMsVjX/Echo?node-id=0-1&p=f&t=7dHt3xV2X6vmvCCC-0' text='link'/>.
                    </h3>
                </div>
            </div>
            <div className='flex justify-start md:justify-center gap-[25px] px-[25px] pb-[50px] md:px-[50px] xl:pb-[100px]'>
                <img className='bg-orange w-[111px] md:w-[200px] h-[100px] rounded-[10px]' src='' alt='Imagen que hace referencia al proyecto de Echo' title='Imagen de Echo' />
                <Link className='flex items-center' to="/projects/echo">
                    <p className='text-black font-bold text-[40px] leading-[42px] md:text-[50px] md-xl:text-[60px] font-title'>Next Project</p>
                </Link>
            </div>
            <Footer/>
        </div>
    )
}