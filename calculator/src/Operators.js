import "./Operators.css";
function Operators({ groupNumbers }) {
  const operatorSet = ["+", "-", "x", "/", "="];
  return (
    <div className="operators-component">
      {operatorSet.map((operator, i) => {
        return (
          <div
            className="num-button operator-button"
            onClick={() => groupNumbers(operator)}
          >
            {operator}
          </div>
        );
      })}
    </div>
  );
}

export default Operators;
