import React, { useState } from 'react'

export const Register = () => {
    const [register, setRegister] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: ''
    })

    const { firstName,lastName, email, password, password2 } = register

    const onChange = (e) => setRegister({...register, [e.target.name] : e.target.value})

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(firstName, lastName, password, password2, email);
    }

  return (
<form className='container' onSubmit={onSubmit}>
  <h1 className='text-custom'>Register form <i className="fa fa-user-plus" aria-hidden="true"></i></h1>
  <hr />
  <div className="mb-3">
    <label htmlFor="firstName" className="form-label">first Name</label>
    <input type="text" value={firstName} name='firstName' className="form-control input-custom" onChange={onChange} required/>
    <div  className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="lastName" className="form-label">last Name</label>
    <input type="text" value={lastName} name='lastName' className="form-control input-custom" onChange={onChange}  />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" value={email} name='email' className="form-control input-custom" onChange={onChange} required />
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" value={password} name='password' className="form-control input-custom" 
    onChange={onChange} required minLength={6}/>
  </div>
  <div className="mb-3">
    <label htmlFor="password2" className="form-label">Confirm password</label>
    <input type="password" value={password2} name='password2' className="form-control input-custom" 
    onChange={onChange} required minLength={6} />
  </div>
  <button type="submit " className="btn btn-primary button-custom ">Submit</button>
  <p className='text-custom '>Already have an account ? <a className='nav-custom' href="/login">Login here</a></p>
</form>
  )
}
