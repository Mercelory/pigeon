import { TbMessageCircle, TbHash } from "react-icons/tb";
import { googleLogout } from "@react-oauth/google";
import { useAuth } from "./RegistrationComponents/AuthContext";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function NavBar() {
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    googleLogout();
    setUser(null);
  };
  return (
    <section className='absolute bottom-0 left-0 w-1/4 h-10 bg-indigo-50 '>
        <ul className="md:flex hidden justify-center items-center space-x-1 h-full w-full">
        <li className="group text-2xl  text-indigo-400 transition-normal duration-400 rounded-lg py-1 px-3">
  <Link to = "/" className="flex items-center">
    <TbMessageCircle />
  </Link>
</li>
          <li className="group text-2xl hover:text-indigo-400 transition-normal duration-400 rounded-lg py-1 px-3 hover:scale-90">
  <Link to = "threads" className="flex items-center">
    <TbHash />
  </Link>
</li>
          <img onClick={handleLogout} src = {user.picture} className="w-8 mr-2 rounded-full cursor-pointer hover:border-2 hover:p-1 hover:border-indigo-300 transition-normal duration-400  right-0 absolute"/>
      </ul>
    </section>
  )
}

export default NavBar