import { useEffect, useState } from "react";
import "../css/Cell.css";

export default function Cell({ id, setBoardState, currSymbol, player, hasWon }) {
  const [symbol, setSymbol] = useState(currSymbol);

  useEffect(() => {
    setSymbol(currSymbol);
  }, [currSymbol]);

  function onCellClick() {
    if (symbol != -1 || hasWon) return;
    setSymbol(player);
    setBoardState((prev) => {
      const newState = [...prev];
      newState[id] = player;
      return newState;
    });
  }

  return (
    <div className="cell" onClick={onCellClick}>
      {symbol === -1 ? "": (symbol === 0 ? String.fromCodePoint("0x274E"): String.fromCodePoint("0x1F534"))}
    </div>
  );
}
