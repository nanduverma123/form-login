import React from 'react'
import "./App.css"
import Signup from './Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login';
import Homee from './Homee';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/register' element={<Signup />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/home' element={<Homee />}></Route>
    
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
