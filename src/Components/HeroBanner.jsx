import React, { useEffect, useState } from 'react'
import ExportEcercise from './ExportEcercise'
import { deved } from '../assets'



const HeroBanner = () => {

    const [isComplate, setIsComplate] = useState(false);
    const [text, setText] = useState('');
    const skills = [`CPR`, `Fitness Programs`, `Kids`, `Training Programs`, `Heart Rate`, ` Injury Prevention`];
    const [time, setTime] = useState(200);
    const [loopNum, setLoopNum] = useState(0)

    useEffect(() => {
        let s = setInterval(() => {
           HandleSkills() 
        }, time);
        
        return ()=> clearInterval(s)
    })

    const HandleSkills = () => {
        let i = loopNum % skills.length;
        let fullText = skills[i];
        let updateText = isComplate ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText)
        if (isComplate) {
            setTime(prev => prev/2)
        }
        if (!isComplate && updateText === fullText) {
            setIsComplate(true)
            setTime(2000)
        } else if (isComplate && updateText === '') {
            setIsComplate(false)
            setLoopNum(loopNum + 1);
            setTime(200);
        }
    }

  return (
      <section className='w-full md:h-[80vh] items-center flex sm:flex-row flex-col  sm:pl-[80px] px-1 pt-2'>
          <div className="flex justify-center flex-col sm:text-start text-center w-full relative">
            <h3 className='font-poppins font-semibold mb-[30px] text-gradient text-[30px]'>Fitness Club</h3>
            <p className='font-poppins font-semibold mb-[30px] leading-[60px] text-[40px] '>
                  My name is <span className='text-gradient font-semibold'>Daived</span>
                  <br />
                  And I Have skills
                  <br />
                  in <span className='text-gradient'>{text}</span>
            </p>
            <p className='font-poppins font-medium mb-[25px] text-[18px]'>Check out the most effective exercesive</p> 
            <ExportEcercise />  
              <h1 className='select-none absolute sm:block hidden  -bottom-[110px] left-[35%] text-[110px] font-poppins font-semibold z-0 text-gradient opacity-[30%]'>
                  Exercises
              </h1>
          </div>
          <div className="right w-full h-full sm:bg-[#ff6875] rounded-l-[40%] flex justify-center items-center z-10">
              <img src={deved} alt="" className='object-contain w-full h-full sm:pr-[80px] pr-0' />
          </div>
    </section>
  )
}

export default HeroBanner

