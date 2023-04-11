import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './PostTable.css'

export default function PostTable() {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(url).then((response) => {
            setUsers(response.data)
            
        })
    }, [])

    function handledelete(index){
         users.splice(index,1)
        setUsers([...users])
    }

    return (
        <div>
            <h1>User Post Data</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Tital Name</th>
                            <th>Post</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{index+1}</td>
                                        <td>{user.title}</td>
                                        <td>{user.body}</td>
                                        <td className='action' onClick={()=>handledelete(index)}>❌</td>
                                        
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}
