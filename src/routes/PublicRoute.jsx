import React from 'react'
import { Navigate, Route } from 'react-router-dom'
import { isLogin } from '../config/function'
import { ADMIN } from '../config/path'

const PublicRoute = ({ element, ...rest}) => {
  return (
    <Route 
        {...rest}
        element={isLogin() ? <Navigate to={ADMIN}/> : element}/>
  )
}

export default PublicRoute
