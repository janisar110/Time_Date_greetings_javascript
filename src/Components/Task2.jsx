import React from 'react'

const Task2 = () => {

  let myName = "Janisar";
  let date = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();
  return (
    <>
      <div className=' shadow-xl rounded-2xl bg-slate-600'>
        <div className='text-center p-10'>
        <h1 className='font-bold text-5xl text-white'>Today Details</h1>
        </div>
        <div className='m-10 p-5 text-center font-bold text-2xl'>
        <h1 className='text-white'>Hey, I am {myName}</h1>
        <p className='text-white'>Date: {date}</p>
        <p className='text-white'>Time: {time}</p>
        </div>
      </div>


      
    </>
  )
}

export default Task2
