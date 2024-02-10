import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchContacts, setFilteredNull } from '../../store/contacts/contactSlice'

export const Search = () => {
  const dispatch = useDispatch()
  const { contacts } = useSelector((state) => state.contact)

  const onChange = (e) => {
    dispatch(searchContacts(e.target.value))
    if (e.target.value === '') {
      dispatch(setFilteredNull())
    }
  }
  return (
    <div>
      { contacts.length > 0 && (<input onChange={onChange} className='search-custom'
        type="text" placeholder='Search contacts...' />) }
    </div>
  )
}
