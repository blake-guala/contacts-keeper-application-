import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setAlert } from '../../store/contacts/contactSlice'

export const Login = () => {
  const dispatch = useDispatch()
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    const { email, password } = login

    const onChange = (e) => setLogin({...login, [e.target.name] : e.target.value})

    const onSubmit = (e) => {
      e.preventDefault()
      if (email === '' || password === '') {
        dispatch(setAlert({ msg: 'Please fill out the fields', type: 'custom-alert' }))
      }
      setLogin({
        email: '',
        password: ''
      })
      console.log(email, password);
    }


  return (
<form className='container' onSubmit={onSubmit}>
  <h1 className='text-custom'>Login <i className="fa-solid fa-user"></i></h1>
  <hr />
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" value={email} name='email' className="form-control input-custom" onChange={onChange} required/>
    <div  className="form-text">We'll never share your email with anyone else.</div>
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
