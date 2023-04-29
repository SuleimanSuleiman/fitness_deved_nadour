import { useEffect, useRef, useState } from "react";
import { cycle } from "../../assets/index";
import Button from "./Button.jsx";
import "./Plan.css"
import { Link } from "react-router-dom";


export default function Plan() {

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
      <section ref={section} className='w-full xs:h-[680px] h-[900px] snap-center flex justify-center items-center bg-gradient relative sm:py-0 py-[140px]'>
          <div className=" h-[70vh] sm:w-[70%] w-[92%] uppercase flex justify-center items-center flex-col mb-2">
              <h1 className="text-center tracking-tight leading-[55px] text-white sm:text-[60px] text-[40px] font-bold mb-4">Make healthier<br /> choices</h1>
              <p className="text-center text-dimWhite sm:leading-8 leading-6">
                Welcome to my website, where you'll find a unique approach to fitness that sets us apart from the rest. We specialize in offering a wide range of exercises and workouts that are tailored to your individual needs and goals. Whether you're looking to build muscle, lose weight, or simply maintain your current level of fitness, we've got you covered. Our team of experienced trainers is dedicated to helping you achieve your desired results, and we pride ourselves on providing personalized attention and support every step of the way.   
              </p>
        <div className="z-40 buttons grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-8 mt-8">
          <Link to='/home#exercise'>
            <p className="relative sm:mx-4 mx-auto p-1 border-none sm:w-[200px] w-[190px] sm:h-[80px] h-[60px] text-[14px] font-poppins font-semibold cursor-pointer bg-black text-white flex justify-center items-center">
              Varied fitness exercises
            </p>
          </Link>
          <Link to='mailto:ssuleimansuleiman78@gmail.com'>
            <p className="relative sm:mx-4 mx-auto p-1 border-none sm:w-[200px] w-[190px] sm:h-[80px] h-[60px] text-[14px] font-poppins font-semibold cursor-pointer bg-black text-white flex justify-center items-center">
              Professional guidance
            </p>
          </Link>
          <Link to='/home'>
            <p className="relative sm:mx-4 mx-auto p-1 border-none sm:w-[200px] w-[190px] sm:h-[80px] h-[60px] text-[14px] font-poppins font-semibold cursor-pointer bg-black text-white flex justify-center items-center">
              Improved physical performance
            </p>
          </Link>
          </div>
          </div>
          <img src={cycle} className={`a absolute w-[140px] h-[140px] opacity-[60%] top-[120px] left-[180px] -z-1 ${scrolled?"active":""}`} alt="" />
          <img src={cycle} className={`a absolute w-[140px] h-[140px] opacity-[60%] bottom-[120px] right-[180px] -z-1 ${scrolled?"active":""}`} alt="" />
    </section>
  )
}
