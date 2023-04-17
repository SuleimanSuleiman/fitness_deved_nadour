import React, {  useEffect, useRef, useState } from 'react'
import BodyPartMenu from "./BodyPartMenu";
import { exercise } from "../../utils/index";
import { cycle } from '../../assets';

function SearchExercise({ setExercises, setBodyPart,bodyPart }) {

  const [searchValue, setSearchValue] = useState(null)

  
  const handleSearch = async (e) => {

    e.preventDefault()
    if (searchValue) {    
      const filteredData = await exercise?.filter(
        (item) => item.name.toLowerCase().includes(searchValue)
               || item.target.toLowerCase().includes(searchValue)
               || item.equipment.toLowerCase().includes(searchValue)
               || item.bodyPart.toLowerCase().includes(searchValue),
        );
      setSearchValue('');
      setExercises(filteredData);
    }
  };

  
    const section = useRef(null);
    const [scrolled, setScrolled] = useState(false);
  
      
      useEffect(() => {
        const scroll = () => {
          if (window.scrollY >= section.current.offsetTop -700) {
            setScrolled(true)
          } else {
            setScrolled(false)
          }
        }
        window.addEventListener("scroll", scroll);
  
        return () => window.removeEventListener("scroll", scroll);
      }, [])
  return (

    <section ref={section} id="exercise" className='bg-black h-[500px] flex flex-col justify-center items-center p-4 sm:mt-[70px] mt-0 '>
          <img src={cycle} className={`a sm:hidden absolute block w-[140px] h-[140px] opacity-[40%]  left-[220px] -z-1 ${scrolled?"active":""}`} alt="" />
          <img src={cycle} className={`a sm:hidden absolute block w-[140px] h-[140px] opacity-[40%] bottom-0 right-[180px] -z-1 ${scrolled?"active":""}`} alt="" />
            <h1 className='font-poppins font-semibold sm:text-[42px] text-[32px] text-white sm:mb-12 mb-6 text-center'>Awesome Exercises <br />You  Should Know</h1>
            <form  className='flex sm:flex-row flex-col items-center'>
              <input
                type="text"
                placeholder='Search Exercises'
                className='text-blue-800 p-2 border-none outline-none sm:w-[500px] w-[300px] z-20 '
                onChange={(e) => setSearchValue(e.target.value)}
              />
        <button
                onClick={(e) => handleSearch(e)} 
                className='cursor-pointer bg-gradient font-poppins font-semibold w-[150px] outline-none sm:mt-0 mt-3  h-10 text-white z-20'
              >
                Search
              </button>
            </form>
              <div className="">
                <BodyPartMenu setExercises={setExercises} setBodyPart={setBodyPart} bodyPart={bodyPart} />
            </div>
    </section>
  )
}

export default SearchExercise