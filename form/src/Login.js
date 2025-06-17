import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const navigate = useNavigate()

  const login_page = (e) => {
    e.preventDefault()

    axios.post("http://localhost:8080/login", { email, password })
      .then(result => {
        console.log(result)

        // Check for proper response message
        if (result.data.message === "Login successful") {
          alert("Login secessfully...")
          navigate("/home")
        } else {
          alert(result.data.message || "Login failed")
        }
      })
      .catch(err => {
        console.log(err)
        alert("Something went wrong")
      })
  }

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Login Page</title>
      <link rel="stylesheet" href="style.css" />

      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={login_page}> {/* ✅ Fix: Add onSubmit here */}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  )
}

export default Login
