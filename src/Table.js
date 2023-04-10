import React, { useState } from 'react'
import './App.css';

export default function Table(){
    const [number, setNumber]= useState([])
 function handleClick(){
    const newNumber= Math.floor(Math.random()*100)
    setNumber([newNumber, ...number])
 }

    return (
        <div>
            <h1>Generate Random Number on Table</h1>
            <button onClick={handleClick}>Generate Random Number</button>
             <table border='2px' >
                <tr>
                    <th>Numbers</th>
                </tr>
                {
                    number.map(Number => 
                    <tr>
                       <td>{Number}</td>
                    </tr> )
                }
             </table>
        </div>
    )
    
}