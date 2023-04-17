import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { back, cardio, chest, lowerArms, lowerLegs, neck, shoulders, upperArms, upperLegs, waist } from '../../assets';
import {exercise, bodyParts} from "../../utils/index"

import 'swiper/swiper-bundle.min.css';  
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function BodyPartMenu({ setBodyPart, bodyPart,setExercises }) {
  
  const breakpoints = {
    768: {
      slidesPerView: 3,
    },
    620: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  }

  
  const handleCard = async (data) => {
      const filteredData = await exercise?.filter(
        (item) => item.bodyPart.includes(data),
        );   
    setExercises(filteredData);
    setBodyPart(data)
  };



  return (
    <section >
        <div className="relative  w-[80vw]  mt-10 overflow-hidden ">
        <Swiper
                breakpoints={breakpoints}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                  navigation
                onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(`swiper`)}
                  className='h-[150px]'
            >
                {
                  bodyParts.map((item, index) =>
                    <SwiperSlide
                      onClick={() => handleCard(item)}
                    className={`flex justify-center items-center w-full h-full ${item === bodyPart?"bg-gradient":""}`}
                    key={index}
                    >
                      <div className="w-full h-full relative  cursor-pointer select-none">
                        <h1 className='z-30 text-[30px] text-white text-center font-poppins font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>{item}</h1>
                        <div className={`absolute top-0 bg-gradient ${bodyPart === item?"opacity-[96%]":"opacity-[80%]"} w-full h-full transition-all duration-700 `}></div>
                        <img className=' w-[400px] object-cover h-[150px]' src={
                          (item === 'cardio' && cardio) ||
                          (item === 'chest' && chest) ||
                          (item === 'lower arms' && lowerArms) ||
                          (item === 'lower legs' && lowerLegs) ||
                          (item === 'neck' && neck) ||
                          (item === 'shoulders' && shoulders) ||
                          (item === 'upper arms' && upperArms) ||
                          (item === 'upper legs' && upperLegs) ||
                          (item === 'waist' && waist) ||
                          (item === 'back' && back)
                        }
                          alt="" />
                      </div>
                    </SwiperSlide>
                  )
                }
                </Swiper>
          </div>
    </section>
  )
}
