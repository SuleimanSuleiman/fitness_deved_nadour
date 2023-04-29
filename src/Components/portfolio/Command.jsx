import { BiCommentDots} from "react-icons/bi";

export default function Command() {
  return (
    <section className='w-full min-h-[680px] bg-black flex justify-center items-center sm:py-0 py-[120px]'>
          <div className="w-[80%] mx-auto min-h-[300px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="flex flex-col justify-around">
                  <BiCommentDots  className="w-[32px] h-[32px] text-red-800"/>
                  <p className='text-white font-poppins font-medium leading-10'>I had an amazing experience with this website, it helped me achieve my health goals easily and effectively!</p>
                  <h4 className='font-poppins font-semibold text-red-800 text-[22px]'>- Suleiman Suleiman</h4>
              </div>
             <div className="flex flex-col justify-around">
               <BiCommentDots className="w-[32px] h-[32px] text-red-800" />
                  <p className='text-white font-poppins font-medium leading-10'>The workouts on this website are top-notch and the personalized approach really helped me stay motivated and on track.</p>
                  <h4 className='font-poppins font-semibold text-red-800 text-[22px]'>- Mike John</h4>
              </div>
             <div className="flex flex-col justify-around">
               <BiCommentDots  className="w-[32px] h-[32px] text-red-800"/>
                  <p className='text-white font-poppins font-medium leading-10'>I highly recommend this website to anyone looking for a comprehensive fitness resource that is both user-friendly and effective.</p>
                  <h4 className='font-poppins font-semibold text-red-800 text-[22px]'>- Gourge </h4>
              </div>
        </div>
    </section>
  )
}
