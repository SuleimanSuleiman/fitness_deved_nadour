import React from 'react'
import PaginatedItems from "./Pagtion.jsx";

export default function EcercisesList({ exercises}) {

  return (
    <section section className = 'mt-12 pb-4 w-full sm:px-[80px] px-[60px]' >
          <PaginatedItems  itemsPerPage={8} exercises={exercises} />
    </section>
  )
}
