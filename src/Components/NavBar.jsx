
import { TbMessageCircle, TbUsers, TbHash, TbSearch, TbUserCircle } from "react-icons/tb";
import PigeonIco from "../img/PigeonIco.svg"
import { googleLogout } from "@react-oauth/google";
import { useAuth } from "./RegistrationComponents/AuthContext";

function NavBar() {
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    googleLogout();
    setUser(null);
  };

  return (
    <section className='md:fixed top-0 left-0 w-screen bg-slate-200 '>
      <ul className="flex justify-evenly font-bold items-center text-center">
        <a href = "#" className="flex">
          <img src = {PigeonIco} className="w-8 mr-2"></img>
        </a>
        <ul className="md:flex hidden  items-center space-x-1 pt-1">
          <li className="text-lg bg-white rounded-t-2xl py-1 px-3"><a href = "#Messages" className="flex items-center"><TbMessageCircle/><p className="ml-1 text-lg font-semibold">Messages</p></a></li>
          <li className="text-lg hover:bg-white rounded-lg py-1 px-3 transition-normal duration-400"><TbUsers /></li>
          <li className="text-lg hover:bg-white rounded-lg py-1 px-3 transition-normal duration-400 "><TbHash /></li>
          <li className="text-lg hover:bg-white rounded-lg py-1 px-3 transition-normal duration-400 "><TbSearch /></li>
        </ul>
          <div  onClick={handleLogout} className="md:flex hidden text-center items-center">
          <img src = {user.picture} className="w-8 mr-2 rounded-full cursor-pointer"/>
          <p>{user.name}</p>
          </div>

      </ul>
    </section>
  )
}

export default NavBar