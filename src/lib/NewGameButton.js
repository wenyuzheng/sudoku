import genPuzzle from "./function/genPuzzle";

const NewGameButton = ({
  holesNum,
  setPuzzle,
  setInitPuzzle,
  setSolution,
  setIsCompleted,
}) => {
  const onClickHandler = () => {
    const [pokedPuzzle, correctSolution] = genPuzzle(holesNum);
    setInitPuzzle(pokedPuzzle);
    setPuzzle(pokedPuzzle);
    setSolution(correctSolution);
    setIsCompleted(false);
  };

  return <button onClick={onClickHandler}>New Game</button>;
};

export default NewGameButton;
