import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import user_pfp from '../icons/kitten.jpg'
import logo_white from '../icons/logo_white.svg'
import search_ico  from '../icons/search.svg'
import 'animate.css';


function Socials() {
  const [toggle, setToggle] = useState(0);
  const toggleTab = () => {
    setToggle(1-toggle);;
  }

  // const tog = document.getElementById("tog");
  // const thing = document.getElementById("thing");
  // const thing2 = document.getElementById("thing2");

  // tog.addEventListener("click", function() {
  
  //   thing.classList.toggle("animate__animated animate__zoomInRight");
  //   thing2.classList.toggle("animate__animated animate__zoomInRight");
    
  // });
  return (
    <div className='p-6'>
      <Link><div className='message_container grid grid-rows-3 grid-flow-col gap-2'>
        <img src = {user_pfp} className='w-12 rounded-br-2xl rounded-tr-2xl rounded-tl-2xl row-span-3 my-5 mr-2'></img>
        <p className='col-span-2 font-bold text-base'>Гнида</p>
        <p className='row-span-2 col-span-2  text-base'>Плавают как-то два гея в бассейне...</p>
      </div></Link>
      <hr className='mt-5 border-dark-gray w-1/2 mx-auto'/>
      <Link to = "/kitten"><div className='message_container grid grid-rows-3 grid-flow-col gap-2 mt-3'>
        <img src = {user_pfp} className='w-12 rounded-br-2xl rounded-tr-2xl rounded-tl-2xl row-span-3 my-5 mr-2'></img>
        <p className='col-span-2 font-bold text-base'>Гнида</p>
        <p className='row-span-2 col-span-2  text-base'>Плавают как-то два гея в бассейне...</p>
      </div></Link>
      <hr className='mt-5 border-dark-gray w-1/2 mx-auto'/>
      <Link><div className='message_container grid grid-rows-3 grid-flow-col gap-2 mt-3'>
        <img src = {user_pfp} className='w-12 rounded-br-2xl rounded-tr-2xl rounded-tl-2xl row-span-3 my-5 mr-2'></img>
        <p className='col-span-2 font-bold text-base'>Гнида</p>
        <p className='row-span-2 col-span-2  text-base'>Плавают как-то два гея в бассейне...</p>
      </div></Link>
      <hr className='mt-5 border-dark-gray w-1/2 mx-auto'/>
      <footer className='fixed bottom-0 right-0 flex justify-between w-full h-16 pb-5 pl-5 pr-5'>
      <button className='w-12 h-12 bg-black rounded-full relative'><img src = {logo_white} className='absolute top-2.5 left-3.5'></img></button>
      <button id = "tog" onClick={()=>toggleTab()} className='w-12 h-12 bg-black rounded-full relative'><img src = {search_ico} className='absolute top-2 left-1'></img></button>
      </footer>

<div id="thing" className={toggle === 1 ? 'search_container search_container_active' : 'search_container'} >
   <label>
   <input className = "w-full rounded-lg bg-light-gray text-slate-900 p-2 placeholder:text-slate-600 placeholder:text-xl animate__animated animate__bounce"type = "text" placeholder = '@'></input>
  </label>
 <p className='text-center text-slate-600 text-lg mt-32'>Find a user or a message</p>
</div> 
    </div>
  )
}

export default Socials