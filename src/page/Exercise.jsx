import { useParams } from "react-router-dom";
import { exercise } from "../utils/index";
import Detail from "../Components/Exercise/Detail";
import { useEffect, useState } from "react";
import VideoDateil from "../Components/Exercise/VideoDateil";
import TargetSimiler from "../Components/Exercise/TargetSimiler";
import { Equipment } from "../Components/Exercise/Equipment";
import Footer from "../Components/Exercise/Footer";


export default function Exercise() {

  const [exer, setExer] = useState([]);
  const [name, setName] = useState(null);
  const [target, setTarget] = useState(null);
  const [equipment, setEquipment] = useState(null)
    const { id } = useParams()

  useEffect(() => {
      const element = exercise.filter((ele) => ele.id === id.slice(1))
        if (element) {
          setExer(element)
          setName(element[0].name)
          setTarget(element[0].target);
          setEquipment(element[0].equipment);
    }
  }, [id])

  return (
      <div className="bg-black">
      {
        (exer.length > 0 && (
          <>
            <Detail exer={exer} />
            <VideoDateil name={name} />
            <TargetSimiler target={target} />
            <Equipment equipment={equipment} />
            <Footer />
          </>
        )
        )
      } 
    </div>
  )
}
