"use client"
import React, { useState } from 'react';

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")

  const [mainTask, setmainTask] = useState([])

  const SubmitHandler = (e) =>{                     //e submit hone se rokega
    //console.log(dfdf)
    e.preventDefault()                          //inbuild method
    setmainTask([...mainTask, {title, desc}]);
    // console.log(title)
    // console.log(desc)
    settitle("")
    setdesc("")
    console.log(mainTask)
 };

 const deleteHandler = (i) =>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)
    
 }

  let renderTask = <h2>No Task Available</h2> 

  //js logic----
if(mainTask.length>0){
  
  renderTask = mainTask.map((t, i)=>{
    return(
      <li key={i} className='flex items-center justify-between mb-8'>
        <div className='flex items-center justify-between  w-2/3'>
        <h5 className='font-semibold text-2xl'>{t.title}</h5>
        <h6 className='font-medium text-lg'>{t.desc}</h6>
      </div>

      <button 
      onClick={()=>{
        deleteHandler(i)
      }}
      className='bg-red-400 rounded text-white px-2 py-2 font-bold'>Delete</button>
      </li>
    );

  });
}
  return (
  <>
  <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Monika's Todo List</h1>

  <form onSubmit={SubmitHandler}>
    <input 
    type='text' 
    className='text-2xl border-zinc-800 border-2 m-5 py-1'
    placeholder='Enter Title Here'
    value={title}
    onChange={(e)=>{                  //two way binding
      // console.log(e.target.value), e stand for elem
      settitle(e.target.value)
    }}
    
    />
 
    <input 
    type='text' 
    className='text-2xl border-zinc-800 border-2 m-5 py-1'
    placeholder='Enter Description Here'
    value={desc}
    onChange={(e)=>{
      setdesc(e.target.value)

    }}
    />

    <button className='bg-black text-white  px-2 py-2 font-bold m-5 rounded'>Add Task</button>
  </form >

  <hr />

  <div className='p-8 bg-slate-200'>
    <ul>
      {renderTask}
    </ul>
  </div>
  </>
  )
}

export default page