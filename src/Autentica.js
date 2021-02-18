import React from 'react'
import { Redirect, Route } from 'react-router-dom'


const PrivateRoute = (props) => {
    return(localStorage.getItem('token') ? <Route {...props} /> : <Redirect to="/Login-Biblioteca" />)
}

export default PrivateRoute