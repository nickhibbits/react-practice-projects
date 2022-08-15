import "./ValueDisplay.css";

function ValueDisplay({ numbers }) {
  console.log("valueDisplayNumbers", numbers);

  return (
    <div className="value-display-component">
      <div className="value-display-wrapper">
        {numbers.length > 0
          ? numbers.map((number) => {
              return number;
            })
          : null}
      </div>
    </div>
  );
}

export default ValueDisplay;
