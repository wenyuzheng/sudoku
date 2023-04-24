const Keyboard = ({ onClickKey }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="keyboard">
      {numbers.map((number) => {
        return (
          <button onClick={() => onClickKey(number)} key={number}>
            {number}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
