import React from 'react'

function Content() {
  return (
    <div className='flex flex-col w-screen min-h-screen'>
        <div className='flex flex-row justify-center items-center bg-red-200 h-screen w-screen text-3xl text-indigo-800'>Section 1</div>
        <div className='flex flex-row justify-center items-center bg-emerald-200 h-screen w-screen text-3xl text-indigo-800'>Section 2</div>
        <div className='flex flex-row justify-center items-center bg-indigo-200 h-screen w-screen text-3xl text-indigo-800'>Section 3</div>
        <div className='flex flex-row justify-center items-center bg-rose-200 h-screen w-screen text-3xl text-indigo-800'>Section 4</div>
    </div>
  )
}

export default Content