
import { TbMessage2, TbUsers, TbHash, TbSearch, TbUserCircle } from "react-icons/tb";

function NavBar() {
  return (
    <section className='fixed top-0 left-0 h-10 w-screen bg-neutral-100 p-2'>
      <ul className="flex justify-evenly font-bold items-center text-center">
        <a href = "#" className="flex">
          <img src = "./src/img/Subtract.svg" className="w-4 mr-2"></img>
          <p>Pigeon</p>
        </a>
        <ul className="flex justify-evenly w-1/5">
          <li className="text-2xl"><TbMessage2 /></li>
          <li className="text-2xl"><TbUsers /></li>
          <li className="text-2xl"><TbHash /></li>
          <li className="text-2xl"><TbSearch /></li>
        </ul>
          <a href = "#" className="flex ">
          <li className="text-2xl mr-2"><TbUserCircle /></li>
          <p>Username</p>
          </a>
      </ul>
    </section>
  )
}

export default NavBar