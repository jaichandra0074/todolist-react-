import React, { useState } from "react";
import "./styles.css";

function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task === "") return;

    let newTasks = tasks.slice();
    newTasks.push(task);

    setTasks(newTasks);
    setTask("");
  }

  function deleteTask(index) {
    const newTasks = tasks.filter((item, i) => i !== index);
    setTasks(newTasks);
  }

  return (
    <div className="container">
      <div className="todo-box">
        <h1>Todo List</h1>

        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>Add</button>

        <ul>
          {tasks.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => deleteTask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;