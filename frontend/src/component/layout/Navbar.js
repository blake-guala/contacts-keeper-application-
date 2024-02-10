import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setAuth, setUserNull } from '../../store/usersAuth/userSlice'
import { contactsNull } from '../../store/contacts/contactSlice'

export const Navbar = () => {
  const { authenticated} = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(setAuth())
    dispatch(contactsNull())
    dispatch(setUserNull())
  }
  return (
    <nav className="navbar  bg-light">
    <p className='icon-custom'>Contacts Book <i className="fa fa-address-book"></i></p>
      <div className="nav">
        {/* <NavLink className="nav-item nav-link nav-custom" to="/">{}</NavLink> */}
        <NavLink className="nav-item nav-link nav-custom" style={{fontSize: '1.2rem'}} to="/about">About</NavLink>
        <button onClick={onLogout} className="nav-item nav-link nav-custom" href='/login'>{authenticated && (
        <i className="fa fa-sign-out" style={{fontSize: '0.8rem'}}>Logout</i>)}</button>
      </div>
  </nav>
  )
}

