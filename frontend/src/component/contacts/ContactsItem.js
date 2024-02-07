import React from 'react'

export const ContactsItem = ({ contact }) => {
    const { firstName,lastName, email, phone, type } = contact
  return (
    <div className='container-custom'>
        <h6 className='h-custom'><span className='name'> {firstName} {''}{lastName} </span>
        <span className={`type ${type === 'Personal' ? 'Personal' : 'Business'}`}>{type}</span></h6>
        <hr />
        <ul className='ul-custom'>
            <li className='li-custom'><i className="fa fa-envelope" > </i>  {email}</li>
            <li className='li-custom'> <i className="fa-solid fa-phone"></i> {phone}</li>
        </ul>
        <button className='delete-custom'><i className="fa fa-trash" style={{color: 'red'}}></i></button>
        <button className='edit-custom'><i className="fas fa-edit" style={{color: 'blue'}}></i></button>
    </div>
  )
}
