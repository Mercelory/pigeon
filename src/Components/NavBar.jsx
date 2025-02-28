
import { TbMessage, TbUsers, TbHash, TbSearch, TbUserCircle } from "react-icons/tb";
import PigeonIco from "../img/Subtract.svg"

function NavBar() {
  return (
    <section className='md:fixed top-0 left-0 h-10 w-screen bg-slate-200 p-1'>
      <ul className="flex justify-evenly font-bold items-center text-center">
        <a href = "#" className="flex">
          <img src = {PigeonIco} className="w-4 mr-2"></img>
          <p>Pigeon</p>
        </a>
        <ul className="md:flex hidden justify-center w-1/5 items-center">
          <li className="text-2xl bg-white rounded-t-md py-1 px-3 mr-3"><a href = "#Messages" className="flex items-center"><TbMessage/><p className="mx-1 text-lg font-semibold">Messages</p></a></li>
          <li className="text-lg hover:bg-white rounded-lg py-1 px-3 transition-normal duration-400"><TbUsers /></li>
          <li className="text-lg hover:bg-white rounded-lg py-1 px-3 transition-normal duration-400 "><TbHash /></li>
          <li className="text-lg hover:bg-white rounded-lg py-1 px-3 transition-normal duration-400 "><TbSearch /></li>
        </ul>
          <a href = "#" className="md:flex hidden ">
          <li className="text-2xl mr-2"><TbUserCircle /></li>
          <p>Username</p>
          </a>
      </ul>
    </section>
  )
}

export default NavBar