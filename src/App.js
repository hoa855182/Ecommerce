import axios from 'axios'
import AppRouter from './routes'
import React from 'react'
import './App.css'
axios.defaults.withCredentials=true
axios.defaults.headers.post['Content-Type']='application/json'
// axios.defaults.headers.post['Access-Control-Allow-Origin']= '*'
axios.defaults.headers.post['Accept']='application/json'
axios.defaults.baseURL="http://localhost:8000/"

axios.interceptors.request.use(
  function(config){
    const token = localStorage.getItem('auth_token')
    config.headers.Authorization = token ? `Bearer ${token}` : ''
    return config
  }
)

function App() {
  return (
    <div>
      <AppRouter />
     
    </div>
  )
}

export default App
