import { useEffect, useState } from "react";
import "./App.css";
import NumberPad from "./NumberPad";
import Operators from "./Operators";
import ValueDisplay from "./ValueDisplay";

function App() {
  const [numberDisplay, setNumberDisplay] = useState([]);
  const [numberSet, setNumberSet] = useState([]);

  const display = (input) => {
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

  const performOperation = (numberSet) => {
    // console.log("here");
    console.log(eval(numberSet.join("")));
  };

  const groupNumbers = (operator) => {
    const current = numberDisplay.join("");
    const _number = parseInt(current);

    switch (operator) {
      case "=":
        setNumberSet((numberSet) => [...numberSet, _number]);
        console.log("numberSet", numberSet);
        // performOperation(numberSet);
        break;
      default:
        setNumberSet((numberSet) => [...numberSet, _number, operator]);
        setNumberDisplay([]);
        break;
    }
  };

  useEffect(() => {
    console.log("numberSet", numberSet);
    console.log(numberSet[-1]);
    if (typeof numberSet[numberSet.length - 1] !== "string") {
      console.log("here");
      performOperation(numberSet);
    }
  });

  return (
    <div className="App">
      <div className="calculator-wrapper">
        <ValueDisplay numbers={numberDisplay} />
        <div className="buttons-wrapper">
          <NumberPad selectNumber={display} />
          <Operators groupNumbers={groupNumbers} />
        </div>
      </div>
    </div>
  );
}

export default App;
