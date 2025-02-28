import {TbUserCircle } from "react-icons/tb";

function MessageInLeftSide() {
  return (
    <div>
    <ul className="flex justify-between w-[90%] mt-10 items-center flex-wrap">
    <li className="text-5xl"><TbUserCircle/></li>
    <div>
    <li className="text-xl font-semibold"><p>Крдиенко никит</p></li>
    <li className="text-md"><p>меня бьет мать</p></li>
    </div>
    <div>
    <li className="font-light text-sm"><p>21:47</p></li>
    </div>
    </ul>
    <ul className="flex justify-between w-[90%] mt-10 items-center flex-wrap">
    <li className="text-5xl"><TbUserCircle/></li>
    <div>
    <li className="text-xl font-semibold"><p>Совдчук Богдан</p></li>
    <li className="text-md"><p>го в доту</p></li>
    </div>
    <div className="flex flex-col items-center justify-center">
    <li className="font-light text-sm"><p>21:47</p></li>
    <li className="rounded-full bg-neutral-900 text-white text-center w-5 h-5 font-light text-xs flex items-center justify-center"><p>1</p></li>
    </div>
    </ul>
    </div>
  )
}

export default MessageInLeftSide