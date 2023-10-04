import React, { useState } from 'react'

function Player({name,setPlayer}) {

    const [user,setUser]=useState('');

   const handleNameChange=(e)=>{
    setUser(e.target.value)
    setPlayer(e.target.value);
  }
  return (
    <>
     <div className="container  ms-2  w-[300px]  my-24 bg-white shadow-lg rounded h-[150px]">
      <div className='flex justify-center items-center'>
        <h1 className='text-3xl font-medium text-slate-500'>{name}</h1>
      </div>
        <div  className='flex justify-between' >
        <input type="text" 
          className='py-1 px-2 border mt-6 bg-slate-100  focus:border-blue-600 m-1 rounded-md'
          placeholder='enter name'
          value={user}
          onChange={handleNameChange}
          required
          />
          
        </div>
     </div>
    </>
  )
}

export default Player