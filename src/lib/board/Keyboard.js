const Keyboard = ({ onClickKey }) => {
  const keyboardStyle = {
    margin: "20px",
  };

  const keyStyle = {
    height: "40px",
    width: "40px",
    margin: "5px",
    fontSize: "20px",
  };

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="keyboard" style={keyboardStyle}>
      {numbers.map((number) => {
        return (
          <button
            onClick={() => onClickKey(number)}
            key={number}
            style={keyStyle}
          >
            {number}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
