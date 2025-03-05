import {TbUserCircle } from "react-icons/tb";

function MessageInLeftSide() {
  return (
    <div className=" flex md:flex-col gap-2">
      <h1 className="justify-center text-center font-bold border-b-1 border-indigo-50 text-indigo-500 p-2">Messages</h1>
      <a href = '#' className="relative">
    <ul className="flex flex-wrap items-center rounded-lg p-1 transition-normal duration-300 hover:bg-indigo-50">
    <li className="text-5xl mr-3"><TbUserCircle/></li>
    <div>
    <li className="text-lg font-semibold "><p>User</p></li>
    <li className="text-sm text-neutral-400 font-light"><p>Message</p></li>
    </div>
    <div>
    <li className="font-light text-xs text-neutral-400 absolute right-0 top-2 mr-2"><p>00:00</p></li>
    </div>
    </ul>
    </a>
    <a href = '#' className="relative">
    <ul className="flex flex-wrap items-center rounded-lg p-1 transition-normal duration-300 hover:bg-indigo-50">
    <li className="text-5xl mr-3"><TbUserCircle/></li>
    <div>
    <li className="text-lg font-semibold"><p>User</p></li>
    <li className="text-sm text-neutral-400 font-light"><p>Message</p></li>
    </div>
    <div>
    <li className="font-light text-xs text-neutral-400 absolute right-0 top-2 mr-2"><p>00:00</p></li>
    </div>
    </ul>
    </a>
    </div>
  )
}

export default MessageInLeftSide