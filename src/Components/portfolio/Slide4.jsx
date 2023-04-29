import React, { useEffect, useRef, useState } from 'react';
import Button from './Button';
import "./Slide4.css";

export default function Slide4() {

    const section = useRef(null);
 const [scrolled, setScrolled] = useState(false);

  
  useEffect(() => {
    const scroll = () => {
      if (window.scrollY >= section.current.offsetTop -250) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, [])

  return (
    <section ref={section} className='relative min-h-[600px] w-full bg-gradient flex sm:flex-row flex-col justify-between items-center sm:pl-12 pl-4 '>
          <div className={`w-full h-[580px] flex flex-col justify-around left before:hidden md:before:block ${scrolled?"active":""} relative z-20`}>
                <h1 className='relative uppercase sm:text-[90px] text-[50px] sm:leading-[75px] leading-[55px] font-bold text-red-800'>Full-body Fitness</h1>
                <p className='relative text-white leading-8 text-[22px] font-poppins font-medium w-[60%]'>You can benefit from a wide range of effective workout routines! Join now to access over 3000 exercises.</p>
                <Button name='show' to='/home#ec' />
          </div>
          <div className="w-full sm:relative absolute top-0 left-0 h-[680px] right bg-[url('/src/assets/images/s4.webp')] bg-cover z-10">
              {/* <img src={boy} alt="boy" className='h-full w-full overflow-hidden'/> */}
          </div>
    </section>
  )
}
