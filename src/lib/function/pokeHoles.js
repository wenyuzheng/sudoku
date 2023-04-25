const pokeHoles = (puzzle, number) => {
  const removed = [];
  while (removed.length < number) {
    const randomSquare = Math.floor(Math.random() * 81); // from 0-80
    const randRow = Math.floor(randomSquare / 9);
    const randCol = randomSquare % 9;

    if (puzzle[randRow][randCol] === null) continue;

    removed.push(puzzle[randRow][randCol]);
    puzzle[randRow][randCol] = null;
  }

  return puzzle;
};

export default pokeHoles;
