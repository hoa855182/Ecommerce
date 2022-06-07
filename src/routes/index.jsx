import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { router } from './router'
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000'
axios.defaults.headers.post['Accept'] = 'application/json' 
axios.defaults.headers.post['Content-type'] ='application/json'
axios.defaults.withCredentials = true;

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {router.map((route, idx) => {
          const { path, exact, name, element } = route

          return <Route key={idx} path={path} exact={exact} name={name} element={element} />
        })}
        
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
