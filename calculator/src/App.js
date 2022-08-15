import "./App.css";
import NumberPad from "./NumberPad";
import ValueDisplay from "./ValueDisplay";

function App() {
  return (
    <div className="App">
      <div className="calculator-wrapper">
        <ValueDisplay />
        <NumberPad />
      </div>
    </div>
  );
}

export default App;
