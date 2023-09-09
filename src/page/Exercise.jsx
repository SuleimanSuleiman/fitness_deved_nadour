import { useParams } from "react-router-dom";
import Detail from "../Components/Exercise/Detail";
import { useEffect, useState } from "react";
import VideoDateil from "../Components/Exercise/VideoDateil";
import TargetSimiler from "../Components/Exercise/TargetSimiler";
import { Equipment } from "../Components/Exercise/Equipment";
import Footer from "../Components/Exercise/Footer";
import axios from "axios";


export default function Exercise() {
  const [exrcise,setEcerise] = useState(null)
    const { id } = useParams()

  console.log(id)
  
  useEffect(() => {
        axios.request( {
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises/exercise/1368',
            headers: {
              'X-RapidAPI-Key': '05b5f71414msh855193cdbf73cd3p199802jsn073d054ea6b0',
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
          })
          .then(res => {
            console.log(res.data)
            setEcerise(res.data)
          })
        .catch(error => console.log(error))
  }, [id])


  return (
      <div className="bg-black min-h-screen">
      {
        exrcise ?
          <>
            <Detail exer={exrcise} />
            <VideoDateil name={exrcise.name} />
            <TargetSimiler target={exrcise.target} />
            <Equipment equipment={exrcise.equipment} />
            <Footer />
          </>
          :
          <div className="w-full min-h-screen flex justify-center items-center">
            <h1 className="text-red-600 bg-black text-[25px]" >Loading ...</h1>
          </div>
      } 
    </div>
  )
}
