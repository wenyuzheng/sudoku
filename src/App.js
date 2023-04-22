import { useState } from "react";
import "./App.css";
import Board from "./lib/board/Board";

const puzzle1 = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
];

function App() {
  const [puzzle, setPuzzle] = useState(puzzle1);

  return (
    <div className="App">
      <h1 className="App-title">Sudoku</h1>
      <Board puzzle={puzzle} setPuzzle={setPuzzle} />
    </div>
  );
}

export default App;
