import { useEffect, useState } from "react";
import "./App.css";
import Board from "./lib/board/Board";
import Grid from "./lib/board/Grid";
import genPuzzle from "./lib/function/genPuzzle";
import verify from "./lib/function/verify";
import useWindowSize from "./lib/hooks/useWindowSize";
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

  const [screenWidth, screenHeight] = useWindowSize();

  return (
    <div className="App">
      <h1 className="App-title">Sudoku</h1>
      {screenHeight < 760 && screenWidth > screenHeight ? (
        <h2>
          You are on a small screen, please hold your mobile upright and
          refresh.
        </h2>
      ) : (
        <div>
          <NewGameButton
            setPuzzle={setPuzzle}
            setInitPuzzle={setInitPuzzle}
            setSolution={setSolution}
            setIsCompleted={setIsCompleted}
          />

          {!isCompleted ? (
            <Board
              initPuzzle={initPuzzle}
              puzzle={puzzle}
              setPuzzle={setPuzzle}
            />
          ) : (
            <div>
              <Grid puzzle={solution} />
              {verify(puzzle, solution) ? (
                <h2>Correct!</h2>
              ) : (
                <h2>Inorrect!</h2>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
