import React from 'react'
import PaginatedItems from "./Pagtion.jsx";

export default function EcercisesList({ exercises,setSlideChange, slideChange}) {

  return (
    <section id='ec' section className = 'mt-12 pb-4 w-full sm:px-[80px] px-[60px]' >
          <PaginatedItems slideChange={slideChange} setSlideChange={setSlideChange} itemsPerPage={8} exercises={exercises} />
    </section>
  )
}
