import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeAlert } from '../../store/contacts/contactSlice'

export const Alert = () => {
    const dispatch = useDispatch()

    const { alert } = useSelector((state) => state.contact)

    setTimeout(() => {
        if (alert) {
            dispatch(removeAlert())
        }
    },3000)

  return (
    <div>
        {alert && (<h3 > <span className={`custom-alert ${alert.type}`}> <i className="fas fa-exclamation-circle" 
        ></i>  {alert.msg}</span></h3>)}
    </div>
  )
}
