import Dashboard from '../components/Admin/Dashboard'
import Profile from '../components/Admin/Profile'
import Login from '../components/frontend/auth/Login'

import Register from '../components/frontend/auth/Register'
import Home from '../components/frontend/Home'
import { ADMIN } from '../config/path'
import Test from '../layout/frontend/Test'
import AdminPrivateRoute from './AdminPrivateRoute'


export const router = [
  { path: ADMIN, exact: true, isPrivate: true, element: <AdminPrivateRoute/> },
  { path: '/', exact: true,isPrivate: false, element: <Home/>},
  { path: '/admin/dashboard',isPrivate: true, exact: true, element: <Dashboard /> },
  { path: '/admin/profile', isPrivate: true, exact: true, element: <Profile /> },
  { path: '/Register', exact: true, isPrivate: false, element: <Register/> },
  { path: '/Login', exact: true,isPrivate: false, element: <Login /> },
  { path: '/Test', exact: true,isPrivate: false, element: <Test/> },



  
]
