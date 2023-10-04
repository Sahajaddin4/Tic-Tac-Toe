import React, { useState } from 'react'

function ChooseOponent({setChooseOponent}) {
  const [selectedOption, setSelectedOption] = useState("")
  const opponent=(e)=>{
    e.preventDefault();
    setChooseOponent(selectedOption);
  }
  return (
    <>
      <div className="container    w-[320px] mx-auto my-24 bg-white shadow-lg rounded ">
        <form onSubmit={opponent}  className='flex-col' >
          <div className='mt-4 mx-auto p-2 hover:shadow-lg'>

            <input type="radio"
            className='m-1'
              id='playerVsPlayer'
              value={"Player vs Player"}
              checked={selectedOption === "Player vs Player"}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <label className='text-xl font-bold' htmlFor="playerVsPlayer">Player vs Player</label>
          </div>
          
          <div className='my-2 mx-auto p-2 hover:shadow-lg'>

            <input type="radio"
            className='m-1'
              id='playerVsComputer'
              value={"Player vs Computer"}
              checked={selectedOption === "Player vs Computer"}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <label className='text-xl font-bold' htmlFor="playerVsComputer">Player vs Computer</label>
          </div>
          <div className='flex justify-center items-center'>
          <button className='w-full py-2 px-2 mt-4  bg-purple-600 text-white hover:bg-purple-400
            hover:font-bold rounded-md m-1' type="submit">Start</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ChooseOponent