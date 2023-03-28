import React from 'react'
import './AboutUs.css'
import Navbar from './Navbar'

export default function AboutUs(){

    return (
        <>
        <Navbar/>
        <h1>About Us</h1> 
        <div className='main-about'>
        
        <div className='about-img'>
            <img className='pic_img' src="https://st.depositphotos.com/1269204/1219/i/600/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg" alt="imagee" />
            <br />
            <p>Age: 35</p>
            <p>Location: India</p>
        </div>
        <div className='about-content'>
            <h1>Mat simon</h1>
            <h2>write about yourself</h2>
            <textarea  cols="60" rows="10"></textarea>
            <h2>what are your skills </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus temporibus reprehenderit aut repudiandae eligendi beatae? Alias labore est vel, recusandae dignissimos ab explicabo laboriosam nam dolore delectus, veniam ea voluptatem.</p>
        </div>
        </div>
        </>
    )
}