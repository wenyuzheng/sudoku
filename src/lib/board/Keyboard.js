import useWindowSize from "../hooks/useWindowSize";

const Keyboard = ({ onClickKey }) => {
  const [screenWidth, screenHeight] = useWindowSize();

  const margin = screenWidth >= 1024 ? screenWidth * 0.01 : screenWidth * 0.025;
  const keyMargin = 5;
  const keySize =
    screenWidth >= 1440
      ? (screenWidth * 0.3) / 9
      : screenWidth >= 1024
      ? (screenWidth * 0.5) / 9
      : (screenWidth - margin * 2 - keyMargin * 2 * 9) / 9;

  const keyboardStyle = {
    margin: `${margin}px`,
  };

  const keyStyle = {
    height: `${keySize}px`,
    width: `${keySize}px`,
    margin: `${keyMargin}px`,
    fontSize: `${keySize * 0.5}px`,
    color: "#37474f",
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
