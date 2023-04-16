import React from 'react'

export default function Button({name,to}) {
  return (
      <button  className='relative sm:mx-4 mx-auto p-1 border-none sm:w-[200px] w-[190px] sm:h-[80px] h-[60px] text-[18px] font-poppins font-semibold cursor-pointer bg-black text-white'>
              <a href={to}> {name}</a>
      </button>
  )
}
