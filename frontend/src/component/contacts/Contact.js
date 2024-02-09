import React from 'react'
import { ContactsItem } from './ContactsItem'
import { useSelector } from 'react-redux'

export const Contact = () => {
    const { contacts, filtered } = useSelector((state) => state.contact) 
    if (filtered !== null) {
      return (
        filtered.map(contact => (
          <ContactsItem key={contact._id} contact={contact}/>
        ))
      )
    } 
  return (
    <div>
        {contacts.length > 0 ? contacts.map(contact => (
            <ContactsItem key={contact._id} contact={contact}/>
        )) : (<h4 className='null'><i style={{}} className="fas fa-exclamation-circle" 
        ></i> Your contact list is empty, add contacts using the form.</h4>)}
    </div>
  )
}
