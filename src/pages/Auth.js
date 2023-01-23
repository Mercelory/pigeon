import {Route, Routes, Link} from 'react-router-dom';

import '../App.sass';

import logo from '../icons/logo.svg';
import add_pfp from '../icons/add.svg';

function Auth() {
    const loadFile = function (event) {
        const image = document.getElementById("output");
        image.src = URL.createObjectURL(event.target.files[0]);
    };
    return (
        <div className="Auth container mx-auto px-4">
            <header className="Auth-header">
                <div className="grid place-content-center mt-20">
                    <img className="m-auto" src={logo}></img>
                    <a className="font-semibold text-center text-3xl my-2 cursor-pointer">LogOut</a>
                    <span className='w-26 h-0.5 rounded bg-black'></span>
                    <a className="font-semibold text-center text-3xl my-2 cursor-pointer">LogIn</a>
                </div>
                <div className="flex justify-center mt-10">
                    <label className='w-24 h-24 bg-dark-gray rounded-3xl cursor-pointer p-7'>
                        <input type="file" size="60" id="file" onchange="loadFile(event)"/>
                        <img id="output" className="w-10 h-10" src={add_pfp}/>
                        
                    </label>
                </div>
                <div>
                    <form className='flex flex-wrap justify-center m-5'>
                        <div className='relative mb-6'>
                            
                            <div
                                className='absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none'>
                                <svg
                                    aria-hidden="true"
                                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        clip-rule="evenodd"
                                        fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"></path>
                                </svg>
                            </div>
                            <input
                                className="m-3 rounded-xl h-10 w-36 pl-11"
                                type="text"
                                placeholder="Nickname"
                                required/>
                        </div>
                        <div className='relative mb-6'>
                            <div
                                className='absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none'>
                                <svg
                                    aria-hidden="true"
                                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                            </div>
                            <input
                                className="m-3 rounded-xl h-10 w-36 pl-11"
                                type="mail"
                                placeholder="Mail"
                                required/>
                        </div>
                        <div className='relative mb-6'>
                            <div
                                className='absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none'>
                                <svg
                                    aria-hidden="true"
                                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        clip-rule="evenodd"
                                        fill-rule="evenodd"
                                        d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z"></path>
                                    <path
                                        d="M10.748 13.93l2.523 2.523a9.987 9.987 0 01-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 010-1.186A10.007 10.007 0 012.839 6.02L6.07 9.252a4 4 0 004.678 4.678z"></path>
                                </svg>
                            </div>
                            <input
                                className="m-3 rounded-xl h-10 w-36 pl-11"
                                type="password"
                                placeholder="Password"
                                required/>
                        </div>
                    </form>
                    <form className='flex justify-center'>
                        <input className="h-4 w-4 cursor-pointer m-2" type="checkbox" required/>
                        <p className='text-center underline'>I confirm the processing of personal data</p>
                    </form>
                    <form className='flex flex-wrap justify-center'>
                        <Link to="/Socials"><input
                            className="h-10 w-36 rounded-xl bg-white cursor-pointer m-5"
                            type="submit"/></Link>
                    </form>
                    <p className='text-xs'>Никита с др</p>
                </div>
            </header>
        </div>
    );
}

export default Auth;
