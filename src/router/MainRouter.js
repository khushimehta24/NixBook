import React from 'react'
import { Route, Routes } from "react-router";
import { BrowserRouter as Router, Outlet, Navigate } from "react-router-dom";
import Login from '../components/login/Login';
import Signup from '../components/signup/Signup'
import Splashpage from '../components/Splashpage';
function MainRouter() {

    const PrivateRoute = () => {
        const token = localStorage.getItem('token')
        return token ? <Outlet /> : <Navigate to="/login" />
    }

    return (
        <Routes>
            <Route exact path='/' element={<Splashpage />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<Signup />} />

            {/* <Route path='/details' element={<PrivateRoute />} >
                <Route path='/details' element={<Details />} />
            </Route> */}
        </Routes>
    )
}

export default MainRouter