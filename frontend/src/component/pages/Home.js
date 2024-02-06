import React from 'react'
import { AddContacts } from '../contacts/AddContacts'
import { Contact } from '../contacts/Contact'

export const Home = () => {
  return (
    <div className="container">
  <div className="row">
    <div className="col-sm">
      <AddContacts/>
    </div>
    <div className="col-sm">
      <Contact/>
    </div>
  </div>
</div>
  )
}
