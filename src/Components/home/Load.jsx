import { InfinitySpin  } from 'react-loader-spinner';
import React from 'react'

export default function Load() {
  return (
        <div className="w-[100vw] bg-gradient z-50 opacity-[90%] h-[100vh] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-12 flex justify-center items-center">
            <InfinitySpin
              color="#A44D01"
            />
        </div>
  )
}
