import "./ValueDisplay.css";

function ValueDisplay({ numbers }) {
  // console.log("valueDisplayNumbers", numbers);

  return (
    <div className="value-display-component">
      <div className="value-display-wrapper">
        {numbers.map((number) => number)}
      </div>
    </div>
  );
}

export default ValueDisplay;
