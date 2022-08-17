import { useEffect, useState } from "react";
import "./App.css";
import NumberPad from "./NumberPad";
import Operators from "./Operators";
import ValueDisplay from "./ValueDisplay";

function App() {
  const [numberDisplay, setNumberDisplay] = useState([]);
  const [numberSet, setNumberSet] = useState([]);
  const [ready, setReady] = useState(false);

  const display = (input) => {
    switch (input) {
      case "C":
        setNumberDisplay([]);
        break;

      default:
        numberDisplay === []
          ? setNumberDisplay(() => [input])
          : setNumberDisplay((numberDisplay) => [...numberDisplay, input]);
        break;
    }
  };

  function performOperation(numberSet) {
    const result = Function("return " + numberSet.join(""));
    // console.log("result", result());
    setReady(false);
    return result();
  }

  const groupNumbers = (operator) => {
    console.log("numberDisplay", numberDisplay);

    const current = numberDisplay.join("");
    const _number = parseInt(current);

    switch (operator) {
      case "=":
        setNumberSet((numberSet) => [...numberSet, _number]);
        setReady(true);
        break;
      default:
        setNumberSet((numberSet) => [...numberSet, _number, operator]);
        setNumberDisplay([]);
        break;
    }
  };

  useEffect(() => {
    console.log("numberSet", numberSet);
    console.log("numberDisplay", numberDisplay);
    if (ready) {
      setNumberSet([performOperation(numberSet)]);
      setNumberDisplay([performOperation(numberSet)]);
    }
  }, [ready]);

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
