import React from 'react'

export const ContactsItem = ({ contact }) => {
    const { firstName,lastName, email, phone, type } = contact
  return (
    <div className='container-custom'>
        <h6 className='h-custom'>{firstName} {''}{lastName} 
        <span className='type'>{type}</span></h6>
        <ul>
            <li className='li-custom'>{email} <i className="fa fa-envelope" ></i></li>
            <li className='li-custom'>{phone} <i className="fa-solid fa-phone"></i></li>
        </ul>
        <button><i className="fa fa-trash"></i></button>
        <button><i className="fas fa-edit"></i></button>
    </div>
  )
}
