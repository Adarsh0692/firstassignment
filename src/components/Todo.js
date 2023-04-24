import React, { useState } from 'react'

import {useDispatch, useSelector} from 'react-redux'
import actions from '../action'

export default function Todo() {
    const [task, setTask] = useState('')
    const todo = useSelector((state) => state)
    const dispatch = useDispatch()
    // console.log(todo)
  return (
    <div>
      <h1>Todo Task</h1> <br />
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)}/>
      <button
      onClick={() => {
        dispatch({type: actions.ADD, payload: task});
        setTask('')
      }}
       >Add</button>
       {
         todo.map((item) => (
            <div key={item.id}>
                <span>
                 {item.task}
                 {item.isComplete && '✔️'}
                 </span> 

                 <button
                 onClick={() => dispatch({type: actions.DELETE, payload: item.id})}
                 >Delete</button>
                 <button
                 onClick={() => dispatch({type: actions.COMPLETE, payload: item})}
                 >Done</button>
                 
                 <button
                 onClick={() => dispatch({type: actions.UNDO, payload: item})}
                 >Undo</button>
            </div>
         ))
       }

    </div>
  )
}
