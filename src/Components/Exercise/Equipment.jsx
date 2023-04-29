import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { exercise } from '../../utils';
import { Link } from 'react-router-dom';

export const Equipment = ({equipment}) => {

    const [loading, setLoading] = useState(true);
    const [exer, setEcerices] = useState([]);
  const [showAll, setShowAll] = useState(false);


  useEffect(() => {
    const data = exercise.filter((element) => element.equipment === equipment);
    if (data) {
      showAll ? setEcerices(data.slice(0,10)) : setEcerices(data.slice(0, 3));
    }
    setLoading(false)


  }, [showAll])

  const HandleClick = () => {
    setShowAll(!showAll)
    window.scrollY = 800;
  }

  return (
          !loading &&
           (
              <section className='sm:px-12 px-4 bg-black min-h-[280px] py-8 min-w-full '>
                <h1 className='text-white text-[22px]'>Similer <span className='text-red-700 font-bold text-[24px]'>Equipment { equipment}</span> exercise</h1>
                <section className='px-4  py-4 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                  {
                    exer.map((ele,index) => {
                      return (
                        <div key={index} className="bg-red-800 cursor-pointer rounded-xl  hover:scale-105 transition-all duration-200">
                              <Link to={`/exercise/:${ele.id}`} target='_blank'>
                                <div key={ele.id} className="bg-red-800overflow-hidden shadow-md hover:shadow-lg cart">
                                      <div className="relative image">
                                          <img className="w-full h-48 object-cover cursor-pointer rounded-t-xl" src={ele.gifUrl} alt={ele.name} />
                                      </div>
                                      <div className="p-2">
                                        <h2 className="font-bold font-poppins text-xl mb-2 cursor-pointer text-black">{ele.name}</h2>
                                        <p className="text-white  font-poppins text-base cursor-pointer ">{ele.target} - {ele.bodyPart}</p>
                                        <p className="text-white  font-poppins text-base cursor-pointer">{ele.equipment}</p>
                                      </div>
                                  </div>
                              </Link>
                        </div>
                      )
                    })
                  }
                  </section>
                    <div className="px-4">
                      <button className='bg-red-700 text-white text-[19px] px-3 py-1 font-semibold ' onClick={() =>HandleClick()}>{ (showAll? "Show less":"Show more")}</button>
                </div>
              </section>
          ) 
    )
}
