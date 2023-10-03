import winLogic from "./WinLogic/winLogic";
import GameBox from "./components/GameBox";
import React, { useEffect, useState } from 'react';
import Player from "./components/Player/Player";

function App() {
  // Initialize the state for the game board data, player's move, and winner
  const [data, setData] = useState(Array(9).fill(""));
  const [pMove, setPMove] = useState(false);
  const [winner, setWinner] = useState("");
  const [gameOver,setGameOver]=useState(false);
//Asked user name at the starting phase

const [player1,setPlayer1]=useState('');


  useEffect(() => {
    // Check for a win condition using winLogic
    const win = winLogic(data);
    
    if (win[0]) {
      // If there's a winner, set the winner state
      setWinner(win[1] === "x" ? player1 : "Computer");
      setGameOver(true);
    } else {
      // Check if the game is a tie by counting non-empty cells
      const emptyCount = data.filter((element) => element !== "").length;
      if (emptyCount === 9) {
        setWinner("Game is Tie!");
        setGameOver(true);
      }
    }
  }, [data]);

  // Function to handle player's move
  const playerMove = (index) => {
    if (!gameOver&&!data[index]) {
      // Update the data array with the player's move and toggle player's turn
      const newData = [...data];
      newData[index] = "x";
      setData(newData);
      setPMove(!pMove);
    }
  };

  // Function for the computer's move
  const computerMove = () => {
    // Find empty indexes for computer's move
    const emptyIndexes = data.map((element, index) => (!element ? index : null)).filter((index) => index !== null);
    const randomIndex = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
    
    if (randomIndex !== undefined) {
      // Update the data array with the computer's move and toggle player's turn
      const newData = [...data];
      newData[randomIndex] = "O";
      setData(newData);
      setPMove(!pMove);
    }
  };

  useEffect(() => {
    // Trigger the computer's move when it's the computer's turn
    if (!pMove && !gameOver) {
      computerMove();
    }
  }, [pMove]);

  return (
    <>
      {player1!=""?(
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
                <h1 className="text-xl text-blue-500">Computer</h1>
              </div>
        </div>
        <hr className="border-t-2 border-gray-400" />
        <div className="game_box flex-col relative left-10 justify-center mx-auto my-2">
          <div className="first-row flex">
            {/* Render the GameBox component for the first row */}
            <GameBox index1={0} index2={1} index3={2} data={data} setClick={playerMove} />
          </div>
          <div className="second_row flex">
            {/* Render the GameBox component for the second row */}
            <GameBox index1={3} index2={4} index3={5} data={data} setClick={playerMove} />
          </div>
          <div className="third_row flex">
            {/* Render the GameBox component for the third row */}
            <GameBox index1={6} index2={7} index3={8} data={data} setClick={playerMove} />
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
              setPMove(false);
              setGameOver(false);
            }}
          >
            Reset
          </button>
        </div>
      </div>
      ):<Player  setPlayer1={setPlayer1}/>}
    </>
  );
}

export default App;