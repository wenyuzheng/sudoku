import _ from "lodash";
import safeToPlace from "./safeToPlace";

const getPossibleValues = (puzzle, i, j) => {
  const randomDigits = _.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  let result = [];
  randomDigits.forEach((k) => {
    if (safeToPlace(puzzle, i, j, k)) {
      result.push(k);
    }
  });

  return result;
};

const getNextEmpty = (puzzle) => {
  for (let i = 0; i < puzzle.length; i++) {
    for (let j = 0; j < puzzle.length; j++) {
      if (puzzle[i][j] === 0) return [i, j];
    }
  }

  return true;
};

const genFilledPuzzle = (puzzle) => {
  const empty = getNextEmpty(puzzle);

  if (empty === true) return puzzle;
  const [i, j] = empty;

  const possibilities = getPossibleValues(puzzle, i, j);

  for (let k = 0; k < possibilities.length; k++) {
    puzzle[i][j] = possibilities[k];
    const attemptedRes = genFilledPuzzle(puzzle);

    if (attemptedRes !== false) {
      return puzzle;
    } else {
      puzzle[i][j] = 0;
    }
  }

  return false;
};

export default genFilledPuzzle;
