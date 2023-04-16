import SearchExercise from "./SearchExercise"
import HeroBanner from "./HeroBanner"
import { useEffect, useState } from "react"
import EcercisesList from "./EcercisesList"
import {exercise} from "../../utils/index"

const Home = () => {

  const [bodyPart, setBodyPart] = useState(null)
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    setExercises(exercise)
  },[])

  return (
    <section className="bg-gradient  ">
          <HeroBanner />
          <SearchExercise bodyPart={bodyPart} setBodyPart={setBodyPart} setExercises={setExercises} />
          <EcercisesList  exercises={exercises} setExercises={setExercises} />
        </section>
    )
  }
 
export default Home
