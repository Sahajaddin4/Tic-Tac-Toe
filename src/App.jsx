import winLogic from "./WinLogic/winLogic";
import GameBox from "./components/GameBox";
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(Array(9).fill(""));
  const [pMove, setPMove] = useState(false);
  const [winner, setWinner] = useState("");

  useEffect(() => {
    const win = winLogic(data);
    
    if (win[0]) {
      setWinner(win[1] === "x" ? "Player" : "Computer");
    } else {
      const emptyCount = data.filter((element) => element !== "").length;
      if (emptyCount === 9) {
        setWinner("Game is Tie!");
      }
    }
  }, [data]);

  const playerMove = (index) => {
    if (!data[index]) {
      const newData = [...data];
      newData[index] = "x";
      setData(newData);
      setPMove(!pMove);
    }
  };

  const computerMove = () => {
    const emptyIndexes = data.map((element, index) => (!element ? index : null)).filter((index) => index !== null);
    const randomIndex = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
    
    if (randomIndex !== undefined) {
      const newData = [...data];
      newData[randomIndex] = "O";
      setData(newData);
      setPMove(!pMove);
    }
  };

  useEffect(() => {
    if (!pMove) {
      computerMove();
    }
  }, [pMove]);

  return (
    <>
      <div className="container w-[360px] mx-auto p-4 my-[25px] bg-white">
        <h1 className="text-center text-3xl my-2 text-blue-400">Tic-Tac-Toe</h1>
        <hr className="border-t-2 border-gray-400" />
        <div className="game_box flex-col relative left-10 justify-center mx-auto my-2">
          <div className="first-row flex">
            <GameBox index1={0} index2={1} index3={2} data={data} setClick={playerMove} />
          </div>
          <div className="second_row flex">
            <GameBox index1={3} index2={4} index3={5} data={data} setClick={playerMove} />
          </div>
          <div className="third_row flex">
            <GameBox index1={6} index2={7} index3={8} data={data} setClick={playerMove} />
          </div>
        </div>
        <hr className="border-t-2 border-gray-400" />
        <h1 className={winner === "" ? 'hidden' : 'text-4xl'}>Winner is {winner}</h1>
        <div className="flex justify-center items-center my-2">
          <button
            className="bg-yellow-600 py-1 rounded-lg px-2 text-white hover:cursor-pointer hover:bg-white hover:text-yellow-600"
            onClick={() => {
              setData(Array(9).fill(""));
              setWinner("");
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
