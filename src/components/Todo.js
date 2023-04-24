import React, { useState } from 'react';
import style from './Todo.module.css'

import {useDispatch, useSelector} from 'react-redux'
import actions from '../action'

export default function Todo() {
    const [task, setTask] = useState('')
    const todo = useSelector((state) => state)
    const dispatch = useDispatch()
    // console.log(todo)
  return (
    <div className={style.main}>
      <h1>Todo Task</h1> <br />
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)}/>
      <button className={style.add}
      onClick={() => {
        dispatch({type: actions.ADD, payload: task});
        setTask('')
      }}
       >Add</button>
       {
         todo.map((item) => (
            <div key={item.id} className={style.list}>
                <span>
                 {item.task}
                 {item.isComplete && '✔️'}
                 </span> 

                 <button className={style.delete}
                 onClick={() => dispatch({type: actions.DELETE, payload: item.id})}
                 >Delete</button>
                 <button className={style.comp}
                 onClick={() => dispatch({type: actions.COMPLETE, payload: item})}
                 >Complete</button>
                 
                 <button className={style.undo}
                 onClick={() => dispatch({type: actions.UNDO, payload: item})}
                 >Undo</button>
            </div>
         ))
       }

    </div>
  )
}
