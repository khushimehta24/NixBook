import React from 'react'
import { Route, Routes } from "react-router";
import { BrowserRouter as Router, Outlet, Navigate } from "react-router-dom";
import Dashboard from '../components/dashboard/dashboard';
import Login from '../components/login/Login';
import Signup from '../components/signup/Signup'
import Splashpage from '../components/Splashpage';
function MainRouter() {

    const PrivateRoute = () => {
        const user = localStorage.getItem("user")
        return user ? <Outlet /> : <Navigate to="/login" />
    }

    return (
        <Routes>
            <Route exact path='/' element={<Splashpage />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/dashboard' element={<Dashboard />} />
            {/* <Route path='/details' element={<PrivateRoute />} >
                <Route path='/details' element={<Details />} />
            </Route> */}
        </Routes>
    )
}

export default MainRouter