import { useState, useEffect, useRef } from "react";
import { useBoardContext } from "../contexts/BoardContext.jsx";
import Cell from "./Cell";
import "../css/Board.css";

export default function Board({ input }) {
  const { boardState, setBoardState, history, addHistory, player, setPlayer, winner } = useBoardContext();
  // const [boardState, setBoardState] = useState(input);
  const isFirstRender = useRef(true);
  const prevBoardState = useRef(input); // Add this to track previous board state
  // const winner = useRef(false);
  const winnerPlayer = useRef(-1);

  // useEffect(() => setBoardState(input), []);
  useEffect(() => {
    if (isFirstRender.current) {
      setBoardState(input);
      prevBoardState.current = input;
      isFirstRender.current = false;
      return;
    }
    // Check if the boardState actually changed
    if (JSON.stringify(prevBoardState.current) === JSON.stringify(boardState)) {
      return;
    }
    prevBoardState.current = [...boardState];
    
    //Biggest bug
    // Only add to history if it's a new move (not from history navigation)
    if (JSON.stringify(history[history.length - 1].boardState) === JSON.stringify(boardState)) return;
    
      
      //Does not work because !0 becomes true & !1 becomes false, instead of intefert values it becomes boolean
      //setPlayer(prev => !prev);
      setPlayer((prev) => prev ^ 1);
      // setPlayer(player ^ 1);
      addHistory(player^1, boardState);
      
      for (const arr of [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ]) {
        if (
          boardState[arr[0]] === boardState[arr[1]] &&
          boardState[arr[1]] === boardState[arr[2]] &&
          boardState[arr[0]] !== -1
        ) {
          winner.current = true;
          winnerPlayer.current = boardState[arr[0]];
        }
      }
    // }// if ends here
  }, [boardState]);

  return (
    <div>
      {winner.current ? (
        <h2>Winner: {winnerPlayer.current === 0 ? "❎" : "🔴"}</h2>
      ) : (
        <h2>Next player: {player === 0 ? "❎" : "🔴"}</h2>
      )}
      <div className="board">
        {boardState.map((element, index) => (
          <Cell
            key={index}
            id={index}
            setBoardState={setBoardState}
            currSymbol={element}
            player={player}
            hasWon={winner.current}
          />
        ))}
      </div>
    </div>
  );
}
