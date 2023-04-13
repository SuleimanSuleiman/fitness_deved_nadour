import React, {  useState } from 'react'
import BodyPartMenu from "./BodyPartMenu";
import { useQueryClient } from 'react-query';


function SearchExercise({ setExercises, bodyParts, setBodyPart,bodyPart }) {

  const [searchValue, setSearchValue] = useState(null)

  const queryClient = useQueryClient();

  
  const handleSearch = async (e) => {

    e.preventDefault()
    if (searchValue) {    
      const filteredData = queryClient
        .getQueryData('exercises')
        ?.data?.filter(
        (item) => item.name.toLowerCase().includes(searchValue)
               || item.target.toLowerCase().includes(searchValue)
               || item.equipment.toLowerCase().includes(searchValue)
               || item.bodyPart.toLowerCase().includes(searchValue),
        );
      setSearchValue('');             
      setExercises(filteredData);
    }
  };

  return (
    <section className='flex flex-col justify-center items-center p-4 sm:mt-[100px] mt-[50px] '>
            <h1 className='font-poppins font-semibold sm:text-[42px] text-[32px] text-[#A44D01] sm:mb-12 mb-6 text-center'>Awesome Exercises <br />You  Should Know</h1>
            <form onSubmit={(e) => handleSearch(e)}  className='flex sm:flex-row flex-col items-center'>
              <input
                type="text"
                placeholder='Search Exercises'
                className='text-[#A44D01] p-2 border-none outline-none sm:w-[500px] w-[300px]'
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button
                className='cursor-pointer bg-[#A44D01] font-poppins font-semibold w-[150px] outline-none sm:mt-0 mt-1  h-10'
              >
                Search
              </button>
            </form>
              <div className="">
                <BodyPartMenu bodyParts={bodyParts} setExercises={setExercises} setBodyPart={setBodyPart} bodyPart={bodyPart} />
            </div>
    </section>
  )
}

export default SearchExercise