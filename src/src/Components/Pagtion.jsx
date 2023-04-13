import { useState } from "react";
import ReactPaginate from "react-paginate";
import "./Pagtion.css"

function Items({ currentItems }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {
                  currentItems.map((element) => (
                      <div key={element.id} className='rounded-lg  bg-[#ee6570] lg:h-[350px] h-[400px] overflow-hidden'>
                      <img src={element.gifUrl} alt="Loading ..." className='w-full  h-[65%] object-cover cursor-pointer'/>
                          <div className="flex flex-row my-2 p-1">
                              <p className='px-2 py-1 rounded-3xl font-poppins font-medium bg-gradient cursor-pointer select-none'>{element.bodyPart}</p>
                              <p className='px-2 py-1 rounded-3xl ml-2 font-poppins font-medium bg-gradient cursor-pointer select-none'>{ element.equipment}</p>
                          </div>
                          <p className='p-1 font-poppins font-medium text-[#6f3400] text-[19px] cursor-pointer'>{ element.name}</p>
                      </div>
                  ))
              }
        </div>

    );
  }
  
export default function PaginatedItems({ itemsPerPage, exercises}) {

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