import {Route, Routes, Link} from 'react-router-dom';

import '../App.css';

import logo from '../icons/logo.svg';
import add_pfp from '../icons/add.svg';

import Socials from './Socials';



function Auth() {
  const loadFile = function (event) {
    const image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  };
  
  return (
    <div className="Auth container mx-auto px-4">
      <header className="Auth-header">
        <div className = "grid place-content-center mt-20">
        <img className="m-auto" src = {logo}></img>
        <a className = "font-semibold text-center text-3xl my-2 cursor-pointer">LogOut</a>
        <span className='w-26 h-0.5 rounded bg-black'></span>
        <a className = "font-semibold text-center text-3xl my-2 cursor-pointer">LogIn</a>
        </div>
        <div className = "flex justify-center mt-10">
          <label className='w-24 h-24 bg-dark-gray rounded-3xl cursor-pointer p-7'>
          <input type="file" size="60" id = "file" onchange="loadFile(event)"/>
          <img id="output"  className="w-10 h-10" src = {add_pfp}/>
          
         </label> 
        </div>
        <div>
    <form className='flex flex-wrap justify-center m-5'>
      <input className = "m-3 rounded-xl h-10 w-36 p-3" type = "text" placeholder = "Nickname" required/>
      <input className = "m-3 rounded-xl h-10 w-36 p-3" type = "email" placeholder = "Mail" required/>
      <input className = "m-3 rounded-xl h-10 w-36 p-3" type = "password" placeholder = "Password" required/>
      </form>
      <form className='flex justify-center'>
      <input className = "h-4 w-4 cursor-pointer m-2" type = "checkbox" required/>
      <p className='text-center underline'>I confirm the processing of personal data</p>
    </form>
    <form className='flex flex-wrap justify-center' >
    <Link to = "/Socials" className = "h-10 w-36 rounded-xl bg-white cursor-pointer m-5" type="submit" />
    </form>
        </div>
      </header>
    </div>
  );
}

export default Auth;
