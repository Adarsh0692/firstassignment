import React from 'react'
import './profile.css'

export default function ProfileData(props){
    


    return(
        <div className='profileDiv'>
            <img className='img' src="https://st.depositphotos.com/1269204/1219/i/600/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg" alt={props.name}/>
            <h3>{props.name}</h3>
            <span>Product Manager @ Google India</span>
            <p>4 years exp.</p>
        </div>
    )
}