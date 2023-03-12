import React, { useState } from 'react'

function Count(){
    const [count, setCount] = useState(0)

    function handleIncreament(){
        setCount(count + 1)
    }

    function handleDecreament(){
        setCount(count - 1)
    }

  
    return (
        <>
        <h1 style={{ color:"red"}} >{count}</h1>
        <button onClick={handleIncreament}>Increament</button> <nbps/>
        <button onClick={handleDecreament}>Decreament</button>
        </>
    )
}

export default Count