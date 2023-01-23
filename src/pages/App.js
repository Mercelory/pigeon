import {Route, Routes, Link} from 'react-router-dom'
import React from 'react'
import Auth from './Auth'
import Socials from './Socials'
import OpenDialogue from './OpenDialogue'


function App() {
  return (
    <div>
    <Routes>
       <Route path = "/pigeon" element = {<Auth />} /> 
       <Route path = "/Socials" element = {<Socials />} /> 
       <Route path = "/OpenDialogue" element = {<OpenDialogue />} /> 
    </Routes>
    </div>
  )
}

export default App