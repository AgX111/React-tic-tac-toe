import { useBoardContext } from "../contexts/BoardContext";
import "../css/GameState.css";

export default function GameState() {
  const { history, setHistory, setBoardState, setPlayer, winner } = useBoardContext();

  function handleClick(index) {
    console.log(history);
    setHistory([...history.slice(0, index+1)]);
    setBoardState([...history[index].boardState]);
    setPlayer(history[index].player);
    winner.current = false;
    console.log(history);
  }
  
  return (
    <div className="game-state">
      <h3>Game History</h3>
      <div className="move-list">
        {history.map((historyObject, index) => (
          <div key={historyObject.index} className="move-item">
            <span className="move-number">{historyObject.index+1}.</span>
            <button 
              className="move-button"
              onClick={() => handleClick(historyObject.index)}
            >
              {historyObject.index === 0 ? "Go to game start" : `Go to move #${historyObject.index}`}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}