import { useEffect, useState } from "react";
import "./App.css";
import NumberPad from "./NumberPad";
import Operators from "./Operators";
import ValueDisplay from "./ValueDisplay";

function App() {
  const [numberDisplay, setNumberDisplay] = useState([]);
  const [numberSet, setNumberSet] = useState([]);

  const display = (input) => {
    // console.log("input", input);
    switch (input) {
      case "C":
        setNumberDisplay([]);
        break;

      default:
        numberDisplay === []
          ? setNumberDisplay(() => [input])
          : setNumberDisplay((number) => [...number, input]);
        break;
    }
  };

  const performOp = (operator) => {
    // console.log("operator", operator);
    console.log("numbers", numberDisplay);
    const current = numberDisplay.join("");
    const _number = parseInt(current);

    switch (operator) {
      case "-":
        setNumberSet((numberSet) => [...numberSet, _number]);
        console.log("numberSet", numberSet);
        console.log(eval(numberSet.join("")));
        break;
      default:
        setNumberSet((numberSet) => [...numberSet, _number, operator]);
        setNumberDisplay([]);
        console.log("numberSet", numberSet);
        break;
    }
  };

  useEffect(() => {
    console.log("numberSet", numberSet);
  });

  return (
    <div className="App">
      <div className="calculator-wrapper">
        <ValueDisplay numbers={numberDisplay} />
        <div className="buttons-wrapper">
          <NumberPad selectNumber={display} />
          <Operators performOp={performOp} />
        </div>
      </div>
    </div>
  );
}

export default App;
