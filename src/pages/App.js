import {Route, Routes, Link} from 'react-router-dom'
import React from 'react'
import Auth from './Auth'
import Socials from './Socials'
import Kitten from './kitten'


function App() {
  return (
    <div>
    <Routes>
       <Route path = "/pigeon" element = {<Auth />} /> 
       <Route path = "/Socials" element = {<Socials />} /> 
       <Route path = "/Kitten" element = {<Kitten />} /> 
    </Routes>
    </div>
  )
}

export default App