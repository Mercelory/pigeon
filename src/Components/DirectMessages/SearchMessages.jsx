
import { TbSearch } from "react-icons/tb";

function Messages() {
  return (
    <section className="absolute bottom-10 left-0 w-1/4 p-2">
    <div class="relative">
        <input type="text" class="pl-11 p-1 rounded-lg border-0 bg-indigo-50 w-full outline-0 focus:ring-1 ring-indigo-300 duration-300" placeholder="Search" />
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center">
            <TbSearch/>
        </div>
    </div>
    </section>
  )
}

export default Messages