import React from 'react'
import { checkLogin } from '../../config/function'
import MainLayout from '../../layout/admin/MainLayout'

const Dashboard = () => {
  return checkLogin( <MainLayout>Dashboard</MainLayout>)
}

export default Dashboard
