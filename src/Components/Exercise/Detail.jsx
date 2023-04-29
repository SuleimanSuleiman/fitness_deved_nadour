import {IoIosBody, IoMdFitness} from "react-icons/io"
import { BiTargetLock } from "react-icons/bi";


export default function Detail({ exer }) {
  return (
    <section className="min-h-[680px] w-full flex xs:flex-row flex-col  sm:justify-between justify-start xs:items-center items-start bg-black">
          <div className="basis-1/2 w-full h-full flex justify-center items-center">
              <img src={exer[0].gifUrl} className="w-full h-full" alt={exer[0].name} loading="lazy"/>
          </div>
          <div className="p-4 basis-1/2 sm:h-[300px] h-full flex flex-col justify-around items-start">
              <h1 className="font-poppins font-semibold text-red-800 text-[30px] select-none">{exer[0].name}</h1>
              <p className="font-poppins text-white white-text-black-bg mt-4 sm:text-[15px] text-[16px] md:leading-10 leading-6">
                  Exercises keep you strong.{' '}
                <span className="capitalize text-red-800 font-semibold">{exer[0].name}</span> bup is one
                 of the best <br /> exercises to target your <span className="capitalize text-red-800 font-semibold">{exer[0].target}</span>. It will help you improve your{' '}
                        <br /> mood and gain energy.
              </p>
              <div className="flex w-full flex-row justify-between items-center mt-10 gap-1">
                <div className="w-full flex justify-center items-center flex-col cursor-pointer">
                  <IoIosBody size='40px' className="text-red-800" />
                  <p className="font-poppins font-semibold text-white">{ exer[0].bodyPart}</p>
                </div>
                <div className="w-full flex justify-center items-center flex-col cursor-pointer">
                  <BiTargetLock size='40px' className="text-red-800" />
                  <p className="font-poppins font-semibold text-white">{ exer[0].target}</p>
                </div>
                <div className="w-full flex justify-center items-center flex-col cursor-pointer">
                  <IoMdFitness size='40px' className="text-red-800" />
                  <p className="font-poppins font-semibold text-white">{ exer[0].bodyPart}</p>
                </div>
              </div>
          </div>
    </section>
  )
}
