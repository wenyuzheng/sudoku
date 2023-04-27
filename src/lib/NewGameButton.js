import genPuzzle from "./function/genPuzzle";

const NewGameButton = ({
  holesNum,
  setPuzzle,
  setSolution,
  setIsCompleted,
}) => {
  const onClickHandler = () => {
    const [pokedPuzzle, correctSolution] = genPuzzle(holesNum);
    setPuzzle(pokedPuzzle);
    setSolution(correctSolution);
    setIsCompleted(false);
  };

  return <button onClick={onClickHandler}>New Game</button>;
};

export default NewGameButton;
