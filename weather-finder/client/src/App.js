import { useEffect } from "react";
import "./App.css";

function App() {
  const [submitted, setSubmitted] = useState();

  useEffect(() => {
    const getWeather = async () => {
      await fetch("");
    };
  }, [submitted]);

  return (
    <div className="App">
      <form className="input-form">
        <label>Zip Code</label>
        <input type="text"></input>
        <button onClick={setSubmitted((submitted) => !submitted)}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
