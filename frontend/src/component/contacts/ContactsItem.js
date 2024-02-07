import React from 'react'
import { deleteContact, setAlert, setCurrent } from '../../store/contacts/contactSlice'
import { useDispatch } from 'react-redux'

export const ContactsItem = ({ contact }) => {
    const { firstName,lastName, email, phone, type, id } = contact
    const dispatch = useDispatch()

    const onDelete = (e) => {
      dispatch(deleteContact(id))
      dispatch(setAlert({ msg: 'Contact deleted', type: 'success' }))
    }

    const onEdit = (e) => {
      dispatch(setCurrent(contact))
    }

  return (
    <div className='container-custom'>
        <h6 className='h-custom'><span className='name'> {firstName} {''}{lastName} </span>
        <span className={`type ${type === 'Personal' ? 'Personal' : 'Business'}`}>{type}</span></h6>
        <hr />
        <ul className='ul-custom'>
            <li className='li-custom'><i className="fa fa-envelope" > </i>  {email}</li>
            <li className='li-custom'> <i className="fa-solid fa-phone"></i> {phone}</li>
        </ul>
        <button className='delete-custom' onClick={onDelete}><i className="fa fa-trash" style={{color: '#F40009'}}></i></button>
        <button className='edit-custom' onClick={onEdit} ><i className="fas fa-edit" style={{color: 'blue'}}></i></button>
    </div>
  )
}
