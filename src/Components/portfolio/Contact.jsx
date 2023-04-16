import React from 'react'

export default function Contact() {
  return (
    <section className="sm:h-[600px] h-[500px] w-full bg-[url('/src/assets/images/contact.png')] bg-cover">
        <div className="sm:p-12 p-4 sm:w-[40%] w-full h-full flex flex-col justify-around sm:bg-black">
              <h1 className='text-blue-800 sm:text-[62px] text-[52px] uppercase font-bold leading-[62px]'>Let's discuss fitness</h1>
              <div className="text-white font-poppins font-semibold  overflow-hidden">
                  <h2 className='mb-2'>
                      <a href=" https://nominatim.openstreetmap.org/search?city='safita'">
                      Any City, Safita Tartous
                      </a>
                    </h2>
                  <h2>Facebook:
                      <span className='text-blue-800 text-[19px] ml-1'>
                          <a href="https://www.facebook.com/profile.php?id=100008975619304&mibextid=ZbWKwL">Daived Naddour</a>
                      </span>
                  </h2>
                  <h2 className='mb-2'>Instagram: 
                      <span className='text-blue-800 text-[19px] ml-1'>
                          <a href="https://instagram.com/daivednaddour?igshid=ODM2MWFjZDg=">daivednaddour</a>
                      </span>
                  </h2>
                  <h2 className='mb-2'>Email: 
                      <span className='text-blue-800 text-[19px] ml-1'>
                          <a href="mailto:ssuleimansuleiman78@gmail.com">
                           ssuleimansuleiman78@gmail.com
                          </a>
                      </span>
                  </h2>
                <h2 className='text-blue-800 mb-2'>Tel: (+963) 999999999</h2>
              </div>
        </div>
    </section>
  )
}
