import React, { useRef, useState } from 'react'
import './Form.css'
// import { func } from 'prop-types'


export default function Form() {
    const [userData, setUserData]= useState([])

    const [firstName, setFirstName]= useState('')
    const[lastName, setLastName]= useState('')
    const [phone, setPhone]= useState('')
    const [email, setEmail]= useState('')

    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const phoneRef = useRef()
    const emailRef = useRef()

    function handleLastName(){
      setFirstName(firstNameRef.current.value)
      setLastName(lastNameRef.current.value)
      setPhone(phoneRef.current.value)
      setEmail(emailRef.current.value)
    }

    function handleSubmit(e){
       e.preventDefault();
       if(firstName && lastName && phone && email){
       const oldUserData= [...userData]
       oldUserData.push({
        firstName,
        lastName,
        phone,
        email
       })
       setUserData(oldUserData)
       setFirstName('')
       setLastName('')
       setPhone('')
       setEmail('')
    }
    }

    return (
        <div className='parant_div'>
        <div className='main_div'>

            <div className='input_div'>
                <form onSubmit={handleSubmit}>
                <input ref={firstNameRef} value={firstName} type="text" placeholder='First name' onChange={handleLastName}  /> <br />
                <input ref={lastNameRef} value={lastName} type="text" placeholder='Last name' onChange={handleLastName} /> <br />
                <input ref={phoneRef} value={phone} type="number" placeholder='Phone Number' onChange={handleLastName} /> <br />
                <input ref={emailRef} value={email} type="text" placeholder='Email' onChange={handleLastName} /> <br /> <br />
                
                <button className='btn' type='submit'>Submit</button>
                </form>

            </div>
            <div className='ref_div'>
                <p>First name: {firstName} </p>
                <p>Last name:  {lastName} </p> 
                <p>Phone Number:  {phone}</p> 
                <p>Email:  {email}</p> 

            </div>

        </div>
        <div className='output_div'>
            {
                userData.map((data)=> {
                    return (
                        <p>{data.firstName} {data.lastName} - {data.phone} - {data.email} </p>
                    )
                } )
            }

        </div>
        </div>
    )
}
