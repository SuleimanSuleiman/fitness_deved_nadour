import SearchExercise from "../Components/home/SearchExercise"
import HeroBanner from "../Components/home/HeroBanner"
import { useEffect, useState } from "react"
import EcercisesList from "../Components/home/EcercisesList"
import {exercise} from "../utils/index"

const Home = () => {

  const [bodyPart, setBodyPart] = useState(null)
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    setExercises(exercise)
  },[])

  return (
    <section className="bg-black ">
          <HeroBanner />
          <SearchExercise bodyPart={bodyPart} setBodyPart={setBodyPart} setExercises={setExercises} />
          <EcercisesList  exercises={exercises} setExercises={setExercises} />
        </section>
    )
  }
 
export default Home
