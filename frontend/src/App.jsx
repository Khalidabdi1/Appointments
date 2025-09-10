import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Route , Routes,Link} from 'react-router-dom'
import axios, { Axios } from 'axios'

import './App.css'


import Signup from './Login/Signup'
import Login from './Login/Login'
function App() {



  return (
  <div className='h-screen'>
{/* <Login></Login> */}

 <Routes>
            {/* <Route path="/" element={<div> first page </div>}></Route> */}
            <Route path="/" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
 </Routes>

   </div>
  )
}

export default App
