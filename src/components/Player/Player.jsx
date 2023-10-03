import React, { useState } from 'react'

function Player({setPlayer1}) {

    const [user,setUser]=useState('');

    const addPlayer=(e)=>{
        e.preventDefault();

        setPlayer1(user.charAt(0).toUpperCase()+user.substring(1));
    }
  return (
    <>
     <div className="container    w-[300px] mx-auto my-24 bg-white shadow-lg rounded h-[150px]">
        <form onSubmit={addPlayer} className='flex justify-between' >
        <input type="text" 
          className='py-1 px-2 border mt-6 bg-slate-100  focus:border-blue-600 m-1 rounded-md'
          placeholder='enter name'
          value={user}
          onChange={(e)=>setUser(e.target.value)}
          required
          />
          <button className='py-2 px-4 mt-6 bg-purple-500 text-white hover:bg-white hover:text-purple-600 rounded-md m-1' type="submit">Start</button>
        </form>
     </div>
    </>
  )
}

export default Player