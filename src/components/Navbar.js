
import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { BsPersonCircle } from 'react-icons/bs';
import { ImCross,ImMenu } from 'react-icons/im';

export default function Navbar() {
    const [isMobile, setMobile] = useState(false)
    return (
        <>
            <nav className={styles.main}>
                <div className={styles.logo}>
                    <h2 className={styles.h2}> <BsPersonCircle style={{ display: 'flex', textAlign: 'center' }} /> onclick</h2>
                </div>
                <div className={isMobile? styles.mobileMenu : styles.menu}>
                    <ul className={styles.bar}>
                        <li>
                            Home
                        </li>
                        <li>
                            Services
                        </li>
                        <li>
                            Contact
                        </li>
                        <li>
                            About Us
                        </li>
                    </ul>

                </div>
                <div className={styles.loginBar}>
                    <span className={styles.loginbtn} >Login</span>
                    <button className={styles.signupbtn}>Sign Up</button>
                </div>
                <div className={styles.menuicon}>

                    {isMobile ? <ImCross onClick={() => setMobile(false)} /> : <ImMenu onClick={() => setMobile(true)} />}

                </div>

            </nav>

        </>
    )
}