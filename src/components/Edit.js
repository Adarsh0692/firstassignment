import React, { useState } from 'react'
import {useLocation,useNavigate} from 'react-router-dom'


export default function Edit() {
    const navigate= useNavigate()
const location = useLocation()

const[newList, setNewList] = useState(location.state)
const[editing, setEditing]= useState()

function editTask(index,updateList){
    const editedList =[...newList.slice(0,index),updateList, ...newList.slice(index + 1)]
    setNewList(editedList)
    setEditing(index)
    localStorage.setItem('list',JSON.stringify(editedList))
}

  return (
    <div>
        <button onClick={()=>navigate(-1)}>Go back</button>
      <h1>Edit page</h1>
      
        <ul>
            {
                newList.map((item,index)=>{
                    return(
                        <p key={index}>
                            {editing === index ? (
                                <>
                                <input type="text" value={item} onChange={(e)=> editTask(index,e.target.value)}/>
                                <button onClick={()=>setEditing()}>Save</button>
                                </>
                            ) : (
                                <>
                                 <li>
                                    {item}
                                    <button onClick={()=>setEditing(index)}>Edit</button>
                                 </li>
                                </>
                            )}
                        </p>
                    )
                })
            }
        </ul>
    </div>
  )
}
