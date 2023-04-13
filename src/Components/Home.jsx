import SearchExercise from "./SearchExercise"
import HeroBanner from "./HeroBanner"
import { useEffect, useState } from "react"
import EcercisesList from "./EcercisesList"
import { useQuery } from "react-query"
import { fetchData } from "../utils/featchData"
import Load from "./Load"
import Error from "./Error"


const Home = () => {

  const [bodyPart, setBodyPart] = useState(null)
  const bodyParts = [ "back", "cardio", "chest", "lower arms", "lower legs", "neck", "shoulders", "upper arms", "upper legs", "waist" ]
  const [exercises, setExercises] = useState([])
  
  const { data, isLoading, isFetched,isError,error } = useQuery(['exercises'], () => fetchData("exercises"), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false
  })
  useEffect(() => {
    if (isFetched) {
      setExercises(data?.data)
    }
  }, [isFetched, data?.data])

  if (isError) {
    if (error.code === 'ERR_NETWORK') {
     return <Error />
    } 
  }

  if (isLoading) {
    return <Load />
  }
  return (
        <section className="bg-gradient">
          <HeroBanner />
          <SearchExercise
         bodyPart={bodyPart} setExercises={setExercises} setBodyPart={setBodyPart} bodyParts={bodyParts}
          />
          <EcercisesList   exercises={exercises} setExercises={setExercises} />
        </section>
    )
  }
 
export default Home
