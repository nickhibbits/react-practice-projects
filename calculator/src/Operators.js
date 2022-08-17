import "./Operators.css";
function Operators({ groupNumbers, chainOp }) {
  const operatorSet = ["+", "-", "x", "/", "="];
  return (
    <div className="operators-component">
      {operatorSet.map((operator, i) => {
        return (
          <div
            className="num-button operator-button"
            onClick={() => groupNumbers(operator, chainOp)}
          >
            {operator}
          </div>
        );
      })}
    </div>
  );
}

export default Operators;
