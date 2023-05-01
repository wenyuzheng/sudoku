import { useEffect, useState } from "react";
import "./App.css";
import Board from "./lib/board/Board";
import Grid from "./lib/board/Grid";
import genPuzzle from "./lib/function/genPuzzle";
import verify from "./lib/function/verify";
import NewGameButton from "./lib/NewGameButton";

const holesNum = 10;

const [pokedPuzzle, correctSolution] = genPuzzle(holesNum);

function App() {
  const [puzzle, setPuzzle] = useState(pokedPuzzle);
  const [initPuzzle, setInitPuzzle] = useState(pokedPuzzle);
  const [solution, setSolution] = useState(correctSolution);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (!puzzle.flat().includes(null)) {
      setIsCompleted(true);
    }
  }, [puzzle]);

  return (
    <div className="App">
      <h1 className="App-title">Sudoku</h1>
      <NewGameButton
        setPuzzle={setPuzzle}
        setInitPuzzle={setInitPuzzle}
        setSolution={setSolution}
        setIsCompleted={setIsCompleted}
      />

      {!isCompleted ? (
        <Board initPuzzle={initPuzzle} puzzle={puzzle} setPuzzle={setPuzzle} />
      ) : (
        <div>
          <Grid puzzle={solution} />
          {verify(puzzle, solution) ? <h2>Correct!</h2> : <h2>Inorrect!</h2>}
        </div>
      )}
    </div>
  );
}

export default App;
