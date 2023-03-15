import React, { useState } from 'react'

function TextArea(){
    const[text, setText] = useState('')

function handleChange(e){
    if(text.length<=100){
        setText(e.target.value)
    }else{
        alert('you can not write more than 100 words  ')
    }
}
    return(
        <div>

            <textarea onChange={handleChange} cols="80" rows="20"></textarea>        
           
        </div>
    )
}

export default TextArea