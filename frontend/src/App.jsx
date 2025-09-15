// import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Route , Routes,Link} from 'react-router-dom'
// import axios, { Axios } from 'axios'

import './App.css'


import Signup from './Login/Signup'
import Login from './Login/Login'
import Detalis from "./Login/Details"
import Usertype from './Login/Usertype'
import LastLogin from './Login/LastLogin'
import ErrorPage from './Login/ErrorPage'
import DoctorLayout from './dashboard/DoctorDashboard/DoctorLayout'

import Analysis from "./dashboard/DoctorDashboard/Analysis"
import Massage from "./dashboard/DoctorDashboard/Massage"
import Settings from "./dashboard/DoctorDashboard/Settings"
import Home from "./dashboard/DoctorDashboard/Home"

function App() {



  return (
  <div className='h-screen'>
{/* <Login></Login> */}

 <Routes>
            {/* <Route path="/" element={<div> first page </div>}></Route> */}
            <Route path="/" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path='/Detalis' element={<Detalis></Detalis>}></Route>
            <Route path='/Usertype' element={<Usertype></Usertype>}></Route>
            <Route path='/LastLogin' element={<LastLogin></LastLogin>}></Route>
            <Route path='/Erorrpage' element={<ErrorPage/>}></Route>

            <Route path='/Dashboard/Doctors' element={<DoctorLayout/>}>
              
                    <Route path="Analysis" element={<Analysis/>}></Route>
                    <Route path="Home" element={<Home/>}></Route>
                    <Route path="Massage" element={<Massage/>}></Route>
                    <Route path="Settings" element={<Settings/>}></Route>

               
            </Route>

            
 </Routes>

   </div>
  )
}

export default App
