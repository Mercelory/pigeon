
import { TbMessageCircle, TbUsers, TbHash, TbSearch, TbUserCircle } from "react-icons/tb";
import PigeonIco from "../img/PigeonIco.svg"

function NavBar() {
  return (
    <section className='md:fixed top-0 left-0 w-screen bg-slate-200 '>
      <ul className="flex justify-evenly font-bold items-center text-center">
        <a href = "#" className="flex">
          <img src = {PigeonIco} className="w-4 mr-2"></img>
          <p>Pigeon</p>
        </a>
        <ul className="md:flex hidden justify-center w-1/5 items-center space-x-1 pt-1">
          <li className="text-lg bg-white rounded-t-2xl py-1 px-2"><a href = "#Messages" className="flex items-center"><TbMessageCircle/><p className="ml-1 text-lg font-semibold">Messages</p></a></li>
          <li className="text-lg hover:bg-white rounded-lg py-1 px-3 transition-normal duration-400"><TbUsers /></li>
          <li className="text-lg hover:bg-white rounded-lg py-1 px-3 transition-normal duration-400 "><TbHash /></li>
          <li className="text-lg hover:bg-white rounded-lg py-1 px-3 transition-normal duration-400 "><TbSearch /></li>
        </ul>
          <a href = "#" className="md:flex hidden">
          <li className="text-2xl mr-2"><TbUserCircle /></li>
          <p>Username</p>
          </a>
      </ul>
    </section>
  )
}

export default NavBar