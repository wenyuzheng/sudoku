import React, { useEffect, useState } from "react";
import styled from "styled-components";

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
  const [currPosition, setCurrPosition] = useState([null, null]);

  const onClickCell = (row, column) => {
    setCurrPosition([row, column]);
  };

  const onClickKey = (number) => {
    const [row, col] = currPosition;

    console.log({ currPosition, row, col });

    if (row !== null && col !== null) {
      const newPuzzle = puzzle;
      newPuzzle[row][col] = number;
      setPuzzle(newPuzzle);
    } else {
      console.log("need to select cell");
    }
  };

  useEffect(() => {}, [puzzle]);

  return (
    <div>
      <GridContainer>
        {puzzle.map((row, i) => {
          return row.map((val, j) => {
            return (
              <Cell
                key={`${i}${j}`}
                row={i}
                col={j}
                value={val}
                onClick={onClickCell}
              />
            );
          });
        })}
      </GridContainer>
      <Keyboard onClick={onClickKey} />
    </div>
  );
};

export default Board;
