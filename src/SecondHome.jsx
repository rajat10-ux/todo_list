import React,{useState} from 'react'
import Task from './Task';
 function SecondHome() {
        const initialArray=localStorage.getItem("tasks")
        ?JSON.parse(localStorage.getItem("tasks"))
        :[];
    const [tasks,setTasks]=useState(initialArray)
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    console.log(title,description);
    const submitHandler=(e)=>{
        e.preventDefault();
        setTasks([...tasks,{title,description}]);
        localStorage.setItem("tasks",JSON.stringify(tasks));
    };
const deleteTask=(index)=>{
const filteredArr=tasks.filter((val,i)=>{
        return i!==index;
});
console.log(filteredArr);
setTasks(filteredArr);
};
    return (
    <div className='container'>
    <h1>Daily Goals</h1>
      <form onSubmit={submitHandler}>
        <input 
        type='text'
         placeholder='title'
          value={title}
           onChange={(e)=>setTitle(e.target.value)}
            />
        <textarea 
        placeholder='description'
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        ></textarea>
        <button type='submit'>ADD</button>
      </form>
      {/* // use of currly brcketr needets to return word so //use () this bracklet */}
      {tasks.map((item,index)=>(
    <Task 
    key={index}
     title={item.title} 
     description={item.description} 
     deleteTask={deleteTask}
        index={index}
    />
      ))}
    </div>
  )
}
export default SecondHome;