import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./Pagtion.css"
import {Link} from "react-router-dom"

function Items({ currentItems }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {
                  currentItems.map((exercise) => (
                    <Link to={`/exercise/:${exercise.id}`}>
                      <div key={exercise.id} className="bg-red-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg cart">
                            <div className="relative image">
                                <img className="w-full h-48 object-cover cursor-pointer" src={exercise.gifUrl} alt={exercise.name} />
                            </div>
                            <div className="p-2">
                              <h2 className="font-bold font-poppins text-xl mb-2 cursor-pointer text-black">{exercise.name}</h2>
                              <p className="text-white  font-poppins text-base cursor-pointer ">{exercise.target} - {exercise.bodyPart}</p>
                              <p className="text-white  font-poppins text-base cursor-pointer">{exercise.equipment}</p>
                            </div>
                        </div>
                    </Link>
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

  useEffect(() => {
    setItemOffset(0);
  }, [pageCount,exercises])

  
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