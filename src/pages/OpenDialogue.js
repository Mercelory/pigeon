import React from 'react'
import clsx from 'clsx';

import user_pfp from '../icons/kitten.jpg'
function OpenDialogue() {
  return (
    <div
    className={clsx('dialog_container w-4/5 p-2 border-slate-400 border-2 rounded-xl ml-2 ', 'sm:hidden')}>
    <div className='header flex pl-2 m-auto '>
        <button className='hidden'>
            <svg
                aria-hidden="true"
                class="w-8 h-8 text-gray-500"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z"></path>
            </svg>
        </button>
        <img src={user_pfp} className='m-auto w-12 rounded-2xl mb-2'/>
    </div>
    <p className='text-center font-bold'>Гнида</p>
    <hr className='w-1/2 border-slate-500 m-auto h-3 mt-2'/>
    <div className='h-[480px] w-1/2'>
        <div
            className='messages_in_dialogue ml-2 mt-2 flex rounded-3xl border-slate-800 border-2 w-36 p-1'>
            <p className='ml-2'>Анекдот</p>
            <p className='text-xs mt-3 ml-1'>00:00</p>
        </div>
        <div
            className='messages_in_dialogue_answer ml-2 mt-2 flex rounded-3xl border-slate-800 border-2 w-36 p-1 right-0 absolute mr-11'>
            <p className='ml-2'>Анекдот</p>
            <p className='text-xs mt-3 ml-1'>00:00</p>
        </div>
        <div className='type_message absolute bottom-0 bg-black w-24'></div>
    </div>

</div>
  )
}

export default OpenDialogue