import React, { useState } from 'react'

export const AddContacts = () => {
    const [register, setRegister] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: ''
    })

    const { firstName,lastName, email, phone } = register

    const onChange = (e) => setRegister({...register, [e.target.name] : e.target.value})
  return (
    <div>
    <form className='container' >
  <h1 className='text-custom'>Add contacts <i className="fa-solid fa-user"></i></h1>
  <hr />
  <div className="mb-3">
    <label htmlFor="firstName" className="form-label">First name <i className="fa fa-user-plus" aria-hidden="true"></i></label>
    <input type="text" value={firstName} name='firstName' className="form-control input-custom" onChange={onChange} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="lastName" className="form-label">Last name <i className="fa-solid fa-user"></i></label>
    <input type="lastName" value={lastName} name='password' className="form-control input-custom" onChange={onChange} required />
  </div>
  <div className="mb-3">
    <label htmlFor="phone" className="form-label">Phone <i className="fa-solid fa-phone"></i></label>
    <input type="text" value={phone} name='phone' className="form-control input-custom" onChange={onChange} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address <i className="fa fa-envelope" aria-hidden="true"></i></label>
    <input type="email" value={email} name='email' className="form-control input-custom" onChange={onChange} required/>
  </div>
  <button type="submit " className="btn btn-primary button-custom ">Add Contact</button>
</form>
    </div>
  )
}
