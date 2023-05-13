import React from 'react'
import back3 from '../../assets/images/back3.jpg';

export default function Contact() {
  return (
      <section className="sm:h-[500px] h-[300px] w-full relative overflow-hidden">
        <img src={back3} alt='img' className='sm:w-[50%] w-[100%] z-0 absolute bg-cover right-0'/>
        <div className="sm:p-12 p-4 sm:w-[50%] w-full h-full relative flex flex-col justify-around sm:bg-black ">
              <h1 className='text-red-800 sm:text-[62px] text-[52px] uppercase font-bold leading-[62px] '>Contact Us</h1>
              <div className="text-white font-poppins font-semibold  overflow-hidden bg-black p-2">
                  <h2 className='mb-2 text-red-800 text-[19px]'>
                      <a href=" https://nominatim.openstreetmap.org/search?city='safita'">
                        Safita, Tartous
                      </a>
                    </h2>
                  <h2>Facebook:
                      <span className='text-red-800 text-[19px] ml-1'>
                          <a href="https://www.facebook.com/profile.php?id=100008975619304&mibextid=ZbWKwL">Daived Naddour</a>
                      </span>
                  </h2>
                  <h2 className='mb-2'>Instagram: 
                      <span className='text-red-800 text-[19px] ml-1'>
                          <a href="https://instagram.com/daivednaddour?igshid=ODM2MWFjZDg=">daivednaddour</a>
                      </span>
                  </h2>
                  <h2 className='mb-2'>Email: 
                      <span className='text-red-800 text-[19px] ml-1'>
                          <a href="mailto:ssuleimansuleiman78@gmail.com">
                           ssuleimansuleiman78@gmail.com
                          </a>
                      </span>
                  </h2>
              </div>
        </div>
    </section>
  )
}
