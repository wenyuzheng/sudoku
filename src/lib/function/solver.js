const notInRow = (puzzle, i, k) => {
  return !puzzle[i].includes(k);
};

const notInColumn = (puzzle, j, k) => {
  const column = puzzle.map((e) => e[j]);
  return !column.includes(k);
};

const notInSquare = (puzzle, i, j, k) => {
  const firstRow = Math.floor(i / 3) * 3;
  const firstColumn = Math.floor(j / 3) * 3;

  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      if (puzzle[firstRow + x][firstColumn + y] === k) {
        return false;
      }
    }
  }
  return true;
};

const getPossibleValues = (puzzle, i, j) => {
  let result = [];

  for (let k = 1; k <= 9; k++) {
    if (
      notInRow(puzzle, i, k) &&
      notInColumn(puzzle, j, k) &&
      notInSquare(puzzle, i, j, k)
    ) {
      result.push(k);
    }
  }

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

const solver = (puzzle) => {
  const empty = getNextEmpty(puzzle);

  if (empty === true) return puzzle;
  const [i, j] = empty;

  const possibilities = getPossibleValues(puzzle, i, j);

  for (let k = 0; k < possibilities.length; k++) {
    puzzle[i][j] = possibilities[k];
    const attemptedRes = solver(puzzle);

    if (attemptedRes !== false) {
      return puzzle;
    } else {
      puzzle[i][j] = 0;
    }
  }

  return false;
};

export default solver;
