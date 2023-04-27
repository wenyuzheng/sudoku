import useWindowSize from "../hooks/useWindowSize";

const Cell = ({ editableCell, isCurrPosition, value = null, onClickCell }) => {
  const [screenWidth, screenHeight] = useWindowSize();

  const squareSize =
    screenWidth < 480 ? (screenWidth - 30) / 9 : (screenWidth * 0.8) / 9;

  // const backgroundColor = !isCurrPosition
  //   ? "white"
  //   : editableCell
  //   ? "blue"
  //   : "grey";

  const backgroundColor = isCurrPosition
    ? "grey"
    : editableCell
    ? "blue"
    : "white";

  const style = {
    display: "flex",
    width: `${squareSize}px`,
    height: `${squareSize}px`,
    border: "black 1px solid",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: backgroundColor,
  };

  return (
    <div className="cell" onClick={onClickCell} style={style}>
      {value}
    </div>
  );
};

export default Cell;
