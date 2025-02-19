import { createContext, useContext, useState, useRef } from "react";
import HistoryObject from "../objects/HistoryObject";

const BoardContext = createContext();

export const useBoardContext = () => useContext(BoardContext);

export const BoardProvider = ({ children }) => {
  const [history, setHistory] = useState([new HistoryObject(0, 0, [-1, -1, -1, -1, -1, -1, -1, -1, -1])]);
  const [boardState, setBoardState] = useState([
    -1, -1, -1, -1, -1, -1, -1, -1, -1,
  ]);
  const [player, setPlayer] = useState(0);
  const winner = useRef(false);
  
  // function addHistory(player, boardState) {
  //   setHistory([
  //     ...history,
  //     new HistoryObject(history.length, player, boardState),
  //   ]);
  // }
  
  function addHistory(player, boardState) {
      setHistory(prev => [...prev, new HistoryObject(prev.length, player, [...boardState])]);
    }

  const contextValue = {
    history,
    setHistory,
    addHistory,
    boardState,
    setBoardState,
    player,
    setPlayer,
    winner,
  };

  return (
    <BoardContext.Provider value={contextValue}>
      {children}
    </BoardContext.Provider>
  );
};
