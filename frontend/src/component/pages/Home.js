import React from 'react'
import { AddContacts } from '../contacts/AddContacts'
import { Contact } from '../contacts/Contact'
import { Search } from '../contacts/Search'

export const Home = () => {
  return (
    <div className="container">
  <div className="row">
    <div className="col-sm">
      <AddContacts/>
    </div>
    <div className="col-sm">
      <Search/>
      <Contact/>
    </div>
  </div>
</div>
  )
}
