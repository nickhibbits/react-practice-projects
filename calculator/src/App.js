import { useEffect, useState } from "react";
import "./App.css";
import NumberPad from "./NumberPad";
import Operators from "./Operators";
import ValueDisplay from "./ValueDisplay";

function App() {
  const [numbers, setNumbers] = useState([]);

  const displayNumber = (input) => {
    // console.log("input", input);
    switch (input) {
      case "C":
        setNumbers([]);
        break;

      default:
        numbers === []
          ? setNumbers(() => [input])
          : setNumbers((numbers) => [...numbers, input]);
        break;
    }
  };

  const performOp = (operator) => {
    console.log("operator", operator);
  };

  // useEffect(() => {
  //   console.log("numbers", numbers);
  // });

  return (
    <div className="App">
      <div className="calculator-wrapper">
        <ValueDisplay numbers={numbers} />
        <div className="buttons-wrapper">
          <NumberPad selectNumber={displayNumber} />
          <Operators performOp={performOp} />
        </div>
      </div>
    </div>
  );
}

export default App;
