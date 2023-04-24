const getRandomVal = (array) => {
  return Math.floor(Math.random() * array.length);
};

const genPuzzle = () => {
  const puzzle = [];

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return getRandomVal(array);
};

export default genPuzzle;
