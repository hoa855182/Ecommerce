import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../components/Admin/Dashboard'
import { isLogin } from '../config/function'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import { router } from './router'


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {router.map((route) => {
          const { path, exact, name, element } = route

          const props = { path, exact, name, element} 

          return <Route {...props}/>
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
