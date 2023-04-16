import {NavLink} from "react-router-dom"
import {logoFitness} from "../assets/index"
import "./SidTop.css"

const SidTop = () => {
  return (
    <nav className="z-40 flex justify-between items-center w-full rounded-lg shadow-lg sm:px-12 px-4 backdrop-filter backdrop-blur-lg backdrop-saturate-150  fixed top-0">
      <NavLink>
        <img src={logoFitness} alt="LOGO" className="w-[109px] h-[60px] object-cover"/>
      </NavLink>
      <ul className="list-none links  flex justify-end items-center">
        <li className=" font-medium text-dimWhite font-poppins">
          <NavLink to='/'>
            Portfolio
          </NavLink>
        </li>
        <li className=" font-medium text-dimWhite font-poppins">
          <NavLink to='/home'>
            Home
          </NavLink>
        </li>
        <li className="ml-4 font-medium text-dimWhite font-poppins">
          <NavLink to='/exercise'>
            Exercise
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default SidTop
