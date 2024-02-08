import React from 'react'
import { useDispatch } from 'react-redux'
import { searchContacts, setFilteredNull } from '../../store/contacts/contactSlice'

export const Search = () => {
  const dispatch = useDispatch()

  const onChange = (e) => {
    dispatch(searchContacts(e.target.value))
    if (e.target.value === '') {
      dispatch(setFilteredNull())
    }
  }
  return (
    <div>
      <input onChange={onChange} className='search-custom'
        type="text" placeholder='Search contacts...' />
    </div>
  )
}
