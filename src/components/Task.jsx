// import React, { useState } from 'react';

// function Task() {
//     const [list, setList] = useState("")
//     const [items, setItems] = useState([])
//     const [color, setcolor] = useState("")
//     const[script,setscript]=useState("")

//     const addItem = () => {
//         if (list.trim() !== "") {
//             setItems([...items, { task: list, color: color,description:script }])
//             setList("")
//             console.log(items)
//         }
//     }
//     const deleteItem = (index) => {
//         const deleted = items.filter((_, i) => i !== index)
//         setItems(deleted)
//     }

//     return (
//         <div>
//             <h1>todo app</h1>
//             <input
//                 type="text"
//                 value={list}
//                 placeholder='type here'
//                 onChange={(e) => setList(e.target.value)}

//             />

//             <input type="color"
//                 value={color}
//                 placeholder='change'
//                 onChange={(e) => setcolor(e.target.value)}

//             />
//             <input 
//             type="text"
//             value={script}
//             onChange={(e)=>setscript(e.target.value)}
//             />


//             <br />
//             <button onClick={addItem}>add</button>

//             <ul>
//                 {items.map((items, index) => (
//                     <li key={index} style={{backgroundColor:items.color}}>{items.task} :{items.description} 

//                         <button onClick={() => deleteItem(index)}>delete</button>
//                     </li>

//                 ))}

//             </ul>


//         </div>
//     )

// }

// export default Task;
import React from "react";

import { useState } from "react";
import "./Todo.css";

function Task() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-4">
      <nav className="navbar navbar-dark bg-dark mb-4">
        <span className="navbar-brand mb-0 h1">To-Do List</span>
      </nav>
      <div className="card p-4">
        <h2 className="text-center">ToDO-List</h2>
        <div className="input-group mb-3">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Add a new task" 
            value={task} 
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="btn btn-primary" onClick={addTask}>Add Task</button>
        </div>
        <ul className="list-group">
          {tasks.map((t, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {t}
              <button className="btn btn-danger btn-sm" onClick={() => removeTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Task;

// import React, { useState } from "react";
// import "./Todo.css";

// function Task() {
//   const [tasks, setTasks] = useState([]);
//   const [task, setTask] = useState("");

//   const addTask = () => {
//     if (task.trim() === "") return;
//     setTasks([...tasks, task]);
//     setTask("");
//   };

//   const removeTask = (index) => {
//     setTasks(tasks.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100">
//       <div className="card p-4 text-center" style={{ width: "400px" }}>
//         <nav className="navbar navbar-dark bg-dark mb-4">
//           <span className="navbar-brand mb-0 h1 mx-auto">To-Do List</span>
//         </nav>
//         <h2 className="text-center">To-Do List</h2>
//         <div className="input-group mb-3">
//           <input 
//             type="text" 
//             className="form-control text-center" 
//             placeholder="Add a new task" 
//             value={task} 
//             onChange={(e) => setTask(e.target.value)}
//           />
//           <button className="btn btn-primary" onClick={addTask}>Add</button>
//         </div>
//         <ul className="list-group">
//           {tasks.map((t, index) => (
//             <li key={index} className="list-group-item d-flex justify-content-center align-items-center">
//               <span className="text-center w-100">{t}</span>
//               <button className="btn btn-danger btn-sm ms-2" onClick={() => removeTask(index)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Task;
