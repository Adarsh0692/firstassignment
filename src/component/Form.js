import React, { useState } from 'react'

import './Form.css'



function Form() {

    const[visible, setVisible] = useState(false)
    
function handleClick(){
    setVisible(true)
}

    return (
        <>
        <div className='App'>
        <img className='img' src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="facebook" />
        </div>
            <div className='lformdiv'>
                <h1 > Welcome! </h1>
                <span>Log In your account</span> <br /><br /><br />
                <form>
                   {visible && (
                    <div>
                    First Name : <br />
                    <input type="text" placeholder='Enetr first name' className='linpt' /> <br /> <br />
                    Last Name : <br />
                    <input type="text" placeholder='Enetr last name' className='linpt' /> <br /> <br />
                    </div>
                   )}
                    Your Email : <br />
                    <input type="text" placeholder='Enetr your email' className='linpt' /> <br /> <br />
                    Password : <br />
                    <input type="password" placeholder='Enter your Password' className='linpt' /> <br />
                    <input type="checkbox" /> Remember Me <br /> <br /> <br />
                    <button className='lloginbtn'>Login</button> <br /> <br />
                    <div className='lApp' >or <hr /></div>
                    <br /><br /> 
                    <div className='lcontinue' >
                        <button className='lcontinuebtn'>Continue with google</button>
                        <button className='lcontinuebtn'>Continue with facebook</button>
                    </div>
                    <br /><br />
                    <div className='signup'>
                    <p >Don't have any account?
                        <p className='show' onClick={handleClick} >SignUp</p>
                        </p>
                    </div>
                   
                </form>
            </div>
        </>

    )
}

export default Form;