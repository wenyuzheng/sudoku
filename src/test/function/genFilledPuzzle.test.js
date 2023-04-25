import genFilledPuzzle from "../../lib/function/genFilledPuzzle";
import safeToPlace from "../../lib/function/safeToPlace";

describe("genFilledPuzzle", () => {
  it("eg 1", () => {
    const startPuzzle = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    const result = genFilledPuzzle(startPuzzle);

    console.log(result);

    result.forEach((e, index) => {
      const row = Math.floor(index / 9);
      const col = index % 9;
      expect(safeToPlace(result, row, col, e)).toEqual(true);
    });
  });
});
