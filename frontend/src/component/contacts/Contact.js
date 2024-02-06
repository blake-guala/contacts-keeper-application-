import React from 'react'
import { ContactsItem } from './ContactsItem'
import { useSelector } from 'react-redux'

export const Contact = () => {
    const { contacts } = useSelector((state) => state.contact) 
  return (
    <div>
        {contacts.length > 0 ? contacts.map(contact => (
            <ContactsItem contact={contact}/>
        )) : (<h4>Please add a contact</h4>)}
    </div>
  )
}
