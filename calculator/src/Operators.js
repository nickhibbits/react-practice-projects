import "./Operators.css";
function Operators({ performOp }) {
  const operatorSet = ["+", "-", "x", "/"];
  return (
    <div className="operators-component">
      {operatorSet.map((operator, i) => {
        return (
          <div
            className="num-button operator-button"
            onClick={() => performOp(operator)}
          >
            {operator}
          </div>
        );
      })}
    </div>
  );
}

export default Operators;
