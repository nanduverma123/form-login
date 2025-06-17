import React, { useState } from 'react'
import "./App.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

  const [name ,setname] =useState("")
  const [email ,setemail] =useState("")
  const [password ,setpassword] =useState("")
  const navigate =useNavigate()

  

  const handle_submit=(e)=>{
    e.preventDefault()

    axios.post("http://localhost:8080/register",{name ,email ,password})
    
    .then(result=>{console.log(result)
      alert("register sucessfully...")
      navigate("/login")
      
    })
      
    .catch(err=>console.log(err))

    

  }
  
  return (
    <>
     <div className="signup-container">
  <h2>Sign Up</h2>
  <form onSubmit={handle_submit}>
    <input type="text" name="name" placeholder="Full Name" required="" 
    onChange={(e)=>setname(e.target.value)}
    />

    <input type="email" name="email" placeholder="Email Address" required="" 
     onChange={(e)=>setemail(e.target.value)}
     
     
    />

    <input type="password" name="password" placeholder="Password" required=""
     onChange={(e)=>setpassword(e.target.value)}
    
    />
    <input type="submit" defaultValue="Register" />
  </form>
</div>
    </>
  )
}

export default Signup
