import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import './Login.css'

export default function Login(){
    return (
        <>
        <Navbar/>
        <div className='main_login'>
            <div className='login_form'>
                <img className='profile_pic' src="https://play-lh.googleusercontent.com/GPC-DPV91Mp3j7-eFT8Tcs1DG9nZt3QZg7aXbYlhpuX4ec3U58UE8EcmUbCf1ZmnEc8" alt="pic" />
                
                
                <input className='inpt' type="text" placeholder='Enetr User-Name'  /> <br />
                <input className='inpt' type="text" placeholder='Enetr Password' /> <br />
                
                <button className='btn'>Login</button> <br />
                <span> Don't have an account? </span>
                <Link to='/register'>register here</Link>
            </div>
            <div>
            
            </div>
        </div>
        </>
    )
}