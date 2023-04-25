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

const safeToPlace = (puzzle, i, j, number) => {
  if (
    notInRow(puzzle, i, number) &&
    notInColumn(puzzle, j, number) &&
    notInSquare(puzzle, i, j, number)
  ) {
    return true;
  } else {
    return false;
  }
};

export default safeToPlace;
