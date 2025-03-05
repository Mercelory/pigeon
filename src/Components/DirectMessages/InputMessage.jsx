import React from 'react'

function InputMessage() {
  return (
    <div>
        <div class="absolute bottom-2 right-0 w-3/4 h-11 px-3">
                  <input type="text" class="py-1 px-2 rounded-xl border-0 bg-indigo-50 h-10 w-full outline-0 focus:ring-1 ring-indigo-300 duration-300" placeholder="Type the message" />
              </div>
    </div>
  )
}

export default InputMessage