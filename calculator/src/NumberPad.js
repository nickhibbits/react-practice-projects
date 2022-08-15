import "../src/NumberPad.css";
import React from "react";

function NumberPad() {
  const numberRows = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  return (
    <div className="number-pad-component">
      {[...Array(3)].map((_, groupIndex) => (
        <div key={groupIndex} className={`num-group-${groupIndex} num-group`}>
          {numberRows.map((row, i) => {
            return i === groupIndex ? (
              <React.Fragment key={row[i]}>
                <div className="num-button">{row[0]}</div>
                <div className="num-button">{row[1]}</div>
                <div className="num-button">{row[2]}</div>
              </React.Fragment>
            ) : null;
          })}
        </div>
      ))}
    </div>
  );
}

export default NumberPad;
