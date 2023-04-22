import "./Cell.css";

const Cell = ({ row, col, value = null, onClick }) => {
  return (
    <div className="cell" onClick={() => onClick(row, col)}>
      {value}
    </div>
  );
};

export default Cell;
