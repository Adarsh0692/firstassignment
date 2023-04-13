import './table.css'
import React, { useState } from 'react'

import Selectors from './Selecter'

export default function Mypage() {
    const [isOneVisible, setIsOneVisible] = useState(false)
    const [isTwoVisible, setIsTwoVisible] = useState(false)
    const [isTableVisible, setIsTableVisible] = useState(false)
    const [customerName, setCustomerName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [location, setLocation] = useState('')
    // const [list, setList] = useState([])
    const [firstProducts, setFirstProducts] = useState('')
    const [secondProducts, setSecondProducts] = useState('')
    const [thirdProducts, setThirdProducts] = useState('')


    function addMorebtn() {
        setIsOneVisible(true)

    }

    function addMorebtnTwo() {
        setIsTwoVisible(true)
    }

    function saveDate() {
        setFirstName('')
        setLastName('')
        setLocation('')

        // list.push({
        //     firstName,
        //     lastName,
        //     location,
        //     firstProducts,
        //     secondProducts,
        //     thirdProducts,

        // })
        // setList(list)
        setIsTableVisible(true)
    }
    function handleselectfirst(e) {
        setFirstProducts(e.target.value);

    }
    function handleselectsecond(e) {
        setSecondProducts(e.target.value)
    }
    function handleselectthird(e) {
        setThirdProducts(e.target.value)
    }
    return (
        <div style={{ padding: 10 }}>
            <h1>Billing Form</h1>
            <h2>Customer Name</h2>
            <input type="text" placeholder='Customer name' value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
            <div>
                <hr />
                <table>
                    <thead>
                        <tr>
                            <th>Select Product</th>
                            <th>Quantity</th>
                            <th><button style={{ display: isOneVisible ? 'none' : '' }} onClick={addMorebtn}>Add More items</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Selectors value={firstProducts} onChange={handleselectfirst} /> </td>
                            <td><input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='Add Quantity' /></td>
                        </tr>
                    </tbody>
                </table>


            </div>
            <div style={{ display: isOneVisible ? '' : 'none' }}>
                <hr />
                <table>
                    <thead>
                        <tr>
                            <th>Select Product</th>
                            <th>Quantity</th>
                            <th><button style={{ display: isTwoVisible ? 'none' : '' }} onClick={addMorebtnTwo}>Add More items</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Selectors value={secondProducts} onChange={handleselectsecond} /> </td>
                            <td><input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Add Quantity' /></td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div style={{ display: isTwoVisible ? '' : 'none' }}>
                <hr />
                <table>
                    <thead>
                        <tr>
                            <th>Select Product</th>
                            <th>Quantity</th>
                            <th><button style={{ display: isTwoVisible ? 'none' : '' }} onClick={addMorebtnTwo}>Add More items</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Selectors value={thirdProducts} onChange={handleselectthird} /> </td>
                            <td><input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder='Add Quantity' /></td>
                        </tr>
                    </tbody>
                </table>

                <br />

            </div>
            <div>
                <button onClick={saveDate}>Create Bill</button>

            </div>
            <div style={{ display: isTableVisible ? '' : 'none' }}>
                <hr />
                <table className='billtable' border='1px'>

                    <tr>
                        <td colSpan={3}>cutomer Name: {customerName} </td>

                    </tr>
                    <tr>
                        <td colSpan={3}>Date: 13/04/2023</td>

                    </tr>
                    <tr>
                        <th>Products</th>
                        <th>Price</th>
                        <th>quantity</th>
                        <th>Total</th>
                    </tr>
                    <tbody>
                        <tr>
                            <td>{firstProducts}</td>
                            <td>20</td>
                            <td>{firstName}</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>{secondProducts}</td>
                            <td>20</td>
                            <td>{lastName}</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>{thirdProducts}</td>
                            <td>20</td>
                            <td>{location}</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td colSpan={3}>Total</td>
                            <td>120</td>
                        </tr>
                    </tbody>

                </table>
            </div>


        </div>
    )
}
