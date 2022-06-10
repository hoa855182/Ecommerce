import Dashboard from '../components/Admin/Dashboard'
import Profile from '../components/Admin/Profile'
import Login from '../components/frontend/auth/Login'

import Register from '../components/frontend/auth/Register'
import Home from '../components/frontend/Home'
import Test from '../components/frontend/auth/Test'
export const router = [
  { path: '/', exact: true, element: <Home/>},
  { path: '/admin/dashboard', exact: true, element: <Dashboard /> },
  { path: '/admin/profile', exact: true, element: <Profile /> },
  { path: '/Register', exact: true, element: <Register/> },
  { path: '/Login', exact: true, element: <Login /> },
  { path: '/Test', exact: true, element: <Test /> },
]
