import React from 'react'
import { Link } from 'react-router-dom'
export default function Home(){

    return(
        <div>
        <h1>Welcome to Home page</h1>
        <Link to='/contact'>go to contact page</Link>
        </div>
    )
}