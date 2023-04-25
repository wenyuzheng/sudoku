import genPuzzle from "../../lib/function/genPuzzle";
import solver from "../../lib/function/Solver";

describe("genPuzzle", () => {
  it("eg 1", () => {
    const [puzzle, solution] = genPuzzle(40);
    const result = solver(puzzle);
    console.log({ puzzle, result, solution });
    expect(solver(puzzle)).toEqual(solution);
  });
});
