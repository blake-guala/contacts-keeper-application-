import React from 'react'
import { AddContacts } from '../contacts/AddContacts'

export const Home = () => {
  return (
    <div className="container">
  <div className="row">
    <div className="col-sm">
      <AddContacts/>
    </div>
    <div className="col-sm">
      One of three columns
    </div>
  </div>
</div>
  )
}
