import React, { useState } from 'react'
import {useLocation,useNavigate} from 'react-router-dom'

export default function Delete() {
    const navigate = useNavigate()
    const location = useLocation()

    const [deleteList, setDeleteList] = useState(location.state)

    function handleDelete(item){
        const deleted = deleteList.filter((lists) => item != lists)
        setDeleteList(deleted);
        localStorage.setItem('list', JSON.stringify(deleted))
    }

  return (
    <div>
        <button onClick={() => navigate(-1)}>Go back</button>
      <h1>Delete page</h1>
       <ul>
        {
            deleteList.map((item,index) => {
                return(
                    <li key={index}>
                        {item}
                        <button onClick={() => handleDelete(item)}>Delete</button>
                    </li>
                )
            })
        }
        
       </ul>
    </div>
  )
}
