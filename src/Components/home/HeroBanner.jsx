import React, { useEffect, useState } from 'react'
import ExportEcercise from './ExportEcercise'
import "./Hero.css"

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
      <section className="bg-[url('/src/assets/images/homeImg.jpg')] bg-bottom bg-cover w-full md:h-[680px] h-[700px] items-center flex sm:flex-row flex-col pt-2">
          <div className="sm:h-fit h-full m-auto flex justify-center flex-col text-start w-full relative sm:pl-12 pl-4">
            <h3 className='text-white font-poppins font-semibold mb-[30px] text-gradient text-[30px] white-text-black-bg'>Fitness Club</h3>
            <p className='white-text-black-bg font-poppins font-semibold mb-[30px] sm:leading-[60px] leading-[50px] sm:text-[40px] text-[30px] text-white'>
                  My name is <span className='text-red-800 font-semibold red-text'>Daived</span>
                  <br />
                  And I Have skills
                  <br />
                  in <span className='text-red-800 red-text-black-bg'>{text}</span>
            </p>
            <p className='font-poppins font-medium text-[18px] text-white opacity-[40%] sm:mb-[25px] mb-14  '>Check out the most effective exercesive</p> 
            <ExportEcercise />  
              <h1 className='select-none absolute sm:block hidden  -bottom-[110px] left-[35%] text-[110px] font-poppins font-semibold z-0 text-dimWhite opacity-[30%]'>
                  Exercises
              </h1>
          </div>
    </section>
  )
}

export default HeroBanner

