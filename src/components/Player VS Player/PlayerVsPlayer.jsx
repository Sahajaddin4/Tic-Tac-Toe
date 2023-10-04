import React,{useEffect,useState} from 'react'
import GameBox from '../GameBox';
import winLogic from '../../WinLogic/winLogic';

function PlayerVsPlayer({player1,player2}) {
    const [data, setData] = useState(Array(9).fill(""));
    const [p1Move, setP1Move] = useState(true);
    const [p2Move,setP2Move]=useState(false);
    const [winner, setWinner] = useState("");
    const [gameOver,setGameOver]=useState(false);




   const player1Move=(index)=>{
        if(!gameOver && data[index]==="" &&p1Move)
        {
           const newData=[...data];
           newData[index]= "x";
           setData(newData);
           setP1Move(false);
           setP2Move(true);
        }
   }

   const player2Move=(index)=>{
    if(!gameOver && data[index]==="" &&p2Move)
    {
       const newData=[...data];
       newData[index]= "o";
       setData(newData);
       setP2Move(false);
       setP1Move(true)
    }
   }
//Checking condition for winner
useEffect(()=>{
  const win=winLogic(data);

  if(win[0]===true)
  {
      setWinner((win[1]==="x" ?player1:player2));
      setGameOver(true);
  }
  else{
     const emptyIndexs=data.filter(element=>element==="");
     if(emptyIndexs.length===0)
     {
      setWinner("Game tie");
      setGameOver(true);
     }
  }
},[data,player1Move,player2Move])

  return (
    <>
    <div className="container shadow-lg w-[360px] mx-auto p-4 my-[25px] bg-white">
        <h1 className="text-center text-3xl my-2 text-blue-400">Tic-Tac-Toe</h1>
        <hr className="border-t-2 border-gray-400" />
        <div className="playerPlace my-2 flex justify-between items-center">
              <div className="player1 flex-col">
                <h1 className="font-bold text-2xl text-green-500">Player1:</h1>
                <h1 className="text-xl text-blue-500">{player1}</h1>
              </div>
              <div className="versus">
                <h1 className="text-lg">vs</h1>
              </div>
              <div className="player2">
              <h1 className="font-bold text-2xl text-green-500">Player2:</h1>
                <h1 className="text-xl text-blue-500">{player2}</h1>
              </div>
        </div>
        <hr className="border-t-2 border-gray-400" />
        <div className="game_box flex-col relative left-10 justify-center mx-auto my-2">
          <div className="first-row flex">
            {/* Render the GameBox component for the first row */}
            <GameBox index1={0} index2={1} index3={2} data={data} setClick={(p1Move?player1Move:player2Move)} />
          </div>
          <div className="second_row flex">
            {/* Render the GameBox component for the second row */}
            <GameBox index1={3} index2={4} index3={5} data={data} setClick={(p1Move?player1Move:player2Move)} />
          </div>
          <div className="third_row flex">
            {/* Render the GameBox component for the third row */}
            <GameBox index1={6} index2={7} index3={8} data={data} setClick={(p1Move?player1Move:player2Move)} />
          </div>
        </div>
        <hr className="border-t-2 border-gray-400" />
        {/* Display the winner if there is one */}
        <h1 className={winner === "" ? 'hidden' : 'text-4xl'}>Winner : {winner}</h1>
        <div className="flex justify-center items-center my-2">
          {/* Reset button to start a new game */}
          <button
            className="bg-yellow-600 py-1 rounded-lg px-2 text-white hover:cursor-pointer hover:bg-white hover:text-yellow-600"
            onClick={() => {
              // Reset the game data and winner state
              setData(Array(9).fill(""));
              setWinner("");
              setP1Move(true);
              setP2Move(false)
              setGameOver(false);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  )
}

export default PlayerVsPlayer