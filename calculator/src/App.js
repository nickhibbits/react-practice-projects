import { useState } from "react";
import "./App.css";
import NumberPad from "./NumberPad";
import ValueDisplay from "./ValueDisplay";

function App() {
  const [numbers, setNumbers] = useState([]);

  const displayNumber = (num) => {
    setNumbers((numbers) => [...numbers, num]);
    console.log("numbers", numbers);
    return numbers;
  };

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
