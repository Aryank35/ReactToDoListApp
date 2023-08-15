import React, { useEffect, useState } from 'react'
import Task from "./task"

const TodoBody = () => {

  const initialArray = localStorage.getItem("tasks")? JSON.parse(localStorage.getItem("tasks")):[];

  const [tasks,setTasks] = useState(initialArray);
  const [title,setTitle] = useState("");
  const [desc,setDesc] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, {title,desc}]);
    setTitle("")
    setDesc("")
  };

  const deleteTask = (index)=>{
    const filteredArr = tasks.filter((val,i)=>{
      return i !== index;
    }); 
    setTasks(filteredArr);
  };

   useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks));
   }, [tasks])
   
  return (
    <div className='mx-[50px] bg-[#ffe4c4]'>
        <p className='text-center text-2xl font-bold pt-3'>Your ToDo list</p>
        <form onSubmit={submitHandler} className='flex flex-col justify-items-center items-center my-3 font-sans py-3'>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className='p-3 text-xl font-semibold border-[1px] border-black text-black active:outline mt-1 mb-3 mx-auto w-2/3' type="text" placeholder='Title'/>
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className='p-3 text-l text-black border-[1px] border-black active:outline mt-1 mb-3 mx-auto w-2/3' placeholder='Description'></textarea> 
            <button className='bg-black py-4 text-white px-40' type='submit'>Add</button>
        </form>
        {tasks.map((item, index) => (
          <Task key={index} title={item.title} desc={item.desc}
          deleteTask={deleteTask}
          index={index}
          />
          
        ))}
    </div>
  )
}

export default TodoBody;