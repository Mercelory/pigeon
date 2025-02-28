
import { TbSearch } from "react-icons/tb";

function Messages() {
  return (
    <section className="">
    <div class="relative">
        <input type="text" class="pl-10 p-1 rounded-lg border-0 bg-neutral-100 w-[90%] " placeholder="Search" />
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center ">
            <TbSearch/>
        </div>
    </div>
    </section>
  )
}

export default Messages