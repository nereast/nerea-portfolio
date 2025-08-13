import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);


export const Loading = ({ title, background, onFinish }) => {

    const container = useRef()

    useGSAP(
        () => {
          gsap.to(container.current, {
            delay: 1,     
            yPercent: -100, 
            ease: "expo.inOut",
            onComplete: () => {
              if (onFinish) onFinish(); 
            }
          });
        },
        { scope: container }
      );
    

    return (
        <div ref={container} className={`${background} w-full h-screen flex items-center justify-start absolute top-0`}>
            <div className="px-[25px] xl:px-[50px]">
                <h1 className="text-white font-bold font-title text-[50px] md:text-[100px] xl:text-[200px] leading-[50px] md:leading-[80px] xl:leading-[100px]">{title}</h1>
            </div>
        </div>
    )
}
