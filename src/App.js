import { useEffect, useState } from "react";
import "./App.css";
import Board from "./lib/board/Board";
import genPuzzle from "./lib/function/genPuzzle";
import verify from "./lib/function/verify";
import NewGameButton from "./lib/NewGameButton";

const holesNum = 1;

const [pokedPuzzle, correctSolution] = genPuzzle(holesNum);

function App() {
  const [puzzle, setPuzzle] = useState(pokedPuzzle);
  const [solution, setSolution] = useState(correctSolution);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    if (!puzzle.flat().includes(null)) {
      setIsCompleted(true);
    }
  }, [puzzle]);

  useEffect(() => {
    const result = verify(puzzle, solution);
    setIsCorrect(result);
  }, [isCompleted]);

  return (
    <div className="App">
      <h1 className="App-title">Sudoku</h1>

      {!isCompleted ? (
        <Board initPuzzle={pokedPuzzle} puzzle={puzzle} setPuzzle={setPuzzle} />
      ) : (
        <div>
          <NewGameButton
            holesNum={holesNum}
            setPuzzle={setPuzzle}
            setSolution={setSolution}
          />
          {isCorrect ? <h2>It is correct!</h2> : <h2>It is not correct!</h2>}
          {/* <Board puzzle={solution} /> */}
        </div>
      )}
    </div>
  );
}

export default App;
