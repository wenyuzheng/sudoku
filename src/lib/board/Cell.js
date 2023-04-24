import "./Cell.css";

const Cell = ({ isCurrPosition, value = null, onClickCell }) => {
  const backgroundColor = isCurrPosition ? "grey" : "white";
  const style = {
    backgroundColor: backgroundColor,
  };

  return (
    <div className="cell" onClick={onClickCell} style={style}>
      {value}
    </div>
  );
};

export default Cell;
