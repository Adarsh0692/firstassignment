import React, { useState } from "react";
import './Todo.css'
import './App.css'

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [pendingCount, setPendingCount] = useState(0);

  const addTask = () => {
    if (inputValue) {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue("");
      setPendingCount(pendingCount + 1);
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    if (!updatedTasks[index].completed) {
      setPendingCount(pendingCount - 1);
    }
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
    setPendingCount(pendingCount - 1);
  };

  return (
    <div className="box">
      <h1>{` Tasks pending ${pendingCount}`}</h1>
      
      
      <ul>
        {tasks.map((task, index) => (
          <li className="warp" key={index}>
            <span style={{ textDecoration: task.completed ? "line-through" : "" }}>
              {task.text}
            </span>
            <button onClick={() => completeTask(index)}>Complete</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default TodoList;
