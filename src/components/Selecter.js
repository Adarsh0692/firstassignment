import React from 'react'


export default function Selectors({value,onChange}) {
  const products =['select..','coffee','suger','milk']
  // const price= {
  //   'coffee': 40,
  //   'sugar' : 45,
  //   'milk' : 30
  // }
  return (
    <div >
    
       <select value={value} onChange={onChange} style={{margin: 20, width: 200, height:25}} >
        {
          products.map(items=>
             <option>{items}</option>
          )
        },
        
       </select>

    </div>
  )
}
