import pokeHoles from "../../lib/function/pokeHoles";

describe("poke holes", () => {
  it("eg 1", () => {
    const puzzle = [
      [4, 5, 3, 8, 2, 9, 6, 1, 7],
      [2, 1, 9, 3, 7, 6, 8, 5, 4],
      [8, 6, 7, 4, 5, 1, 9, 3, 2],
      [1, 9, 8, 5, 6, 4, 2, 7, 3],
      [5, 7, 2, 1, 8, 3, 4, 6, 9],
      [3, 4, 6, 2, 9, 7, 5, 8, 1],
      [9, 3, 4, 6, 1, 8, 7, 2, 5],
      [6, 2, 1, 7, 4, 5, 3, 9, 8],
      [7, 8, 5, 9, 3, 2, 1, 4, 6],
    ];

    const result = pokeHoles(puzzle, 40);
    console.log({ result });
  });
});
