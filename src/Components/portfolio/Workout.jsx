import React, { useEffect, useRef, useState } from 'react'
import "./Workout.css"

export default function Workout() {

  const section = useRef(null)

  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const scroll = () => {
      if (window.scrollY >= section.current.offsetTop -450) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, [])

  return (
    <section ref={section} className=" md:h-[600px] h-[100%] w-full bg-[url('/src/assets/images/s3.webp')] bg-cover flex md:flex-row flex-col justify-between md:px-12 px-4">
      <div className=" w-full h-[580px] flex flex-col justify-around md:mb-0 mb-12">
        <h1 className='uppercase sm:text-[90px] text-[60px] leading-[75px] font-bold text-blue-800 md:mb-0 mb-4'>Our Workout Routines</h1>
        <p className='text-white leading-8 text-[22px] font-poppins font-medium md:w-[60%] w-[90%]'>Every body is different, so we make sure you can choose a plan that works best for you.</p>
      </div>
      <div className={` w-full flex flex-col justify-around workout ${scrolled?"active":""}`}>
        <div className="flex justify-between md:flex-row flex-col md:items-start items-center mb-6 md:mb-0">
          <h4 className='md:w-[20%] w-[100%] text-center md:mb-0 mb-2 uppercase font-bold text-blue-800 text-[22px] leading-6'>Slow and steady</h4>
          <p className='md:w-[80%] w-full font-medium text-white ml-6'>ur product offerings include a wide range of fitness programs and services that are designed to meet the unique needs and goals of our clients. We offer customized workout plans tailored to each</p>
        </div>
        <div className="flex justify-between md:flex-row flex-col md:items-start items-center mb-6 md:mb-0">
          <h4 className='md:w-[20%] w-[100%] text-center md:mb-0 mb-2 uppercase font-bold text-blue-800 text-[22px] leading-6'>train like a champ</h4>
          <p className='md:w-[80%] w-full font-medium text-white ml-6'>We believe that everyone deserves to feel their best, both physically and mentally. Our programs are designed to help our clients achieve their goals in a safe, supportive, and enjoyable environment. We prioritize individual attention and customization, so each of our clients receives a personalized experience that is tailored to their unique needs and preferences.</p>
        </div>
        <div className="flex justify-between md:flex-row flex-col md:items-start items-center mb-6 md:mb-0">
          <h4 className='md:w-[20%] w-[100%] text-center md:mb-0 mb-2 uppercase font-bold text-blue-800 text-[22px] leading-6'>maintain the gain</h4>
          <p className='md:w-[80%] w-full font-medium text-white ml-6'>We offer online personal training services with specialized trainers. Our services include customized training programs tailored to your specific needs, such as weekly training plans, healthy nutrition programs, and comprehensive performance analysis. We believe that personal training is the best way to achieve your fitness goals, which is why we strive to provide the best possible service to our clients</p>
        </div>
      </div>
    </section>
  )
}
