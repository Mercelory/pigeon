
import {TbUserCircle, TbDots } from "react-icons/tb";
import InputMessage from "./InputMessage";

function UserDM() {
  return (
    <>
    <div className="flex items-center border-b-1 border-slate-200 relative">
      <li className="text-4xl ml-3"><TbUserCircle /></li>
        <ul className="flex flex-col p-3 justify-center">
            <li className="font-semibold text-md">User</li>
            <li className="text-xs font-light text-neutral-400"><p>Last seen 12 hours ago</p></li>
            <a className="right-0 absolute mr-5 text-xl text-center rounded-full hover:bg-slate-200 p-2 transition-transform duration-800"><TbDots /></a>
        </ul>      
    </div>
    <InputMessage/>
    </>
  )
}

export default UserDM