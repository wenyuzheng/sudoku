import { useEffect, useState } from "react";
import "./App.css";
import Board from "./lib/board/Board";
import Grid from "./lib/board/Grid";
import genPuzzle from "./lib/function/genPuzzle";
import verify from "./lib/function/verify";
import useWindowSize from "./lib/hooks/useWindowSize";
import NewGameButton from "./lib/NewGameButton";

const holesNum = 1;

const [pokedPuzzle, correctSolution] = genPuzzle(holesNum);

function App() {
  const [puzzle, setPuzzle] = useState(pokedPuzzle);
  const [solution, setSolution] = useState(correctSolution);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (!puzzle.flat().includes(null)) {
      setIsCompleted(true);
    }
  }, [puzzle]);

  console.log(useWindowSize());

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
            setIsCompleted={setIsCompleted}
          />
          {verify(puzzle, solution) ? <h2>Correct!</h2> : <h2>Inorrect!</h2>}
          <Grid puzzle={solution} />
        </div>
      )}
    </div>
  );
}

export default App;
