import {Link} from "react-router-dom"
import {Logo} from "../assets/index"


const SidTop = () => {
  return (
    <nav className="flex justify-between items-center shadow-2xl shadow-[#DD7A83]-900 bg-[#DD7A83]  w-full sm:px-[80px] px-4 py-2">
      <Link>
        <img src={Logo} alt="LOGO" className="w-[42px] h-[42px] object-cover"/>
      </Link>
      <ul className="list-none links  flex justify-end items-center">
        <li className=" font-medium text-dimWhite font-poppins hover:text-white">
          <Link to='/'>
            Home
          </Link>
        </li>
        <li className="ml-4 font-medium text-dimWhite font-poppins hover:text-white">
          <Link to='/exercise'>
            Exercise
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default SidTop
