import genPuzzle from "./function/genPuzzle";

const NewGameButton = (holesNum, setPuzzle, setSolution) => {
  const onClickHandler = () => {
    const [pokedPuzzle, correctSolution] = genPuzzle(holesNum);
    setPuzzle(pokedPuzzle);
    setSolution(correctSolution);
  };

  return <button onClick={onClickHandler}>New Game</button>;
};

export default NewGameButton;
