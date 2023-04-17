import { useEffect, useState } from "react"

import "./Banner.css"

export default function Banner() {

 const [scrolled, setScrolled] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY < 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  })
  return (
      <section className={`snap-center xs:h-[680px] h-[100vh] w-full bg-slate-900 sm:bg-[url('/src/assets/images/s2.webp')] bg-[url('/src/assets/images/s3.webp')] bg-cover px-4 sm:px-12`}>
          <div className="w-full h-full relative sm:leading-[80px] leading-[45px] uppercase ">
              <h1 className={`absolute  sm:bottom-2 bottom-[30%]  left-0  font-bold text-[40px] sm:text-[40px] md:text-[82px]  text ${scrolled?"active":""}`}>
                  <span className='text-blue-800'>Prepare<br /> to change<br /></span>
                  <span className='text-white'>for the better.</span>
              </h1>
          </div>
      </section>
  )
}
