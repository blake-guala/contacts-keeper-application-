import React, { useState } from 'react'

export const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

  return (
<form className='container'>
  <h1 className='text-custom'>Login <i className="fa-solid fa-user"></i></h1>
  <hr />
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" required/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" required />
  </div>
  <button type="submit " className="btn btn-primary button-custom ">Submit</button>
  <p className='text-custom '>Don't have an account yet? <a className='nav-custom' href="/register">Register here</a></p>
</form>
  )
}
