import React, {useState} from 'react'
import {Route, Routes, Link} from 'react-router-dom'
import clsx from 'clsx';

import user_pfp from '../icons/kitten.jpg'
import logo_white from '../icons/logo_white.svg'
import search_ico from '../icons/search.svg'
import OpenDialogue from './OpenDialogue';

function Socials() {
    const [toggle,
        setToggle] = useState(0);
    const toggleTab = () => {
        setToggle(1 - toggle);;
    }

    // const tog = document.getElementById("tog"); const thing =
    // document.getElementById("thing"); const thing2 =
    // document.getElementById("thing2"); tog.addEventListener("click", function() {
    //   thing.classList.toggle("animate__animated animate__zoomInRight");
    // thing2.classList.toggle("animate__animated animate__zoomInRight"); });
    return (
        <div className=''>
            <div
                className={clsx('message_containers w-3/4 p-6 m-auto', 
                                'lg:w-screen')}>
                <Link to = "/OpenDialogue">
                    <div
                        className='message_container grid grid-rows-1 grid-flow-col gap-3.5 justify-start'>
                        <img
                            src={user_pfp}
                            className='w-12 rounded-br-2xl rounded-tr-2xl rounded-tl-2xl row-span-3 mt-2'></img>
                        <p className='font-bold'>Гнида</p>
                        <p className=''>Плавают как-то два гея в бассейне...</p>
                    </div>
                </Link>
                <hr className='border-zinc-600 opacity-25'/>
                <Link>
                    <div
                        className='message_container grid grid-rows-1 grid-flow-col gap-3.5 justify-start mt-6'>
                        <img
                            src={user_pfp}
                            className='w-12 rounded-br-2xl rounded-tr-2xl rounded-tl-2xl row-span-3 mt-2'></img>
                        <p className='font-bold'>Гнида</p>
                        <p className=''>Плавают как-то два гея в бассейне...</p>
                    </div>
                </Link>
                <hr className='border-zinc-600 opacity-25'/>
                <Link>
                    <div
                        className='message_container grid grid-rows-1 grid-flow-col gap-3.5 justify-start mt-6'>
                        <img
                            src={user_pfp}
                            className='w-12 rounded-br-2xl rounded-tr-2xl rounded-tl-2xl row-span-3 mt-2'></img>
                        <p className='font-bold'>Гнида</p>
                        <p className=''>Плавают как-то два гея в бассейне...</p>

                    </div>
                </Link>
                <hr className='border-zinc-600 opacity-25'/>
            </div>
             <footer
                className='fixed bottom-0 left-0 justify-between flex w-screen p-4'>
                <button className='w-12 h-12 bg-zinc-800 rounded-full relative'>
                    <img src={logo_white} className='absolute top-2.5 left-3.5'></img>
                </button>
                <button
                    id="tog"
                    onClick={() => toggleTab()}
                    className='w-12 h-12 bg-zinc-800 rounded-full relative'>
                    <img src={search_ico} className='absolute top-2 left-1'></img>
                </button>
            </footer>
            <div
                    className={toggle === 1
                    ? 'search_container search_container_active'
                    : 'search_container'}>
                    <label>
                        <input
                            className="w-full rounded-lg bg-light-gray text-slate-900 p-2 placeholder:text-slate-600 placeholder:text-xl"
                            type="text"
                            placeholder='@'></input>
                    </label>
                    <p className='text-center text-slate-600 text-lg mt-32'>Find a user or a message</p>
                </div>
        </div>
        
    )
}

export default Socials