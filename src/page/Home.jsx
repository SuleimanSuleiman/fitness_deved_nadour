import SearchExercise from "../Components/home/SearchExercise"
import HeroBanner from "../Components/home/HeroBanner"
import { useEffect, useState } from "react"
import EcercisesList from "../Components/home/EcercisesList"
// import {exercise} from "../utils/index"
import axios from "axios";

const Home = () => {

  const [bodyPart, setBodyPart] = useState(null)
  const [exercises, setExercises] = useState([])
    useEffect(() => {
        axios.request({
          method: 'GET',
          url: 'https://exercisedb.p.rapidapi.com/exercises',
          headers: {
            'X-RapidAPI-Key': '05b5f71414msh855193cdbf73cd3p199802jsn073d054ea6b0',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
          }
        }).then(res => {
          setExercises(res.data)
          console.log(res.data)
        }).catch(error => console.log(error))
    console.log(exercises)
  },[])

  return (
    <section className="bg-black ">
          <HeroBanner />
          <SearchExercise bodyPart={bodyPart} setBodyPart={setBodyPart} setExercises={setExercises} />
      {
        exercises ?
          <EcercisesList exercises={exercises} setExercises={setExercises} />
          :
          <div className="w-full min-h-screen flex justify-center items-center">
            <h1 className="text-red-600 bg-black text-[25px]" >Loading ...</h1>
          </div>
          }
        </section>
    )
  }
 
export default Home
