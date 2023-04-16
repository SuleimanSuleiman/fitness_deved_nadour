import { useState } from "react";
import ReactPaginate from "react-paginate";
import "./Pagtion.css"


function Items({ currentItems }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {
                  currentItems.map((exercise) => (
                        <div key={exercise.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg">
                          <img className="w-full h-48 object-cover cursor-pointer" src={exercise.gifUrl} alt={exercise.name} />
                          <div className="p-2">
                            <h2 className="font-bold font-poppins text-xl mb-2 cursor-pointer text-[#6e3b0d]">{exercise.name}</h2>
                            <p className="text-gray-700  font-poppins text-base cursor-pointer">{exercise.target} - {exercise.bodyPart}</p>
                            <p className="text-gray-700  font-poppins text-base cursor-pointer">{exercise.equipment}</p>
                          </div>
                        </div>
                  ))
              }
        </div>

    );
  }
  
export default function PaginatedItems({ itemsPerPage, exercises }) {

  
    const [itemOffset, setItemOffset] = useState(0);
  
    const endOffset = itemOffset + itemsPerPage;

    const currentItems = exercises.slice(itemOffset, endOffset);
    
  const pageCount = Math.ceil(exercises.length / itemsPerPage);
  
  const handlePageClick = (event) => {

      const newOffset = (event.selected * itemsPerPage) % exercises.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
    window.scrollTo({ top: 1000, behavior: 'smooth' });
    setItemOffset(newOffset);
  };
  
    return (
      <>
        <Items currentItems={currentItems} />
        <ReactPaginate
          className=" flex justify-center items-center select-none mt-4 "
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          previousLabel="<" 
          renderOnZeroPageCount={null}
        />
      </>
    );
  }