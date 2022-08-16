import { useEffect, useState } from "react";
import "./App.css";
import NumberPad from "./NumberPad";
import ValueDisplay from "./ValueDisplay";

function App() {
  const [numbers, setNumbers] = useState([]);

  const displayNumber = (input) => {
    console.log("input", input);
    numbers === []
      ? setNumbers(() => [input])
      : setNumbers((numbers) => [...numbers, input]);
  };

  useEffect(() => {
    console.log("numbers", numbers);
  });

  return (
    <div className="App">
      <div className="calculator-wrapper">
        <ValueDisplay numbers={numbers} />
        <NumberPad selectNumber={displayNumber} />
      </div>
    </div>
  );
}

export default App;
