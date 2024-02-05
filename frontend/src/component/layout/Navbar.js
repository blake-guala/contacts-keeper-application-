import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar  bg-light">
    <p className='icon-custom'>Contacts Book <i className="fa fa-address-book"></i></p>
      <div className="nav">
        <NavLink className="nav-item nav-link nav-custom" to="/">Home</NavLink>
        <a className="nav-item nav-link nav-custom" href="!#">About Us</a>
        <a className="nav-item nav-link nav-custom" href="!#">we go</a>
      </div>
  </nav>
  )
}

