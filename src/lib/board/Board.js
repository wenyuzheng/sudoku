import React, { useState } from "react";
import _ from "lodash";

import Keyboard from "./Keyboard";
import Grid from "./Grid";

const Board = ({ initPuzzle, puzzle, setPuzzle }) => {
  const [currPosition, setCurrPosition] = useState(null);

  const onClickKey = (number) => {
    if (currPosition) {
      const [row, col] = currPosition;

      // Can only change the cells that were not in initPuzzle
      if (initPuzzle[row][col] === null) {
        const newPuzzle = _.cloneDeep(puzzle);
        newPuzzle[row][col] = number;
        setPuzzle(newPuzzle);
      }
    }
  };

  return (
    <div>
      <Grid
        puzzle={puzzle}
        initPuzzle={initPuzzle}
        currPosition={currPosition}
        setCurrPosition={setCurrPosition}
      />
      <Keyboard onClickKey={onClickKey} />
    </div>
  );
};

export default Board;
