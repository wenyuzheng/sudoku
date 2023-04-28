import { useState } from "react";
import genPuzzle from "./function/genPuzzle";

const NewGameButton = ({
  // holesNum,
  setPuzzle,
  setInitPuzzle,
  setSolution,
  setIsCompleted,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const onClickHandler = (holesNum) => {
    const [pokedPuzzle, correctSolution] = genPuzzle(holesNum);
    console.log({ pokedPuzzle });
    setInitPuzzle(pokedPuzzle);
    setPuzzle(pokedPuzzle);
    setSolution(correctSolution);
    setIsCompleted(false);
  };

  return (
    <div onClick={handleOpen}>
      {open ? (
        <ul className="difficulties">
          <li className="difficultyItem">
            <button onClick={() => onClickHandler(10)}>Easy</button>
          </li>
          <li className="difficultyItem">
            <button onClick={() => onClickHandler(40)}>Medium</button>
          </li>
          <li className="difficultyItem">
            <button onClick={() => onClickHandler(60)}>Hard</button>
          </li>
        </ul>
      ) : (
        <div>New Game</div>
      )}
    </div>
  );
};

export default NewGameButton;
