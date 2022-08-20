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
        <div className="location-info-wrapper">
          <label>City</label>
          <input type="text"></input>
        </div>
        <div className="location-info-wrapper">
          <label>State</label>
          <input type="text"></input>
        </div>
        <button onClick={() => setSubmitted((submitted) => !submitted)}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
