import React, { useState } from 'react'

function ButtonClick() {
    const [list, setList] = useState([])
    const [name, setName] = useState('')

    function handleChange(e) {
        setName(e.target.value)
    }

    function handleName() {
        setName('')
        setList([name, ...list])
    }
    return (
        <>
            <div className="App">
                <h1>List</h1>

                <input type="text" value={name} onChange={handleChange} /> <nbps />
                <button onClick={handleName}>Add</button>
            </div>
            <div>
                <ol>
                    {
                        list.map((item, index) => (<li key={index}>{item}</li>))
                    }
                </ol>
            </div>
        </>
    )
}

export default ButtonClick
