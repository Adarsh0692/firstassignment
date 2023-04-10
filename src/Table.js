import React,{useState} from 'react'

export default function Table(){
    const [status, setStatus] = useState([])

    function handleMouseOver(){
      const time= new Date().toLocaleString();
     const newStatus= [{time: time, eventName:'MouseOver'}, ...status]
        setStatus(newStatus)
      
    }
    function handleMouseOut(){
      const time= new Date().toLocaleString();
     const newStatus= [{time: time, eventName:'MouseOut'}, ...status]
        setStatus(newStatus)
      
    }
    return (
      <div>
        <h1 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>This is heading h1</h1>
        <h2 >This is heading h2</h2>
        <div>
          <p>This is a div para</p>
        </div>
        <table border='2px'>
          <tr>
            <th>Date & Time</th>
            <th>eventName</th>
          </tr>
          {
            status.map(data => (
            <tr>
               <td> {data.time} </td>
               <td> {data.eventName} </td>
            </tr>
            ))
          }
        </table>
      </div>
    );
}