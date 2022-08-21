import { useEffect, useState } from "react";
import "../styles/App.css";
import InputForm from "./InputForm";

function App() {
  const [backendData, setBackendData] = useState([{}]);
  const [submitted, setSubmitted] = useState(false);

  // console.log("backendData", backendData);

  const handleSubmit = (city, state) => {
    return setSubmitted((submitted) => !submitted);
  };

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          console.log("submitted", submitted);
          // setBackendData(() => data);
        }, 1000);
      });
  }, [submitted]);

  return (
    <div className="App">
      <InputForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
