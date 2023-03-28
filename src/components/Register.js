import React from 'react'
import Navbar from './Navbar'


export default function Register(){
    return (
        <>
        <Navbar/>
        <div className='main_login'>
            <div className='login_form'>
                <img className='profile_pic' src="https://play-lh.googleusercontent.com/GPC-DPV91Mp3j7-eFT8Tcs1DG9nZt3QZg7aXbYlhpuX4ec3U58UE8EcmUbCf1ZmnEc8" alt="pic" />
                
                
                <input className='inpt' type="text" placeholder='Enetr Email'  /> <br />
                <input className='inpt' type="text" placeholder='Enetr User-Name'  /> <br />
                <input className='inpt' type="text" placeholder='Enetr Password' /> <br />
                
                <button className='btn'>Register</button> <br />
                
            </div>
            <div>
            
            </div>
        </div>
        </>
    )
}