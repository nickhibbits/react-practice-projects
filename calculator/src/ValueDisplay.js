import { useState } from "react";
import "./ValueDisplay.css";

function ValueDisplay({ numbers }) {
  let _numbers;

  function parseNumbers(numbers) {
    if (typeof numbers === "number") {
      _numbers = Array.from(String(numbers), Number);
    }
    return;
  }

  parseNumbers(numbers);

  return (
    <div className="value-display-component">
      <div className="value-display-wrapper">
        {_numbers
          ? _numbers.map((number) => number)
          : numbers
          ? numbers.map((number) => number)
          : null}
      </div>
    </div>
  );
}

export default ValueDisplay;
