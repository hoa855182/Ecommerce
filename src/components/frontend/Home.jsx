import React from 'react'
import { Navigate } from 'react-router-dom'
import { checkAuth, isLogin } from '../../config/function'
import { ADMIN } from '../../config/path'
import Navbar from '../../layout/admin/Navbar'

import NavBarHome from '../../layout/frontend/NavBarHome'
import Test from '../../layout/frontend/Test'


const Home = () => {
  return(
   
    <div>
        <NavBarHome/>
        Home Page
    </div>
  
  ) 
}

export default Home