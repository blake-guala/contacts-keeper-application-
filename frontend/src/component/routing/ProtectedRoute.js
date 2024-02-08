import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = () => {
    const { authenticated } = useSelector((state) => state.user)
  return (
    !authenticated ? <Navigate to='/login' /> : <Outlet/>
  )
}
