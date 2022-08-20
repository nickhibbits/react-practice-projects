import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [backendData, setBackendData] = useState([{}]);
  const [submitted, setSubmitted] = useState();

  console.log("backendData", backendData);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setBackendData(() => data);
        }, 1000);
      });
  }, []);

  return (
    <div className="App">
      <form className="input-form">
        <label>Zip Code</label>
        <input type="text"></input>
        <button onClick={() => setSubmitted((submitted) => !submitted)}>
          Submit
        </button>
        <div>
          {backendData.length === 1 ? "loading" : backendData.messages[1]}
        </div>
      </form>
    </div>
  );
}

export default App;
