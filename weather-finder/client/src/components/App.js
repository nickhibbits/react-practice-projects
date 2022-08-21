import { useEffect, useRef, useState } from "react";
import "../styles/App.css";
import InputForm from "./InputForm";

function App() {
  const [coordinates, setCoordinates] = useState();
  console.log("coordinates", coordinates);

  const alert = async (city, state) => {
    const body = {
      city,
      state,
    };

    const response = await fetch("/getCoordinates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => data);

    setCoordinates(response);
  };

  useEffect(() => {
    if (coordinates) {
      console.log("coordinates available");
      const { lat, lon } = coordinates[0];
    }
  }, [coordinates]);

  return (
    <div className="App">
      <InputForm alert={alert} />
    </div>
  );
}

export default App;
