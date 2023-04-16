import React from 'react'

export default function ListMap({list}) {
    
  return (
    <div>
      <ul>
             {
        list.map((item,index)=>{
            return(
            <li key={index}>{item}</li>
        )}
        )
      }
        </ul>
    </div>
  )
}
