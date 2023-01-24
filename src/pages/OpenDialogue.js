import React from 'react'
import clsx from 'clsx';

import user_pfp from '../icons/kitten.jpg'
import emoji_ico from '../icons/emoji.svg'
import attachment_ico from '../icons/attachment.svg'


function OpenDialogue() {
  return (
    <div
    className={clsx('dialog_container w-1/2 m-auto',
                     'lg:m-0')}>
    <div className={clsx('header flex flex-col pl-2 m-auto justify-items-center',
                         'lg:w-screen')}>
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

    <p className='text-center font-bold'>Гнида</p>
    <hr className='w-1/2 border-slate-500 m-auto h-3 mt-2'/>
    </div>
    <div className={clsx('w-[85vh] h-[75vh] overflow-y-auto p-3',
                    'lg:w-screen')}>
        <div
              className='messages_in_dialogue_answer mt-2 rounded-3xl border-slate-800 border-2 p-2 mr-auto h-auto w-44 break-words max-w-min'>
              <p className=''>Хуйхуйхуйхуйхуххуйхухйуйхухйухйхуцхухйхasdddddddddddddddddddddddddddddddухap[sod[pasod[pasodaps[doasdo[pasdasйх</p>
              <p className='text-xs mt-3'>00:00</p>
        </div>
        <div
            className='messages_in_dialogue_answer mt-2 rounded-3xl border-slate-800 border-2 p-2 ml-auto break-words max-w-min'>
            <p className=''>Хуйхуйхуйхуйхуххуйхухйуйхухйухйхуцхухйхухap[sod[pasod[pasodaps[doasdo[pasdasйх</p>
            <p className='text-xs mt-3'>00:00</p>
        </div>  
        <div
            className='messages_in_dialogue_answer mt-2 rounded-3xl border-slate-800 border-2 p-2 ml-auto break-words max-w-min'>
            <p className=''>Хуйasdasdadsadasdasdasdasdaadsasdsadasdasdasdasdasdasdasdasdadasdsadasdasd</p>
            <p className='text-xs mt-3'>00:00</p>
        </div> 
        <div
            className='messages_in_dialogue_answer mt-2 rounded-3xl border-slate-800 border-2 p-2 ml-auto break-words max-w-min'>
            <p className=''>Хуй</p>
            <p className='text-xs mt-3'>00:00</p>
        </div> 
        <div
            className='messages_in_dialogue_answer mt-2 rounded-3xl border-slate-800 border-2 p-2 mr-auto break-words max-w-min'>
            <p className=''>Хуй</p>
            <p className='text-xs mt-3'>00:00</p>
        </div> 
        <div className='w-screen absolute bottom-0 left-0'>
        <div className='type_message flex bg-zinc-800 rounded-t-3xl justify-between w-screen'>
            <img src = {emoji_ico} className='ml-4'></img>
            <input 
            className={clsx('h-9 rounded-xl p-3 mx-3 my-3 w-screen', 
                            'lg: w-1/2')}
            placeholder='Type the message..'></input>
            <label className=''>
                        <input type="file" size="8" id="file"/>
                        <img className="w-7 h-7 mt-4 mr-7 cursor-pointer" src={attachment_ico}/>
                        
                    </label>
        </div>
        </div>
    </div>

</div>
  )
}

export default OpenDialogue