import React from 'react'

const Task1 = () => {
    let greet = new Date().getHours();
    let msg;

    if (greet <= 11 && greet >= 1) {
        msg = `Good morning`
    } else if (greet >= 12 && greet <= 19) {
        msg = `Good afternon`
    }
    else {
        msg = `Good night`
    }



    return (

        <>
            <div className='shadow-xl rounded-2xl bg-slate-600'>
            <div className='text-center p-10'>
                <h1 className='font-bold text-5xl text-white'>Greetings</h1>
                </div>
                <div className='m-10 p-5 text-center font-bold text-2xl'>
                <h1 className='text-white'>Hello sir, {msg}</h1>
                </div>
            </div>
        </>
    )
}

export default Task1
