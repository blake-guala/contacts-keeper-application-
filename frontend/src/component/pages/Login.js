import React, { useState } from 'react'

export const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const { email, password } = user

    const onChange = (e) => setUser({...user, [e.target.name] : e.target.value})


  return (
<form className='container'>
  <h1 className='text-custom'>Login <i className="fa-solid fa-user"></i></h1>
  <hr />
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" value={email} name='email' className="form-control input-custom" onChange={onChange} required/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" value={password} name='password' className="form-control input-custom" onChange={onChange} required />
  </div>
  <button type="submit " className="btn btn-primary button-custom ">Submit</button>
  <p className='text-custom '>Don't have an account yet? <a className='nav-custom' href="/register">Register here</a></p>
</form>
  )
}
