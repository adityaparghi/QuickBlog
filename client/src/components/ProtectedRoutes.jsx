import React from 'react'
import { Outlet } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import Layout from '../pages/admin/Layout'
import Login from './admin/Login'

export const ProtectedRoutes = () => {
  const { token } = useAppContext()

  return token ? <Layout><Outlet /></Layout> : <Login />
}


