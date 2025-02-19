import { useState } from "react";
import { BoardProvider } from "./contexts/BoardContext.jsx";
// import Cell from "./components/Cell";
import "./css/App.css";
import Board from "./components/Board.jsx";
import GameState from "./components/GameState.jsx";

function App() {
  // const [player, setPlayer] = useState(0);
  return (
    <>
      <BoardProvider>
        <div className="main-container">
          <Board
            // player={player}
            // setPlayer={setPlayer}
            input={[-1, -1, -1, -1, -1, -1, -1, -1, -1]}
          />
          <GameState />
        </div>
      </BoardProvider>
    </>
  );
}

export default App;
