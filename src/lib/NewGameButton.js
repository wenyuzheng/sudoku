import { useState } from "react";
import genPuzzle from "./function/genPuzzle";
import "./NewGameButton.css";

const NewGameButton = ({
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
    setInitPuzzle(pokedPuzzle);
    setPuzzle(pokedPuzzle);
    setSolution(correctSolution);
    setIsCompleted(false);
    setOpen(!open);
  };

  return (
    <div>
      {open ? (
        <ul className="difficulties">
          <li className="difficultyItem">
            <div onClick={() => onClickHandler(10)}>Easy</div>
          </li>
          <li className="difficultyItem">
            <div onClick={() => onClickHandler(40)}>Medium</div>
          </li>
          <li className="difficultyItem">
            <div onClick={() => onClickHandler(60)}>Hard</div>
          </li>
        </ul>
      ) : (
        <div onClick={handleOpen} className="newGameButton">
          New Game
        </div>
      )}
    </div>
  );
};

export default NewGameButton;
