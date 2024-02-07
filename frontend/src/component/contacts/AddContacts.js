import React, { useState } from 'react'
import { v4 } from 'uuid'
import { useDispatch } from 'react-redux'
import { addContact, setAlert } from '../../store/contacts/contactSlice'

export const AddContacts = () => {
  const dispatch = useDispatch()

    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        type: 'Personal',
        id: v4()
    })

    const { firstName,lastName, email, phone, type } = contact

    const onChange = (e) => setContact({...contact, [e.target.name] : e.target.value})

    const onSubmit = e => {
      e.preventDefault()
      dispatch(addContact(contact))
      dispatch(setAlert({ msg: 'Contact added', type: 'success' }))
      setContact({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        type: 'Personal',
        id: v4()
      })
    }

  return (
    <div>
    <form className='container' onSubmit={onSubmit}>
  <h1 className='text-custom'>Add contacts <i className="fa fa-user-plus" aria-hidden="true"></i></h1>
  <hr />
  <div className="mb-3">
    <label htmlFor="firstName" className="form-label">First name </label>
    <input type="text" value={firstName} name='firstName' className="form-control input-custom" onChange={onChange} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="lastName" className="form-label">Last name </label>
    <input type="text" value={lastName} name='lastName' className="form-control input-custom" onChange={onChange} />
  </div>
  <div className="mb-3">
    <label htmlFor="phone" className="form-label">Phone <i className="fa-solid fa-phone"></i></label>
    <input type="text" value={phone} name='phone' className="form-control input-custom" onChange={onChange} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email <i className="fa fa-envelope" ></i></label>
    <input type="email" value={email} name='email' className="form-control input-custom" onChange={onChange} required/>
  </div>
  <div className="form-check">
  <input className="form-check-input" value='Personal' type="radio" checked={type === 'Personal'} name="type" onChange={onChange} />
  <label className="form-check-label" htmlFor="Personal">
    Personal
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" value='Business' type="radio" checked={type === 'Business'} name="type"  onChange={onChange}/>
  <label className="form-check-label" htmlFor="Business">
    Business
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" value='Other' type="radio" checked={type === 'Other'} name="type"  onChange={onChange}/>
  <label className="form-check-label" htmlFor="Other">
    Other
  </label>
</div>
  <button type="submit " className="btn btn-primary button-custom ">Add Contact</button>
</form>
    </div>
  )
}
