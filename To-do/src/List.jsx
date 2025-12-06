import React, { useState } from 'react'

function List() {
    const[task,addTask]=useState("");
    const[tasks,addTasks]=useState([]);
    const[error,setError]=useState("");

    function changeClick(e){
        e.preventDefault();
        if(task==""){
          return  setError("Task is empty...!");
        }
        addTasks([...tasks,task]);
        addTask("");
        setError("");
    }
    function remove(ind){
        const newarr=tasks.filter((a,i)=>i!==ind);
        addTasks(newarr);
    }
  return (
    <div>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",}}>
        <h1>To-Do List</h1>
            <div><input type="text" onChange={(e)=>addTask(e.target.value)} placeholder='Enter your task' value={task} />
            <button onClick={changeClick} style={{marginLeft:10}}>Submit</button><br />
            {error && <p style={{color:"red"}}>{error}</p>}</div>
        </div>
        <div>
        <h3>Your tasks:</h3>
        <ul>
            {tasks.map((val,ind)=><li key={ind}>{val}<button onClick={()=>remove(ind)} style={{marginLeft:10}}> Clear</button></li>)}
        </ul>
        </div>
    </div>
  )
}

export default List