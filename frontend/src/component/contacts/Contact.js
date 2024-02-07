import React from 'react'
import { ContactsItem } from './ContactsItem'
import { useSelector } from 'react-redux'

export const Contact = () => {
    const { contacts } = useSelector((state) => state.contact) 
  return (
    <div>
        {contacts.length > 0 ? contacts.map(contact => (
            <ContactsItem key={contact.id} contact={contact}/>
        )) : (<h4 className='null'><i className="fas fa-exclamation-circle" 
        ></i> No contacts,please add a contact.</h4>)}
    </div>
  )
}
