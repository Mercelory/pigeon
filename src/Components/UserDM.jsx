
import {TbUserCircle, TbDots } from "react-icons/tb";

function UserDM() {
  return (
    <div>
        <ul className="flex items-center border-b-1 p-5">
            <li className="text-3xl mr-2"><TbUserCircle /></li>
            <li className="font-semibold text-xl">Миша</li>
            <li className="right-0 absolute mr-5 text-3xl"><TbDots /></li>
        </ul>

        
    </div>
  )
}

export default UserDM