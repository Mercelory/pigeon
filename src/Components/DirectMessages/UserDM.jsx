
import {TbUserCircle, TbDots } from "react-icons/tb";

function UserDM() {
  return (
    <div className="flex items-center border-b-1 border-slate-200">
      <li className="text-4xl ml-3"><TbUserCircle /></li>
        <ul className="flex flex-col p-3 justify-center">
            <li className="font-semibold text-md">User</li>
            <li className="text-xs font-light text-neutral-400"><p>Last seen 12 hours ago</p></li>
            <a className="right-0 absolute mr-5 text-xl text-center rounded-full hover:bg-slate-200 p-2 transition-transform duration-800"><TbDots /></a>
        </ul>
        <div className="flex items-center justify-center ">
              <div class="absolute bottom-0 left-0 w-full p-3">
                  <input type="text" class="py-1 px-2 rounded-lg border-0 bg-slate-200 w-full h-10" placeholder="Type the message" />
              </div>
        </div>
    </div>
  )
}

export default UserDM