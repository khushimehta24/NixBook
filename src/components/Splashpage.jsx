import React, { useEffect } from 'react'
import logo from './images/img3.png'
import { useNavigate } from 'react-router-dom'

const Splashpage = () => {
    let navigate = useNavigate()
    const bg = {
        background: `white`,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    useEffect(() => {
        setTimeout(() => {
            localStorage.getItem('token') ? navigate('/login') : navigate('/login')
        }, 2000);

    }, [])


    return (
        <div data-aos="zoom-in">
            <div style={bg}>
                <img src={logo} alt='img' />
            </div>
        </div>
    )
}

export default Splashpage