
import React,{useState} from 'react'
import { Route } from 'react-router-dom'


function AdminPrivateRoute({...rest}) {

    const [loading,setLoading] = useState(true)
    if (loading){
        return <h1> Loading... </h1>
    }
  return (
    // <Route {...rest}
    //     render = { ({props, location}) = >
    //         localStorage.getItem('auth_token') ?

    // }
    // />
    <div></div>
  )
}

export default AdminPrivateRoute
