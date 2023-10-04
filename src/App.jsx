import React, { useEffect, useState } from 'react';
import Player from './components/Player/Player';
import ChooseOponent from "./components/ChooseOponent/ChooseOponent";
import PlayerVsPlayer from './components/Player VS Player/PlayerVsPlayer';
import PlayerVsComputer from './components/Player vs Computer/PlayerVsComputer';
function App() {
  // Opponent choose
  const [choosenOpponent, setChooseOponent] = useState("");
  const[player1,setPlayer1]=useState("");
  const[player2,setPlayer2]=useState("");
  const [gameStarted,setGameStarted]=useState(false);
  const [pVc,setPvC]=useState(false);

  const startGameWithPlayer=()=>{
  
      if(player1!=="" && player2!=="")
      {
         setGameStarted(true);
      }
      else{
        setChooseOponent("");
      }
  }

  const startGameWithComputer=()=>{
    if(player1!=="")
      {
        setPvC(true);
         setGameStarted(true);
      }
      else{
        setChooseOponent("");
      }
  }
  return (
    < >
      <div>
      {
        (!gameStarted?(choosenOpponent === "" ? (
          <ChooseOponent setChooseOponent={setChooseOponent} />
        ) : (
           choosenOpponent==="Player vs Player"?( //If player vs Player
           <div className="sm:flex sm:justify-center sm:items-center ">
             <Player name={"Player 1"} setPlayer={(playerName)=>setPlayer1(playerName)} />
             <Player name={"Player 2"} setPlayer={(playerName)=>setPlayer2(playerName)} />
             <button className="py-2 px-4 mt-6 ms-4 bg-purple-500 text-white hover:bg-white
              hover:text-purple-600 rounded-md m-1" onClick={startGameWithPlayer}>Start</button>
           </div>):(
           <div className="sm:flex sm:justify-center sm:items-center ">
           <Player name={"Player 1"} setPlayer={(playerName)=>setPlayer1(playerName)} />
           <button className="py-2 px-4 mt-6 ms-4 bg-purple-500 text-white hover:bg-white
            hover:text-purple-600 rounded-md m-1" onClick={startGameWithComputer}>Start</button>
         </div>)
           
        )):(!pVc?(<PlayerVsPlayer player1={player1} player2={player2} />):
        <PlayerVsComputer player1={player1}/>
        ))
      }
      </div>
    </>
  );
}

export default App;
