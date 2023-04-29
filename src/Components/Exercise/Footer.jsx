import { Link } from "react-router-dom";
import { Logo } from "../../assets/index";

export default function Footer() {
  return (
      <section className='bg-black h-[120px]  w-full p-4 '>
      <div className="flex justify-center items-center flex-col">
              <div className="flex justify-between items-center">
                    <img src={Logo} alt="Logo" className="w-[32px] h-[32px]" />
                    <p className="italic text-red-800 text-[19px] font-semibold ml-4">Daived Nadour Gym</p>
              </div>
              <p  className="italic text-red-800 text-[16px] font-semibold mt-4 ">Made With <span className="self-auto">❤️</span> by <Link to="mailto:ssuleimansuleiman78@gmail.com" className="text-dimWhite cursor-pointer">Suleiman Suleiman</Link></p>
          </div>
    </section>
  )
}
