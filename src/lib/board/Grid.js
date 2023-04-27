import React, { useState } from "react";
import styled from "styled-components";
import _ from "lodash";

import Cell from "./Cell";

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(9, 0fr);
  grid-template-columns: repeat(9, 0fr);
  background-color: white;
  grid-auto-flow: row;
  justify-content: center;
`;

const Grid = ({ puzzle, currPosition = null, setCurrPosition = null }) => {
  return (
    <div>
      <GridContainer>
        {puzzle.map((row, i) => {
          return row.map((val, j) => {
            const isCurrPosition =
              currPosition && currPosition[0] === i && currPosition[1] === j;

            const onClickCell = () =>
              setCurrPosition ? setCurrPosition([i, j]) : null;

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
    </div>
  );
};

export default Grid;
