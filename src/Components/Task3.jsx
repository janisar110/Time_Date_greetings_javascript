import React, { useState } from 'react'

const Task3 = () => {

  const [Time, setTime] = useState(new Date())

  let formatedTime = Time.toLocaleTimeString();
  setInterval(() => {
    setTime(new Date())
  }, 1000)

  return (
    <>
      <div className=' shadow-xl rounded-2xl bg-slate-600'>
      <div className='text-center p-10'>
        <h1 className='font-bold text-5xl text-white'>Live Time</h1>
        </div>
        <div className='m-10 p-5 text-center font-bold text-2xl'>
        <h1 className='text-white'>{formatedTime}</h1>
        </div>
      </div>
    </>
  )
}

export default Task3
