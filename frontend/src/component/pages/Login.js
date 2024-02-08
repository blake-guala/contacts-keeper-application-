import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAlert } from '../../store/contacts/contactSlice'
import { getUserThunk, loginUserThunk } from '../../store/usersAuth/usersAuthThunk'
import { useNavigate } from 'react-router-dom'
import { setError } from '../../store/usersAuth/userSlice'

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { error, authenticated } = useSelector((state) => state.user)
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    const { email, password } = login

    useEffect(() => {
      if (authenticated) {
        navigate('/')
        dispatch(getUserThunk())
      } else if (error) {
        dispatch(setAlert({ msg: error, type: 'hh' }))
        dispatch(setError())
      }
      //eslint-disable-next-line
    },[error,authenticated])

    const onChange = (e) => setLogin({...login, [e.target.name] : e.target.value})

    const onSubmit = (e) => {
      e.preventDefault()
      if (email === '' || password === '') {
        dispatch(setAlert({ msg: 'Please fill out the fields', type: 'custom-alert' }))
      } else {
        dispatch(loginUserThunk(login))
      }
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
