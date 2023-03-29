import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){

    return(
        <div>
        <h1>This is a Navbar</h1>
        <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/login'><li>Login</li></Link>
            <Link to='/register'><li>Register</li></Link>
        </ul>
        </div>
    )
}