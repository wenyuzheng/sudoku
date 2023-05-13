import useWindowSize from "../hooks/useWindowSize";

const Cell = ({
  editableCell,
  row,
  col,
  isCurrPosition,
  value = null,
  onClickCell,
}) => {
  const [screenWidth, screenHeight] = useWindowSize();

  let squareSize = (screenHeight * 0.5) / 9;

  if (screenWidth <= 480) {
    // Mobile screen
    squareSize = (screenWidth - 30) / 9;
  } else if (screenWidth <= 768) {
    // Tablet screen
    squareSize = (screenWidth * 0.8) / 9;
  } else if (screenWidth <= 1024) {
    // Horizontal tablet screen
    squareSize = (screenWidth * 0.5) / 9;
  } else if (screenWidth <= 1440) {
    // Desktop screen
    squareSize = (screenWidth * 0.4) / 9;
  }

  const backgroundColor = isCurrPosition
    ? "#91bad6"
    : editableCell
    ? "#dfe9f5"
    : "white";

  const borderTop = row % 3 === 0 ? "#7a7171 2px solid" : "grey 0.1px solid";
  const borderBottom = row === 8 ? "#7a7171 2px solid" : "grey 0.1px solid";
  const borderLeft = col % 3 === 0 ? "#7a7171 2px solid" : "grey 0.1px solid";
  const borderRight = col === 8 ? "#7a7171 2px solid" : "grey 0.1px solid";

  const style = {
    display: "flex",
    width: `${squareSize}px`,
    height: `${squareSize}px`,
    alignItems: "center",
    justifyContent: "center",
    fontSize: squareSize * 0.5,
    color: "#37474f",
    borderTop: borderTop,
    borderBottom: borderBottom,
    borderRight: borderRight,
    borderLeft: borderLeft,
    backgroundColor: backgroundColor,
  };

  return (
    <div className="cell" onClick={onClickCell} style={style}>
      {value}
    </div>
  );
};

export default Cell;
