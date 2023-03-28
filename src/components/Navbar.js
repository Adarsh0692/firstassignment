import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar(){

    return (
        <div className='main-nav'>
        <div className='design-nav'>
            <h3>UL/UX desgin</h3>
        </div>
        <div className='link-nav' >
            <ul className='links'>
                <Link to='/'><li>Home</li></Link>
                <Link to='/aboutUs'><li>About Us</li></Link>
                <Link to='/login'><li>Login</li></Link>
                
            </ul>
           
           
            
        </div>
        <div className='nav-logo'>
            <h2>logo</h2>
        </div>
        </div>
    )
}