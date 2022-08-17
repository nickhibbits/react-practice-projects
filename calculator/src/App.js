import { useEffect, useState } from "react";
import "./App.css";
import NumberPad from "./NumberPad";
import Operators from "./Operators";
import ValueDisplay from "./ValueDisplay";

function App() {
  const [numberDisplay, setNumberDisplay] = useState([]);
  const [numberSet, setNumberSet] = useState([]);
  const [ready, setReady] = useState(false);
  const [chainOp, setChainOp] = useState(false);

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
    console.log("numberSet", numberSet);
    const result = Function("return " + numberSet.join(""));
    setReady(false);
    setChainOp(true);
    return result();
  }

  const groupNumbers = (operator, chainOp) => {
    const current = numberDisplay.join("");
    const _number = parseInt(current);

    switch (operator) {
      case "=":
        setNumberSet((numberSet) => [...numberSet, _number]);
        setReady(true);
        break;
      case "x":
        if (chainOp) {
          setNumberSet([_number, "*"]);
          setNumberDisplay([]);
          setChainOp((chainOp) => !chainOp);
          return;
        }
        setNumberSet((numberSet) => [...numberSet, _number, "*"]);
        setNumberDisplay([]);
        break;
      default:
        if (chainOp) {
          setNumberSet([_number, operator]);
          setNumberDisplay([]);
          setChainOp((chainOp) => !chainOp);
          return;
        }
        setNumberSet((numberSet) => [...numberSet, _number, operator]);
        setNumberDisplay([]);
        break;
    }
  };

  useEffect(() => {
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
          <Operators groupNumbers={groupNumbers} chainOp={chainOp} />
        </div>
      </div>
    </div>
  );
}

export default App;
