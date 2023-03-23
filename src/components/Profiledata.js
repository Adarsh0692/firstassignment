import React from 'react'
import styles from './profiledata.module.css'

export default function ProfileData({profiles}){
    console.log(profiles)
    const {name,designation,companyName,experience}= profiles
   

    return(
        <div className={styles.profileDiv}>
            <img className={styles.img} src="https://st.depositphotos.com/1269204/1219/i/600/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg" alt={name}/>
            <h3>{name}</h3>
            <span>{designation} @ {companyName}</span>
            <p>{experience} </p>
        </div>
    )
}