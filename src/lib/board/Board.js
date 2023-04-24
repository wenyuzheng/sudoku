import React, { useEffect, useState } from "react";
import styled from "styled-components";
import _ from "lodash";

import "./Board.css";
import Cell from "./Cell";
import Keyboard from "./Keyboard";

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(9, 0fr);
  grid-template-columns: repeat(9, 0fr);
  background-color: white;
  grid-auto-flow: row;
  justify-content: center;
`;

const Board = ({ puzzle, setPuzzle }) => {
  const [currPosition, setCurrPosition] = useState(null);

  const onClickKey = (number) => {
    if (currPosition) {
      const [row, col] = currPosition;
      const newPuzzle = _.cloneDeep(puzzle);
      newPuzzle[row][col] = number;
      setPuzzle(newPuzzle);
    }
  };

  return (
    <div>
      <GridContainer>
        {puzzle.map((row, i) => {
          return row.map((val, j) => {
            const isCurrPosition =
              currPosition && currPosition[0] === i && currPosition[1] === j;

            const onClickCell = () => setCurrPosition([i, j]);

            return (
              <Cell
                key={`${i}${j}`}
                isCurrPosition={isCurrPosition}
                value={val}
                onClickCell={onClickCell}
              />
            );
          });
        })}
      </GridContainer>
      <Keyboard onClickKey={onClickKey} />
    </div>
  );
};

export default Board;
