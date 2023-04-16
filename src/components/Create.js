import React, { useState } from 'react'
import ListMap from './ListMap'
import {useNavigate} from 'react-router-dom'

export default function Create() {
    const [text, setText]= useState('')
    const[list, setList] = useState(JSON.parse(localStorage.getItem('list')) || [])
    const navigate= useNavigate()
    function handleAdd(){
        if(text){
        setText('')
        const allList = [...list,text]
        setList(allList)
        localStorage.setItem('list', JSON.stringify(allList))
        }
    }
    function handleEditNav(){
        navigate('/edit',{state:list})
    }
     function handleDeleteNav(){
        navigate('/delete', {state : list} )
     }

  return (
    <div>
      <h1>Create page</h1> <hr />
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
      <button onClick={handleAdd}>Add Notes</button>
     
      <ListMap list={list}/>
      <button onClick={()=>handleEditNav()}>Edit Notes</button> <hr />
      <button onClick={() => handleDeleteNav()}>Delete Notes </button>
    </div>
  )
}


