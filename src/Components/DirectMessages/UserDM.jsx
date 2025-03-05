
import {TbUserCircle, TbDots } from "react-icons/tb";
import InputMessage from "./InputMessage";

function UserDM() {
  return (
    <>
    <div className="flex items-center border-b-1 border-indigo-50 relative">
      <li className="text-4xl ml-3"><TbUserCircle /></li>
        <ul className="flex flex-col p-3 justify-center">
            <li className="font-semibold text-md">User</li>
            <li className="text-xs font-light text-neutral-400"><p>Last seen 12 hours ago</p></li>
            <a className="right-0 absolute mr-5 text-xl text-center rounded-full hover:bg-indigo-50 p-2 transition-normal duration-300"><TbDots /></a>
        </ul>      
    </div>
    <InputMessage/>
    </>
  )
}

export default UserDM