import {Route, Routes, Link} from 'react-router-dom'
import React from 'react'
import Auth from './Auth'
import Socials from './Socials'


function App() {
  return (
    <div>
    <Routes>
       <Route path = "/pigeon" element = {<Auth />} /> 
       <Route path = "/Socials" element = {<Socials />} /> 
    </Routes>
    </div>
  )
}

export default App