import {useState} from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
   <nav className="w-screen flex justify-center">
     <div className="flex p-[15px] fixed z-[100] top-[25px] w-[70vw] bg-yellow/[.7] rounded-[50px] backdrop-blur-[20px] backdrop-saturate-[1.7]	">
      <div className="w-6/12 md:w-2/12 xl:w-2/12">
        <a href="/home/#hello">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 310 310" fill="none" className='w-[40px] h-[40px]'>
            <path fillRule="evenodd" clipRule="evenodd" d="M118.677 51.2667L155.001 154.626L191.324 51.2667C200 26.5796 182.063 0.741121 156.121 0.0156404C155.842 0.00783956 155.563 0.00294227 155.282 0.000981169C155.188 0.000327468 155.095 8.19925e-09 155.001 0C128.458 -2.32041e-06 109.877 26.2256 118.677 51.2666L118.677 51.2667ZM118.677 258.733L155.001 155.374L191.324 258.733C200.125 283.774 181.543 310 155.001 310C128.458 310 109.877 283.774 118.677 258.733ZM155.372 155.001L258.732 118.677C283.773 109.877 309.999 128.458 309.999 155.001C309.999 181.543 283.773 200.125 258.732 191.324L155.372 155.001ZM51.2667 118.677L154.626 155.001L51.2667 191.324C26.2256 200.125 1.1602e-06 181.543 0 155.001C-1.1602e-06 128.458 26.2256 109.877 51.2666 118.677L51.2667 118.677ZM155.265 155.265L254.036 202.667C274.974 212.715 281.73 238.229 270.518 257.024C268.917 259.709 266.948 262.256 264.602 264.602C248.18 281.025 221.87 278.939 207.855 262.13C205.853 259.729 204.102 257.027 202.667 254.036L155.265 155.265ZM107.335 55.9662L154.737 154.737L55.966 107.336C32.0367 95.8516 26.6315 64.1681 45.3997 45.3999C64.168 26.6316 95.8514 32.0368 107.335 55.9661L107.335 55.9662ZM154.737 155.265L107.335 254.036C97.2867 274.974 71.773 281.73 52.9783 270.518C50.2933 268.917 47.7455 266.948 45.3995 264.602C28.9772 248.18 31.0628 221.87 47.8716 207.855C50.2729 205.853 52.9746 204.102 55.9658 202.667L154.737 155.265ZM254.036 107.335L155.265 154.737L202.666 55.966C204.102 52.9748 205.853 50.2731 207.855 47.8718C221.869 31.063 248.18 28.9774 264.602 45.3997C266.948 47.7457 268.916 50.2935 270.518 52.9785C281.73 71.7732 274.974 97.2869 254.036 107.335Z" fill="#000" />
          </svg>
        </a>
      </div>

      <div className="hidden md:flex md:w-10/12 xl:w-10/12 flex-row justify-end gap-[20px]">
          <div className="flex justify-end">
            <a className="flex items-center" href="/home/#about">
              <p className="font-paragraph text-[15px]">About Me</p></a>
          </div>
          <div className="flex justify-end">
            <a className="flex items-center" href="/home/#projects">
              <p className="font-paragraph text-[15px]">Projects</p>
            </a>
          </div>
          <div className="flex justify-end">
            <a className="flex items-center" href="/home/#contact">
              <p className="font-paragraph text-[15px]">Contact</p>
            </a>
          </div>
      </div>

      <div className="w-6/12 text-end flex items-center justify-end md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <p className="text-black font-paragraph text-sm">Menu</p>
          </button>
        </div>
        
    </div>

    <div className={`block md:hidden flex-col md:flex-row ${isOpen ? '' : 'hidden'} fixed top-0 left-0 bg-yellow w-full h-full z-50 pt-0 p-[50px]`}>

          <div className="flex p-[15px] mt-[25px] w-full">
            <div className="w-6/12">
              <a href="/home/#hello">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 310 310" fill="none" className='w-[40px] h-[40px]'>
                  <path fillRule="evenodd" clipRule="evenodd" d="M118.677 51.2667L155.001 154.626L191.324 51.2667C200 26.5796 182.063 0.741121 156.121 0.0156404C155.842 0.00783956 155.563 0.00294227 155.282 0.000981169C155.188 0.000327468 155.095 8.19925e-09 155.001 0C128.458 -2.32041e-06 109.877 26.2256 118.677 51.2666L118.677 51.2667ZM118.677 258.733L155.001 155.374L191.324 258.733C200.125 283.774 181.543 310 155.001 310C128.458 310 109.877 283.774 118.677 258.733ZM155.372 155.001L258.732 118.677C283.773 109.877 309.999 128.458 309.999 155.001C309.999 181.543 283.773 200.125 258.732 191.324L155.372 155.001ZM51.2667 118.677L154.626 155.001L51.2667 191.324C26.2256 200.125 1.1602e-06 181.543 0 155.001C-1.1602e-06 128.458 26.2256 109.877 51.2666 118.677L51.2667 118.677ZM155.265 155.265L254.036 202.667C274.974 212.715 281.73 238.229 270.518 257.024C268.917 259.709 266.948 262.256 264.602 264.602C248.18 281.025 221.87 278.939 207.855 262.13C205.853 259.729 204.102 257.027 202.667 254.036L155.265 155.265ZM107.335 55.9662L154.737 154.737L55.966 107.336C32.0367 95.8516 26.6315 64.1681 45.3997 45.3999C64.168 26.6316 95.8514 32.0368 107.335 55.9661L107.335 55.9662ZM154.737 155.265L107.335 254.036C97.2867 274.974 71.773 281.73 52.9783 270.518C50.2933 268.917 47.7455 266.948 45.3995 264.602C28.9772 248.18 31.0628 221.87 47.8716 207.855C50.2729 205.853 52.9746 204.102 55.9658 202.667L154.737 155.265ZM254.036 107.335L155.265 154.737L202.666 55.966C204.102 52.9748 205.853 50.2731 207.855 47.8718C221.869 31.063 248.18 28.9774 264.602 45.3997C266.948 47.7457 268.916 50.2935 270.518 52.9785C281.73 71.7732 274.974 97.2869 254.036 107.335Z" fill="#000" />
                </svg>
              </a>
            </div>
            <div className="w-6/12 flex justify-end">
              <button onClick={toggleMenu} className="md:hidden text-black focus:outline-none flex flex-row">
                <svg className="w-[40px] h-[40px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          
          </div>
          <div className="md:hidden flex flex-col mt-[100px]">
          <a href="/home/#about" className="text-black font-title font-regular text-[20px] mr-4 mb-[20px]" onClick={toggleMenu}>About me</a>
          <a href="/home/#projects" className="text-black font-title font-regular text-[20px] mr-4 mb-[20px]" onClick={toggleMenu}>Projects</a>
          <a href="/home/#contact" className="text-black font-title font-regular text-[20px] mr-4 mb-[20px]" onClick={toggleMenu}>Contact</a>
          </div>
        </div>
   </nav>


    
  );
};
