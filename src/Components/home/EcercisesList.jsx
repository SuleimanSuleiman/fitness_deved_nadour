import PaginatedItems from "./Pagtion.jsx";

export default function EcercisesList({ exercises,setExercises}) {

  return (
    <section id='ec' section className = 'mt-12 pb-4 w-full sm:px-[80px] px-[60px]' >
          <PaginatedItems itemsPerPage={8} exercises={exercises} />
    </section>
  )
}
